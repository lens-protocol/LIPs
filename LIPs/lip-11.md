---
title: Momoka should be open for all
description: Momoka should be open for all and not just for sponsored users, enabling users to pay for Momoka credits and engage with the platform independently of Lens sponsorship.
author: Josh Stevens (joshstevens19)
status: Draft
type: Protocol
created: 2024-02-19
---

# Abstract

Momoka is a data scaling solution that significantly reduces costs by 75x-100x and enhances scalability by 10,000x compared to traditional onchain transactions, while preserving the fundamental ownership traits inherent in direct on-hain actions. Utilising simulations and signatures, Momoka ensures that publications such as posts, comments, quotes, and mirrors can be uniquely attributed to their originators or those possessing the requisite access keys. The cost-effectiveness of Momoka is highlighted by its average transaction cost of $0.0004.

# Motivation

The goal of Momoka is inclusivity. Although Lens currently sponsors profiles deemed as real users, access to Momoka is exclusively through the Lens API, restricting unsponsored users. Drawing parallels with blockchain's accessibility, where users can interact with protocols regardless of sponsorship, Momoka should extend its inclusivity to all users put allow them to pay their own way.

# Specification

The proposal introduces a system for purchasing Momoka credits, enabling users to engage with the platform independently of Lens sponsorship.

## 1. New Momoka Credits Smart Contract

A dedicated smart contract will facilitate the purchase of Momoka credits, accepting MATIC in exchange for credit allocations, evidenced by emitted events. Incorporating a price oracle, the contract will adjust MATIC's value to the dollar every 24 hours. This feature also enables community sponsorship by allowing credit purchases for any profile by anyone.

Future enhancements may include integration with conventional payment systems like Stripe for even broader accessibility.

## 2. Lens API Indexing of Momoka Credits

Integration with the Lens API will ensure that credit transactions are accurately recorded against user profiles, adding to any existing credits.

## 3. Transferability of Momoka Credits

The platform will support the gifting of credits between user profiles, enhancing the community-driven ethos of Momoka. This will be done via the Lens API but only the owner of the profile can gift credits.

### 4. Credit Utilization

Momoka will deduct a credit for each action performed. Sponsored users will not be subjected to this deduction, preserving their credit balance.

### Transparency

The onchain nature of credit transactions, coupled with the archival of publication proofs on Arweave, ensures a transparent ecosystem where the integrity of credit deductions by the Lens API is verifiable. Additionally, credit balances will be accessible via a public BigQuery dataset, further enhancing transparency.

### Pricing

Credits are priced at $0.0006 each, a slight premium over the average transaction cost, to account for the value provided by the protocol. An additional fee of $0.0002 per credit covers protocol expenses. The pricing model is subject to adjustment in line with fluctuations in transaction costs. Credits, once purchased, are non-exchangeable for MATIC.

## Security Considerations

To prevent overspending, the Lens API will implement a locking mechanism for profile actions during credit consumption. This ensures that credit expenditure is tightly controlled, reflecting the actual usage per profile. Profile managers can also utilise credits. Only profile owners may transfer credits.

## Copyright

This document and all associated intellectual property rights are hereby relinquished via CC0.
