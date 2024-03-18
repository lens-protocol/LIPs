---
title: <Open Communities Standard>
description: <A unified standard for creating and managing Communities which allows using them in an interoperable manner across the Lens ecosystem.>
author: <Radom Potential (@random-potential)>
status: Draft
type: <Lens Metadata Standard>
created: <2024-02-18>
---

## Abstract

Lens Communities (also called Channels, Groups or Clubs) is one of key Lens functionalities. They provide like-minded individuals with a place to discuss specific topics they are interested in. This LIP proposes a unified standard (the Open Community Standard) for creating and managing Communities which allows using them in an interoperable way across the Lens ecosystem.

## Motivation

Currently, numerous Lens apps (Phaver, Orb, Lenspeer and soon Hey) each offer different implementations of Communities with significant part of their functionalities isolated within the parent app. This results in fragmented user silos and makes navigating the ecosystem confusing, especially for newcomers, as interoperability levels can differ from app to app in various ways.

Overall, it can be detrimental to growth and adoption rates, especially in the current stage of ecosystem development, where network effects and joint efforts to expand the shared graph are crucial.

Interoperability of current implementations is possible and exists on some limited level. However, it is not sufficient, and increasing it would need active coordination between all involved parties, making it ever harder to maintain as the number of apps grows.

To address all that, a unified standard for creating and managing Communities in a way that allows interoperability between apps is needed. It will ensure apps have a straightforward way to offer Communities which are accessible from any other app that supports the same standard.

Apps might still choose to have isolated Communities, however, an option to create interoperable ones is crucial for the ecosystem growth. In the longer run, users will decide which model (app gated or interoperable) will prevail.

Finally, ensuring openness and standardization of such a key functionality goes well in line with Lens philosophy and values.

## Specification

These are high level requirements for key interoperability aspects to be standardized. Architecture and technicalities needed to achieve it will have to be detailed separately once the principal decision to go forward is taken via this LIP.

### Key functional requirements

The Open Community Standard shall define all relevant details required for users to perform the following actions from any Lens app in an interoperable manner:

- Create a Community
- Manage Community settings
- Delete a Community
- View requirements to join a gated Community
- Join a Community
- Leave a Community
- View and interact with both public and gated Community posts
- Publish public or gated posts within a Community
- Delete public or gated posts within a Community
- Perform any other relevant Community related actions

All the above should not bar apps from also supporting other types of Communities, including app gated ones.

## Rationale

Implementing Communities as a new protocol level primitive could also be considered.

## Backwards Compatibility

Slight social tensions might arise if several communities with overlapping topics will decide to transition to the new standard when it is implemented. That might be tricky for users, as they would have to figure out which one to choose.

## Security Considerations

Needs discussion.

## Copyright

Copyright and related rights waived via CC0.
