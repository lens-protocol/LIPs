---
title: Combating Spam in Decentralized Social. A Lens Community-Driven Framework
description: How to combate spam in the Lens ecosystem
author: Lens Core Team
status: Draft
type: Protocol
created: 2024-03-15
---

## Abstract

The aim of Lens Protocol is to ensure an open, accessible, and innovative environment for web3 social network builders and users. This is achieved by maintaining a level, open playing field where success is determined by innovation, quality, and utility rather than preferential treatment. However, just like web2, decentralized web3 social networks face issues such as spam, presenting challenges for the industry as a whole. This proposal introduces a community-driven framework to address spam challenges collaboratively by introducing a Lens Improvement Proposal (LIP), which aims to tap the collective wisdom of application builders and participants in reducing spam.

## Motivation

This is the first framework to tackle spam within the Lens ecosystem, emphasizing a transparent community-centric approach. Acknowledging the early stage of web3 social and the unique characteristics and principles of the blockchain ethos, this proposal establishes an initial step and framework in an iterative process to address spam. It introduces "Gardeners" – or community members who flag and address spam, marking a proactive step towards a collaborative solution, which can evolve over time with community involvement.
Several of Lens’ leading ecosystem applications, including Orb, Hey, Tape and T2 have collectively committed and opted-in to setting an example by establishing the “Lens Integrity Working Group.” They will integrate the results of the Gardener’s initial collective spam mitigation framework into their operations, serving as the first testbeds to continually iterate the strategy over time in collaboration with the community.

Community labeling of suspected spam also empowers users to collectively identify and manage content that hurts the user experience.

## Specification

### Definition of Spam

Within the Lens ecosystem, spam is defined as various forms of unwanted or repetitive content that diminishes the quality of user interactions. It is a dynamic definition, evolving over time and requiring continuous innovation and adaptation from both platforms and users.

This encompasses:

- Automated or scripted behaviour, artificially boosting engagement metrics, such as spam liking or using bots;
- Deceptive practices or fraudulent schemes misleading users, including promoting scams or harmful activities;
- Repetitive posting of substantially similar content across multiple accounts;
- Annoying and disruptive or excessive, irrelevant content.

Recognizing the evolving nature of spam, applications in their early stages can benefit from a harmonized approach. Definitions and guidelines may vary between applications over time, and what constitutes spam for one application may differ from another. Adopting an initial consistent approach across the Lens ecosystem can be advantageous, with the understanding that adjustments may be needed as definitions and practices evolve as well as with the growth of the broader ecosystem.

### Gardeners

Gardeners play a vital role as designated community members who monitor, identify, and report spam across the Lens ecosystem. Gardeners include community members who opt-in, both builders and users, as well as members of the Lens core team.

Gardeners will follow this LIP recommendation, until it is updated by the community, based on community feedback that ensures transparency and fairness. Applications are encouraged to select their own Gardeners to represent them and their respective communities. Gardeners have a range of tools and measures at their disposal, including:

- Implementing automated algorithms and filters, utilizing user reporting mechanisms to detect patterns indicative of unwanted behaviour;
- Utilising user reporting mechanisms to flag suspicious content for review;
- Enforcing posting limits and account verification procedures to combat spam.

### Role of Users

The Lens community recognises the crucial role of community members in upholding the integrity and quality of the ecosystem. Within the Lens ecosystem, users across various applications are encouraged to participate. They are essential participants in combating spam. For example, actively flagging suspected spam on Hey.xyz provides crucial support to Gardeners and Lens applications. It is important for users to note that content moderation decisions beyond the scope of spam prevention are governed by application-level Terms & Conditions and community guidelines, not by Gardeners.

### Initial Framework

In the initial framework, profiles identified by Gardeners as potential spam undergo the following process:

- Flagged within the Lens API: These flags are reflected in the API and used by the Lens Integrity Working Group (composed of applications that have opted-in, such as Orb, Hey, Tape, T2). The API serves as an optional source of truth for spam filtering at the API level within these clients. Despite the flag, the content remains accessible permissionlessly in the database.

- Filtered into machine learning (ML) tools: Tools developed by Avara (and trained based on these flags to enhance spam prevention measures) filter for applications (that have opted-in), thereby benefiting all users.

Importantly, the Lens Protocol maintains neutrality. Also, the lens API makes these filters opt-out/opt-in; this means if an app does not want these rules, it can turn them off and get the raw information. Finally, an app can directly build its own backend and index all the data if they wish.

Additionally, Gardeners have the capability to un-sponsor profile gas fees. Un-sponsoring is considered a last resort and is implemented judiciously by the Gardeners.

When a profile is unsponsored, it means that Lens Protocol will no longer cover the gas fees associated with their activities. The profile is still able to use the protocol; however, profiles who are unsponsored by a Gardener will be responsible for covering their own gas fees for transactions on the network and are reduced to 10 Momoka actions per day. This typically follows reports from Gardeners, who identify profiles whose behaviour is not aligned with individual application standards.

### Transparency and Continuous Improvement

This LIP establishes a foundation for coordinated spam management across Lens applications in the early network stages. The core objective of safeguarding the network from spam for developers and users remains constant and will continuously adapt with future LIPs and advancements advocated by participants.

The Lens Integrity Working Group and Gardeners are dedicated to ongoing evaluation and improvement, adapting to emerging challenges, user feedback, and advancements in spam prevention tools. This is the initial step only, to a long-term solution, emphasizing community involvement in crafting solutions for network integrity. Active, collective participation in shaping future iterations, including addressing user appeals related to spam, will encourage continuous evolution of best practices.

The Lens protocol team fully supports this harmonized approach. While striving for neutrality, Lens remains committed to empowering the ecosystem through API content flagging and early-stage ML tools (e.g. [Quality Profile Classifier](https://console.cloud.google.com/bigquery?project=lens-ds&ws=!1m5!1m4!4m3!1slens-public-data!2sv2_polygon!3smachine_learning_quality_profiles)) to facilitate spam filtering.

### Community Labeling Initiative

In parallel, a community labeling initiative can be set in place to engage users and developers in combating spam. This would allow anyone to define and apply labels to content or accounts, fostering transparency and user participation. Manual labeling by Gardeners and the community would complement automated labeling systems, enhancing the ecosystem's resilience against unwanted spam.

## Rationale

Transparency and continuous improvement are foundational principles of Lens Protocol's spam mitigation framework. The Lens Integrity Working Group and Gardeners are committed to evaluating and refining spam management strategies in response to emerging challenges, new innovations in spam mitigation, and community feedback. Active community participation ensures the long-term integrity of the network.

## Backwards Compatibility

No backward compatibility issues found.

## Security Considerations

N/A

## Copyright

Copyright and related rights waived via CC0.
