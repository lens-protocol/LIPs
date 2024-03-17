---
title: Migrate Lens LIPs from Github to CharmVerse
description: To involve creators and non-engineers in building and improving LIPs, we propose to migrate LIPs from Github to CharmVerse
author: Alex Poon (@alexpoon_hk), CharmVerse (@charmverse)
status: Draft
type: Other
created: 2024-02-22
---

## Abstract

To involve creators and non-engineers in building and improving LIPs, a platform with intuitive UX and web3 native design tightly integrated into the Lens ecosystem is a must. We propose migrating the Lens LIPs from Github to CharmVerse.

## Motivation

CharmVerse enhances the workflow for Lens Improvement Proposals by offering a high degree of flexibility and user-friendly features. One or more creators can draft a new LIP in a modern and familiar text editor. The platform's notification system ensures timely feedback, alerting community members both in-app and via email, facilitating prompt and active participation. Alternatively, LIPs and comments can be shared on Lens, where subsequent comments are synced back to CharmVerse automatically. This inclusivity in the feedback process, where members can directly comment and suggest changes, fosters a collaborative environment. Additionally, the ability to designate specific roles for reviewing the LIPs for standards adherence adds a layer of quality control, ensuring that each proposal aligns with the community's standards. The flexible approval process, which includes options for committee approval or community voting, and the integration with Snapshot for community voting cater to different governance styles within the Lens ecosystem. This adaptability makes CharmVerse an ideal platform for managing the diverse and evolving needs of the Lens community.

## Specification

# A configurable and guided experience for LIPs
<img width="1128" alt="LIP workflow" src="https://github.com/alexpoon/Lens-Protocol-LIPs/assets/213622/7bfa217f-ee47-41ee-ac38-8ad8b753a7c6">



## Rubrics to customize the evaluation of LIPs

The CharmVerse Rubric system presents a comprehensive and effective solution for evaluating LIPs. Its design allows for the creation of tailored evaluation criteria that directly cater to the specifics of the Lens Protocol, ensuring that each proposal is assessed accurately and relevantly. The Rubric system supports numerical ratings and qualitative feedback, offering a balanced approach to proposal evaluation. This detailed feedback is actionable and promotes transparency, aligning with Lens's decentralized ethos. By involving community members in the evaluation process, the Rubric system enhances community participation in the governance of the Lens Protocol, fostering a more engaged community.

Moreover, the aggregation of rubric scores provides a data-driven basis for decision-making, ensuring that the evaluation process is objective and evidence-based. This aspect is particularly appealing to a technology-focused community like Lens. The Rubric system's flexible design anticipates future expansions, allowing it to adapt to evolving needs within the Lens ecosystem. Its integration into the existing proposal workflow in CharmVerse ensures a seamless and efficient review process.


# Lens Profiles

Lens Profiles are already integrated into CharmVerse. When authors review comments and suggested changes from community members, they have direct access to the member's Lens Profile. The integration of Lens Profiles into CharmVerse offers several advantages over traditional GitHub profiles, particularly for a community-centric and blockchain-focused platform like Lens. Some of these include:

**Web3 Identity Integration:** CharmVerse integrates with Lens, allowing users to log in and authenticate with their web3 identities. This is a significant enhancement over GitHub profiles. The use of web3 identities in CharmVerse aligns better with the ethos of decentralized communities, allowing users to showcase all their achievements and holdings in the decentralized space, in the form of NFTs, POAPs...

**Enhanced Transparency and Trust:** Blockchain-based profiles offer greater transparency, like those in CharmVerse with Lens integration. Every contribution, comment, or interaction made by a user can be more reliably traced and verified on the blockchain. This level of transparency builds trust within the community, as contributions such as LIPs are openly verifiable.

**Social Proof and Reputation:** In CharmVerse, social proof and reputation can be decentralized. Unlike GitHub, where reputation is primarily based on contributions within the GitHub ecosystem, CharmVerse can aggregate reputation from multiple decentralized sources, offering a broader perspective of a user's expertise and influence in the web3 space. Our [recent launch of credentials](https://x.com/CharmVerse/status/1753549484146008461?s=20) (powered by Ethereum Attestation Services) within member profiles will allow Lens to issue credentials to valuable LIP contributors. The reputation of users can also be verified and fostered through other credentials such as Gitcoin passports, etc...

# Posting to Lens

CharmVerse users with a Lens profile can automatically post their CharmVerse proposals and associated comments/suggested changes to Lens. 
<img width="1028" alt="publish to Lens" src="https://github.com/alexpoon/Lens-Protocol-LIPs/assets/213622/db669edd-e4a6-4c84-8ac4-f52e3c9c7141">


## LIP as Lens Publication

Publishing LIP in CharmVerse can also be optionally published on Lens. The Lens **POST** will be 140 characters long, with a link linking back to the original LIP on CharmVerse.

## Comments on LIP as Lens Comments

**COMMENTS** made on the LIP will trigger a **COMMENT** on Lens. The Lens **COMMENT** will be 140 characters long, with a link linking to the **COMMENT** on CharmVerse.

## Comments on other Lens Apps

**COMMENTS** made on the LIP **POST** on other Lens applications will be automatically reflected in the CharmVerse LIP. Lens users can interact with LIP without leaving Hey or Orb. 

## Expanding the exposure of LIPs

The integration of Lens with CharmVerse offers a seamless and efficient way for users to promote their proposals and engage with the community. By moving to CharmVerse, Lens users can publish their proposals and comments directly to Lens automatically. This feature significantly enhances the visibility and accessibility of their contributions. When a Lens Improvement Proposal transitions from the draft to the feedback stage in CharmVerse, it automatically triggers a publication on Lens. This ensures that the wider Lens community is promptly informed and can easily access the full proposal for more detailed review and feedback.

Furthermore, comments made on LIPs within CharmVerse are also posted as comments on Lens, maintaining the continuity of discussion across the Lens ecosystem. This integration not only streamlines the proposal process by keeping it in one place but also broadens the reach of each proposal and its associated discussions. Users benefit from increased exposure and engagement for their proposals, enhancing the collaborative nature of the Lens ecosystem. Moving from Github to CharmVerse opens up a new world of opportunities for meaningful user interactions within the Lens ecosystem.  

# Migration from Github to CharmVerse

CharmVerse team will support a one-time migration, moving existing LIPs and supporting documentation from Github to CharmVerse. We will provide educational materials to help users learn about the new LIP system.  

## Rationale

Migrating to CharmVerse significantly benefits the Lens community by bringing the proposal process to a Lens-native, easy-to-use platform. The CharmVerse platform streamlines the process, making it more efficient and user-friendly.

The Lens hub fosters more robust community engagement as users become more familiar with the platform's tools and features, leading to increased participation and interaction. This consistent interaction within one platform also simplifies the learning curve for new users, while our integration with Lens and our web3-oriented features add significant value to the LIP workflow.


## Security Considerations

The CharmVerse platform is hosted on AWS with decentralized credentials stored in IPFS via Ceramic. Terms and Privacy Policy can be found:

https://charmverse.io/terms/

https://charmverse.io/privacy-policy/

## Copyright

Copyright and related rights waived via CC0.

