---
title: Whitelist pointless token for paid collects and tipping on lens
description: Whitelist pointless token for paid collects and tipping on lens
author: lens/sydney_bro
status: Draft
type: Protocol
category: Contracts
created: 2024-02-02
---

## Abstract

$pointless was created to have some fun on lens on a weekend when @lensprotocol posted about having points as a reward mechanism on the lens ecosystem.
Soon a lot of people on lens showed interest in the token and I decided to distribute the token to everyone on lens. A number of memes were created and community had fun while mocking the crypto projects launching points system rather than building for their projects.

There were some discussions to put the $pointless token to some real use afterwards, for example: using it for paid collects or tipping. However, the lens protocol maintains a whitelist of tokens that could be used for paid collects and tipping. This LIP proposes to add $pointless token to the whitelist so that community can use it for the aforesaid purposes.

## Motivation

$pointless was airdropped to all wallets that held a lens profile NFT on 17th December 2023. It is currently worthless with very low liquidity on uniswap and it is likely to stay like that however it can generate some traction on lens if we enable paid collects and tipping using $pointless. Because everyone holds some pointless, they can collect posts using it or start tipping people using it.

## Specification

Ticker: pointless
CA: 0x9B8cc6320F22325759B7D2CA5CD27347bB4eCD86
Decimals: 18
Max supply: 1 Trillion
Chain: Polygon

It's a OpenZeppelin standard ERC-20 token.

## Copyright

Copyright and related rights waived via CC0.