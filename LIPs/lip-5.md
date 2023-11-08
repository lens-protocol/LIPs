---
title: Profile Guardian Tied to ERC 6551 Wallet
description: This LIP proposes to tie the Profile Guardian to an Ethereum Request for Comment (ERC) 6551 wallet, allowing users to disable it for individual profiles without affecting others.
author: @DanIsNearby
status: Draft
type: Protocol
category: Contracts
created: 2023-11-08
---

## Abstract

This LIP suggests a modification to the Lens protocol to associate the Profile Guardian with an ERC 6551 wallet. This change will enable users to disable the Profile Guardian for specific profiles, reducing the risk to individual profiles when needed.

## Motivation

The current implementation of the Profile Guardian in Lens ties it to a user's primary wallet, making it an all-or-nothing security measure. This can be problematic when users wish to disable the guardian for a specific profile temporarily. This LIP aims to address this limitation and enhance the flexibility of the Profile Guardian by associating it with an ERC 6551 wallet.

## Specification

The proposed modification involves linking the Profile Guardian to an ERC 6551 wallet. This association will allow users to manage the guardian on a per-profile basis, providing more granular control over their security settings.

## Rationale

The rationale behind this change is to improve the user experience and security of the Lens protocol. By enabling users to disable the Profile Guardian for individual profiles while keeping it active for others, we provide a more adaptable security solution.

No specific alternate designs or related work are mentioned at this time.

## Backwards Compatibility

No backward compatibility issues have been identified with this proposal.

## Security Considerations

The security implications of this change should be thoroughly discussed. Potential concerns, risks, and implementation-specific guidance must be addressed to ensure the safety of this feature. Further security discussions are required before finalizing this proposal.

## Copyright

Copyright and related rights waived via CC0.
