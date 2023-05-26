---
title: Lens open algorithm standard
description: Set standards for how Lens algorithms should be built
author: Josh Stevens (joshstevens19)
status: Draft
type: Lens Open Algorithm Standard
created: 2023-05-25
---

## Motivation

The rapid growth and development of Lens algorithmic systems including ML have underscored the importance of establishing open standards that promote consistency, interoperability, and collaboration. By setting open standards for naming algorithm-specific conventions, entities, service requirements, metadata, and data output, as outlined above, the Lens community can streamline the process of integrating various Lens algorithms, algorithm models and services into a cohesive ecosystem. This uniformity will enable developers and researchers to work more effectively together, reducing the time and effort spent on understanding and adapting to different proprietary systems. Furthermore, these open standards facilitate the sharing of knowledge and expertise, fostering innovation and encouraging the development of best practices in the Lens data sicence community. By adopting and adhering to these open standards, the community can accelerate progress in Lens data science to unlock its full potential to benefit from various industries and applications across the ecosystem.

## Specification

You can read about all of this in the [Lens Open Algorithm Standard](../lens-open-algorithm-standards/README.md)
title: Metadata Standards for Lens
description: Improve the Metadata standards allowing standards to grow on their own
author: Josh Stevens (joshstevens19)
status: Draft
type: Lens Metadata Standard
created: 2023-05-26

---

## Abstract

Metadata was growing and growing, and with that, we had a flat structure which worked, but it was not the best to grow on. We have different communities who want to grow their metadata standards over others, and at the current time, our standard was a single entity that had to grow by itself. This proposal splits out the standards so they can all grow by themselves.

## Motivation

We want Lens to be a community ran project with standards shaped by everyone, with the way metadata was set out before this was hard to co-write and also with no JSON schema very hard to validate. It should be easy to know the standards but also grow them without affecting other standards.

## Specification

The PR shows the full spec which will take place with these metadata standards.

## Backwards Compatibility

Metadata v1 and v2 will work and be supported. This metadata standard will now be called metadata v3 and be the new lens metadata standard and the one we suggest everyone use.

## Security Considerations

The only security concern is on the live stream proposal hoping to hear from some live stream web3 companies because the publication is immutable which means you need a way to know if it's still live or not so we need to flesh that out together. I proposed an API call to do this but this could lead to an attacker doing something bad maybe.

## Copyright

Copyright and related rights waived via CC0.
