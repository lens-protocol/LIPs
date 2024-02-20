---
title: Profile Actions
description: Profile Actions allow for building custom on-chain operations that can be executed on Lens profiles.
author: Paul Burke <paul@paulburke.co>
status: Draft
type: Protocol
category: Contracts
created: 2024-02-20
---

## Abstract

Profile Actions allow for building customizable on-chain operations directly associated with Lens profiles. Like Publication Actions (Open Actions), Profile Actions make most sense to use when you want to link the provenance of an action to a profile. Some examples include:

- Following
  - Onchain following is already possible in Lens V2, enabling more complex interactions like minting NFTs and token gating. Similar to the way that a _Collect_ is a Publication Action, this proposal  suggests that a _Follow_ is a Profile Action.
- Subscriptions
  - Recurring subscriptions can be used for creator monetization, similar to Patreon, Twitch, or Substack.
- Social Tokens
  - Personal/social tokens tied to a Lens Profile, similar to FriendTech or BitClout, but using widely interoperable EVM standards.
- Social Verifications
  - Profile actions can be used to verify or endorse profiles, like a checkmark on Twitter, but with more flexibility and decentralization.

## Motivation

Lens currently focuses primarily on content interaction, leaving a gap in direct profile engagement opportunities such as subscriptions, personal token issuance, and social credential verifications. These features can be essential for creators seeking to monetize their content, build closer community ties, and enhance their social graph.

Open Actions are a powerful tool for enabling modular, composable, and interoperable on-chain interactions. Profile Actions extend this power to the profile level, allowing for a wide range of new interactions and use cases.

## Specification

Profile Actions will be implemented as smart contracts that interact with Lens profiles, allowing for a variety of custom actions to be executed. They will follow the same patterns as Publication Actions and Follow Modules, including:

1. Meeting the Module Metadata Standard
2. Requiring registration in the Lens Module Registry
3. Implementing a standard `IERC165` interface for LensHub to interact with, including `initialize()` and `process()` functions
4. Requiring a signature to execute actions that handle user funds.
5. Requiring verification for sponsorship (gasless/signless)

### Profile Action Interface

```solidity
/**
 * @title IProfileAction
 * @author Paul Burke <paul@paulburke.co>
 *
 * @notice This is the standard interface for all Lens-compatible Profile Actions.
 * Profile action modules allow users to execute actions directly from a profile, like:
 *  - Following
 *  - Subscriptions
 *  - Social Tokens
 *  - Etc.
 * Referrers are supported, so any publication or profile that references the profile can receive a share from the
 * profile's action if the action module supports it.
 */
interface IPublicationActionModule {
    /**
     * @notice Initializes the action module for the given profile.
     * @custom:permissions LensHub.
     *
     * @param profileId The profile ID of the profile to add this Profile Action to.
     * @param transactionExecutor The address of the transaction executor (e.g. for any funds to transferFrom).
     * @param data Arbitrary data passed from the user to be decoded by the Action Module during initialization.
     *
     * @return bytes Any custom ABI-encoded data. This will be a LensHub event params that can be used by
     * indexers or UIs.
     */
    function initializeProfileAction(
        uint256 profileId,
        address transactionExecutor,
        bytes calldata data
    ) external returns (bytes memory);

    /**
     * @notice Processes the action for a given profile. This includes the action's logic and any monetary/token
     * operations.
     * @custom:permissions LensHub.
     *
     * @param processProfileActionParams The parameters needed to execute the profile action.
     *
     * @return bytes Any custom ABI-encoded data. This will be a LensHub event params that can be used by
     * indexers or UIs.
     */
    function processPublicationAction(
        Types.ProcessProfileActionParams calldata params
    ) external returns (bytes memory);
}
```

Where `ProcessProfileActionParams` is defined something like:

```solidity
struct ProcessProfileActionParams {
    uint256 targetProfileId;
    uint256 actorProfileId;
    address actorProfileOwner;
    address transactionExecutor;
    uint256 followTokenId;
    uint256[] referrerProfileIds;
    uint256[] referrerPubIds;
    Types.PublicationType[] referrerPubTypes;
    bytes actionModuleData;
}
```

## Rationale

Profile Actions draw directly from the design principles of Publication Actions, emphasizing consistency, security, and ease of use. 

## Backwards Compatibility

Profile Actions requires special consideration for transitioning existing Follow Modules to the new framework. It will also require an update to the Lens Module Registry to support the new `IERC165` interface.

### Transitioning Existing Follow Modules

This proposal suggests classifying Follow Modules as Profile Actions. The transition to Profile Actions aims to preserve the core functionality of these modules. To ensure backward compatibility and a smooth transition, the following considerations are proposed:

1. **Interface Adoption**: New Follow Modules are encouraged to adopt the Profile Actions interface. This approach will unify interaction patterns across Lens, making it easier for developers to create consistent and interoperable experiences.

2. **Wrapper Contracts**: For existing Follow Modules that choose to integrate with the Profile Actions framework, wrapper contracts could serve as a bridge. These contracts would implement the Profile Actions interface, translating interactions to the existing Follow Module interface. This solution offers a non-intrusive way to bring existing functionality into the new framework without requiring significant changes to the original contracts.

3. **Documentation and Tools**: Providing comprehensive documentation and development tools will be crucial in assisting module creators to transition to or integrate with the Profile Actions interface. Guidelines on best practices, examples of wrapper contracts, and migration strategies will support developers in this process.

### Module Registry Update

This proposal includes renaming `FOLLOW_MODULE` to `PROFILE_ACTION_MODULE` in the Lens Module Registry.

``` solidity
enum ModuleType {
    __, // Just to avoid 0 as valid ModuleType
    PUBLICATION_ACTION_MODULE,
    REFERENCE_MODULE,
    PROFILE_ACTION_MODULE
}
```
This would require a change to the Module Registry contract to support the new `IERC165` interface.

## Security Considerations

Key considerations include the validation of action parameters, the management of permissions to prevent unauthorized actions, and ensuring the secure transfer of value when applicable. Existing verification and registration processes for Open Actions and Follow Modules will be extended to Profile Actions to provide confidence that only trusted and secure modules are verified.

## Copyright

Copyright and related rights waived via CC0.