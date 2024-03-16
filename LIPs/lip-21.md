---
title: Squatterd Profiles
description: Lip-21 opens the discussion for finding an (intermediate) solution on how to handle squatted profiles
author: seliqui (@seliqui)
status: Draft
type: Protocol
created: (2024-03-16)


## Abstract

Finding a solution on how to deal with squatted profiles.
Without having at least something in place, known brands will be hestitant to onboard to Lens if their handle has been squatted (or even worse, actively impersonating them), without any option to file a complaint and resolve the problem.



## Motivation

Especially after Lens came permissionless, it became more obvious that there's no solution in place on how to deal with handles that have been squatted - or even worse, actively impersonate a known project/brand. Having a "Lens-Wide Verification Process" in place as proposed in LIP-9 would help, but not resolve the problem.

To kickstart the discussion, I'll propose this approach:
(Going to use Uniswap as an example, since they already rightfully hold the uniswap.lens handle)

1. A profile gets reported as being squatted/impersonating
2. The Reporter needs to provide proof to be the valid owner/project and provide a predifined collateral.
3. The project get's marked as "squatted" by the Profile
4. Lens Platforms (if they choose so), show that this profile has been squatted and hide it from search results.
5. If the Profile owner logs in, they see a information banner appearing, informing them about their status and the link to the transfer-dashboard.
6. Lens offers a Dashboard, where that owner can rename his profile and claim the collateral. His followers/posts/etc... get transferred to that handle as well. Simultaniously the original handle gets transferred to the verified reportes account, starting with 0 followers, etc...
7. If the Squatter doesn't do through the dashboard (for example they squatted the handle but aren't active on lens), after a specified period (maybe 30 days) the profile gets transferred automatically to the verified reporter and the reporter gets the collateral back. The squatter still holds a lens profile with an addition (like _x).

Consider these steps as a ground for discussion, not a fully thought through approach.
Until there's something in place like the Cultivator DAO, an intermediate solution needs to be found.
And even afterwards, the DAO also needs some way on how to deal with the issue.


## Specification and Rationale

The discussion is WIP. No Specification or Rationale can/should be made at this point.

## Copyright

Copyright and related rights waived via CC0.
