---
title: Rename profile(s) to network(s)
description: Redefine the term "profile" to "network"
author: Lens Protocol Core Team
status: Draft
type: Protocol
created: 2023-09-25
---

## Motivation

With handles now detached from profiles in Lens v2, the confusion of the difference between a profile and a handle will continue and we need to make it easier for users to understand the difference.

The main confusion is that users need to be more used to profiles and handles not being directly linked. It's a new term to wrap your head around, and with it being so ingrained in us that my handle is my profile, this link together is hard to knock out of people using the same terms to explain it.

It is essential that it's easy to understand the difference between profiles and handles; the only way to do this is by renaming the narrative around it. Note that the profile(s) rename to network(s) does not change functionality; it's purely a visual change.

## Specification

In lens v2, the handle is tokenised and detached from the profile this means someone could own many handles and decide which identity the profile has daily. Also allows apps to have a different identity while using it to another app. This powers innovation. The handle is associated with identity, and the profile consists of the social graph itself, including follows and content.

With this in mind, we propose renaming profile(s) > network(s).

If we think of how the web works today, you deploy your code on a box somewhere that a cloud server hosts and that identity is purely an IP address that nobody ever sees; now, you can add your DNS on top of it to make it easy to identify and resolve. You can change your DNS from hello.com to hello2.com, and the published website will stay the same.

Let's look at point 2. As people, we are all identified in the world as numbers, serial numbers; our passport is a number, and our government ID is a number; in theory, that's how we are identified worldwide on computers. We add properties to give us an identity like name, gender, etc.; we can change those properties at any given time, but we still have the same government ID and network under the hood; we are still us.

Profiles are the same here; their names should be as close to the descriptive meaning as possible. Your profile is purely a tokenised NFT, which is resolvable by the tokenId of 1,2,3... with that, you can create content within your deployed profile. Profiles are not your public-facing identity; it's just where your follow graph, content and everything around your profile is stored. Your identity is curated and changed by yourself whenever you want.

Renaming profiles to networks widely supports the ethos of users owning their network “own your network”.

## Backwards Compatibility

It will be executed with lens v2 upgrade, which already has some breaking changes.

## Security Considerations

No security concerns.

## Copyright

Copyright and related rights waived via CC0.
