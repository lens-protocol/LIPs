---
title: Allow metadata to be changed in a publication
description:
author: Léo Pradel (@pradel)
status: Draft
type: Protocol
category: Contracts
created: 2023-11-19
---

## Abstract

Allow publication metadata to be changed while keeping a revision history of the changes by using ERC-7160 and ERC-4906.

## Motivation

Currently, to be able to change the metadata of a publication one needs to store the content on a centralised storage where he can change the response for the same URL, he then needs to call the `refreshPublicationMetadata` mutation to get the content re-indexed by the Lens indexer.

This is far from ideal as it forces the content to be stored on a centralised storage and putting creators' content at risk.

## Specification

ERC-7160 can be used to store multiple metadata URIs per token and pin the latest revision of the metadata. The contracts should also use ERC-4906 and emit an event when the metadata is updated. The Lens indexer should then listen to this event and update the metadata of the publication. The Lens indexer could keep a revision history of the metadata changes and the metadata could be stored on a decentralised storage (IPFS, Arweave etc..).

## Rationale

The current solution was motivated by having a solution that allows the content to be stored on a decentralised immutable storage while still being able to change the metadata of the publication and see the old versions.

## Backwards Compatibility

No backward compatibility issues found.

## Security Considerations

TBD.

## Copyright

Copyright and related rights waived via CC0.
