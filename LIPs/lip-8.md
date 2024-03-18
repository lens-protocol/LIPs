---
title: Momoka Open Action
description: Enable customized open action for Momoka publications by off-chain attestation-based oracles.
author: Hang Yin (@h4x3rotab)
discussions-to: 
status: Draft
type: Protocol
category: Contracts, API, SDK
created: 2024-01-19
requires: 
---

## Abstract

This LIP introduces a method for enabling Open Actions on off-chain Momoka publications. It details the integration of an oracle-based attestation system to fetch, verify, and utilize off-chain Momoka data for on-chain transactions, thereby addressing the challenge of immediate data availability required by Open Actions. The proposal also outlines the necessary smart contract modifications, including new functions and an encoded publication ID system, to facilitate seamless interaction between on-chain and off-chain components.

## Motivation

In the current Lens Protocol ecosystem, an essential feature known as "Open Actions" allows Web3 applications to interact with and extend the functionality of on-chain publications. However, this capability is not yet available for "Momoka publications," which are stored off-chain on a data storage solution like Arweave. This limits the potential of Lens Protocol to scale and integrate more deeply with Web3 applications.

Momoka serves as a scaling solution capable of handling higher transaction throughputs than platforms like Twitter while maintaining cost-effectiveness. The integration of Open Actions with Momoka publications is therefore critical for enabling mass adoption and fostering innovation within the Web3 space.

The challenge lies in bringing off-chain Momoka data onto the blockchain in real-time, as required by Open Actions. Traditional oracles, which are off-chain services that fetch external data for smart contracts, introduce block latency that is incompatible with the atomicity needed for Open Actions. To address this, this proposal presents an innovative oracle-based attestation designed to utilize off-chain Momoka data for on-chain transactions without the typical delays.

By implementing this solution, it aims to overcome the barriers to Open Action availability for Momoka publications, thereby unlocking new possibilities for the Lens Protocol and its users.

## Specification

This proposal enables on-chain Open Action on Momoka publications. The diagram below illustrates the proposed flow for integrating Open Actions with Momoka publications:

![image](https://hackmd.io/_uploads/HkIOaxKUp.png)

1. `Alice` publishes a publication on Momoka with an `OpenActionModule`
2. `Bob` wants to trigger the Open Action. First, he requests an `Attestation` of the Momoka Publication from the `Oracle`.
3. The `Oracle` request the publication from the Lens API.
4. The `Oracle` sign the publication data, and wrap them as the attestation object.
5. `Bob` calls `LensHub.momokaAct()` with the act parameters and the attestation
6. `LensHub` verifies the attestation, extract the Momoka publication data from it, and stores the publication in the contract storage
7. `LensHub` reads the `OpenActionModule` out from the publication data, and call the Open Action module
8. The action logic of `OpenActionModule`  is triggered in the same way as on-chain Open Action. For example, mint a Collect NFT.

### Encoded Momoka Publication Id

To ensure compatibility, the Momoka publication ID should be normalized to the format of on-chain publications. This maximizes the shared code of on-chain and Momoka Open Actions.

Momoka publication is identified by a tuple `(profileId, pubRefId, daId)`:

- `profileId`: The profile id of the author
- `pubRefId`: The "reference" publication id. It's determined as the last on-chain publication id when the Momoka publication is created.
- `daId`: The 32 bits index of the publication data on the data availability layer

However, on-chain publications are identified by a pair `(profileId, pubId)`. Considering `pubId` is a self-incremental `uint256`, it's unlikely to reach the high 128 bits. So the high bits can be repurpose to embed the `daId` for Momoka publications. The two representations can be converted as below:

```solidity
// Encoding the Momoka publication ID into the on-chain format
pubId = pubRefId | (daId << 128);
// Decoding the encoded publication ID to extract the original Momoka identifiers
(pubRefId, daId) = (pubId & ((1 << 128) - 1), (pubId >> 128) & 0xFFFFFFFF);
```

### Attestation and Oracle

Attestations enable Lens smart contracts to access off-chain Momoka data, with an oracle service fetching this data and generating attestations. The oracle exposes a query API for specific Momoka publications from the Lens API, potentially including referrer publications, and returns an ABI-encoded `Attestation` object.

```typescript
function queryPublication(
	profileId: uint256,
	pubId: uint256,
	referrerProfileIds: uint256[], 
	referrerPubIds: uint256[], 
): Bytes
```

The `Attestation` is a tuple `(AttestationData data, bytes sig)` where `data` contains the publication data and metadata, and `sig` is a signature from the oracle's attestation key following EIP-712 standards. The `AttestationData` includes a nonce to prevent replay attacks and is structured as follows:

```solidity
struct AttestationData {
	// Metadata for signature verification
	address from;
	uint256 nonce;
	// Encoded ActOracleResponse
	bytes data;
}
struct ActOracleResponse {
	// Oracle response
	uint256 profileId;
	uint256 pubId;
	Types.PublicationMemory publication;
	Types.PublicationType[] referrerPubTypes;
	address[] actionModules;
	bytes[] actionModulesInitDatas;
	// Request parameters
	uint256[] referrerProfileIds;
	uint256[] referrerPubIds;
}
```

To verify the attestation, `LensHub` uses the signature to recover the oracle's attestation key address and checks that it matches the `from` field.

```solidity
// Verify with OpenZeppelin EIP712.sol
address signer = _hashTypedDataV4(
	keccak256(abi.encode(_TYPEHASH, from, nonce, keccak256(data)))
).recover(sig);
require(attester == from);
```

The `ActOracleResponse` is then decoded from the `data` field and compared against the original request parameters (`profileId`, `pubId`, `referrerProfileIds`, and `referrerPubIds`) to confirm its validity.

After successful verification, the publication data, along with the referrer information, is stored on-chain, enabling Open Action modules or other contracts to access it when needed (e.g. a Collect NFT may access the `contentURI` of a Momoka publication at any time). This attestation process ensures real-time data availability for on-chain transactions.

### Implementation

The `LensHub` contract will be extended with a new function, `momokaAct()`, to enable on-chain actions on off-chain Momoka publications:

```solidity
function momokaAct(
	Types.PublicationActionParams calldata publicationActionParams,
	bytes calldata oracleAttestation
) external returns (bytes memory)
```

This function is designed to process Open Actions on Momoka publications by verifying the provided `oracleAttestation` and ensuring the publication data is accessible to the action module. The `publicationActionParams` contains the parameters for the action to be performed, similar to those used in the existing on-chain `act()` function.

Before invoking `momokaAct()`, an actor must request an attestation for the target Momoka publication by sending the publication ID and any referral publication IDs to the Lens API oracle, as specified in the `PublicationActionParams`.

With the `oracleAttestation`, the `momokaAct()` function will perform the following steps:

- Verify that the transaction sender is authorized, either as the profile owner or a delegated executor.
- Check that the actor's profile is not blocked by the target profile.
- Validate the `oracleAttestation` against the attestation structure detailed in the "Attestation and Oracle" section, ensuring it includes the correct request fields (`profileId`, `pubId`, `referrerProfileIds`, and `referrerPubIds`).
- Extract and store the verified publication data from the `ActOracleResponse` in a publicly accessible storage location, allowing the action module to read it.
- Initialize the action module specified by `actionModuleAddress` and `actionModulesInitDatas` if not done yet
- Call the `processPublicationAction()` method in the action module.
- Emit an `Events.Acted` event, consistent with the behavior of a standard action.
- Return the result from the `processPublicationAction()` call.

The verified Momoka publication data should be accessible by `LensHub.getPublication()`. This function will be adapted to recognize and handle the encoded Momoka publication ID, as described previously, ensuring a unified method for accessing both on-chain and Momoka publication data.

For efficiency, a "lazy verification mechanism" may be implemented. For example, the `oracleAttestation` argument can be left empty if the requested publication is already stored on the blockchain, thereby saving gas.

### Gasless Implementation

The `LensHub` contract has been updated to include the `momokaActWithSig()` function:

```solidity
function momokaActWithSig(
	Types.PublicationActionParams calldata publicationActionParams,
	bytes calldata oracleAttestation,
	Types.EIP712Signature calldata signature
) returns (bytes memory)
```

The function is identical to `momokaAct()` with the following exception:

- The `signature` is verified with `MetaTxLib`, consistent with other functions in the `withSig` family.
- The `signature.signer` becomes the `transactionExecutor`.

This function allows any third party to sponsor the gas fee for a `momokaAct()` operation. The actor must generate the `PublicationActionParams` and obtain the corresponding `oracleAttestation` from the oracle. Subsequently, the actor can produce an `EIP712Signature` in the same manner as `actWithSig()`, and pass the arguments to a third party to relay the transaction.

Furthermore, parameter and attestation generation can be delegated to the Lens API. The API should introduce two new mutations:

```graphql
type Mutation {
	createMomokaActOnOpenActionTypedData(
		options: TypedDataOptions,
		request: ActOnMomokaOpenActionRequest!
	): CreateActOnOpenActionBroadcastItemResult!
	actOnMomokaOpenAction(
		request: ActOnMomokaOpenActionLensManagerRequest!
	): LensProfileManagerRelayResult!
}
input ActOnOpenActionRequest {
	for: MomokaPublicationId!
	actOn: ActOnOpenActionInput!
	referrers: [OnchainReferrer!] = []
}
type CreateMomokaActOnOpenActionBroadcastItemResult {
  id: BroadcastId!
  expiresAt: DateTime!
  typedData: CreateActOnOpenActionEIP712TypedData!
  oracleAttestation: BlockchainData!
}
input ActOnOpenActionLensManagerRequest {
	for: MomokaPublicationId!
	actOn: ActOnOpenActionLensManagerInput!
	referrers: [OnchainReferrer!] = []
}

"""The Momoka publication id in the format of (0x01-0x01-DA-AAAA)"
scalar MomokaPublicationId
```

The mutation `createMomokaActOnOpenActionTypedData` takes the inputs identical to `createActOnOpenActionTypedData` except it accepts a `MomokaPublicationId`. The API server should request the oracle and return a `CreateMomokaActOnOpenActionBroadcastItemResult` object with an additional `oracleAttestation` field populated by the Lens API server. This API enables users to delegate the creation of the `oracleAttestation`, eliminating the need for them to handle the additional oracle request directly.

Building on `createMomokaActOnOpenActionTypedData`, the higher-level API `actOnMomokaOpenAction` functions similarly to `actOnOpenAction`, but also incorporates the oracle attestation.

### Use Cases

Generally this proposal enables almost arbitrary Open Action on Momoka publications. Below is a few examples:

**Collect Momoka Publication**: The existing on-chain collect modules can be ported to support Momoka publications. The Momoka collect module must provide the Momoka publication data to the Collect NFT contract, which is available from `LensHub.getPublication()` before the Open Action module is called.

**Tipping**: The module can be implemented in the same way as the on-chain tipping module. The tipping settings is attached to the `actionModulesInitDatas` field in the Momoka publication and passed to the the on-chain Open Action module via the oracle attestation.

**Use Uniswap to Buy Crypto on Ethereum**: An Open Action module deployed on Polygon can be used to produce a signed `UserOp` being consumed by an ERC-4337 smart wallet on Ethereum to perform the swap action. The module settings carried by the Momoka publication and referral information are verified by `LensHub` and passed to the Open Action to trigger the consequential operations.

## Rationale

### Introduction of Momoka family functions

Although it is possible to upgrade the Lens Protocol to include oracle attestation handling within the existing `act()` functions, this proposal opts not to do so for the following reasons:

- It avoids introducing a breaking change to the ecosystem.
- `momokaAct()` is not always compatible with `act()`. In instances where the Open Action requires additional Momoka publication data, developers must handle this explicitly.

### Use of Attestation Services

Attestation Services, such as [EAS](https://attest.sh/) and [Verax](https://ver.ax/), provide a clear method to define and utilize off-chain data (referred to as "attestations"). However, these services only standardize the data format, leaving developers responsible for hosting the oracle and creating the data verification mechanism. An oracle is still necessary.

Ideally, Attestation Services could standardize data requests in on-chain smart contracts. For instance, `LensHub.momokaAct()` could request basic information about the target Momoka publication, and the Open Action Module could define its own data request using an attestation schema. However, to maintain the focus of this proposal, further development in this area is left as future work.

### Use of Request-based Oracles

Traditional request-based oracles are not suitable. Such an oracle is triggered by an on-chain transaction, with the response returned to the blockchain after a delay. However, the Open Action architecture requires immediate access to Momoka publication data within the action transaction, leaving no time for an asynchronous response from the oracle. Therefore, an attestation-based oracle is necessary.

## Backward Compatibility

The Momoka publication handling logic is backward compatible. Prior to this proposal, all the Momoka publications has no associated Open Action. Once this proposal is live, the way to handle old Momoka publications should be unchanged. The new publications can be posted with Open Action like on-chain publications.

The Open Action modules are partially backward compatible. Specifically, an on-chain Open Action can be applied to a Momoka publication if all the following conditions are met:

- It does not require additional Momoka publication data (e.g., it cannot access another Momoka publication as the data may be unavailable).
- It does not differentiate between on-chain and Momoka publications (e.g., the Collect module cannot be used interchangeably because its Collect NFT contract generates different names for on-chain and Momoka publications).

## Security Consideration

### Liveness

The proposal involves two off-chain components: the Lens API and an Lens API oracle. Any disruption to these off-chain components would prevent users from interacting with Momoka publications.

The Lens API is utilized by nearly all Lens clients. An outage affecting the Lens API would impact the entire Lens ecosystem. Therefore, the reliance on the Lens API does not diminish the liveness of systems based on this proposal.

The Lens API oracle must maintain a level of liveness that is at least equivalent to that of the Lens API. A reference implementation of the oracle on Phala Network can meet the goal. Such a decentralized network can host off-chain programs like oracles with significant redundancy (typically no fewer than 100 active nodes out of 30,000 available).

### Oracle correctness

The correctness of the reference implementation on the Phala Network is ensured through a combination of Trusted Execution Environment (Intel SGX) technology, cross-validation among redundant workers, and the tokenomic incentives within the network. This approach is expected to be more secure than the traditional oracles commonly in use.

### Upgradability

The oracle can be upgraded easily by deploying a new oracle and updating the attestation verification mechanism.

## Copyright

Copyright and related rights waived via CC0.
