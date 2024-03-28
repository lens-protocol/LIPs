---
title: <LIP-22 Refine LIP Creation Process>
description: <This proposal aims to create a new framework for early-stage LIP to lower technical barrier to start discussions and create a space to refine ideas.>
author: <@lens/defispartan>
status: Draft
type: <Procedure>
created: <date created on, 2024-03-28>
---

## Abstract

There is a currently a high technical barrier of entry to publish an LIP. There is also uncertainty for LIP creators about what level of detail a proposal requires. This proposal seeks to address both of these issues by introducing an optional first stage in the LIP process: "Discussions". By using GitHub Discussions as the first step in the proposal process, this will allow community to more easily begin a proposal conversation and refine ideas before submitting an official LIP pull request.

## Motivation

The current process for submitting an LIP is: fork LIP repo -> add LIP file to fork repo -> commit -> open pull request to LIP repo.

This process can be confusing, especially for people without previous GitHub experience. The LIP process is intended to be a platform for any Lens user to propose changes, so the process of starting a discussion should accommodate for this.

The current process also has uncertainty about the requirements for creating and refining an LIP. An LIP creator is expected to include all proposal details, but often times the details aren't initially known (technical, procedural), or there is community feedback that makes it unclear whether a proposal should proceed or be modified. Adding a discussion phase would address these uncertainties by lowering the requirements to propose an idea, and allow community feedback before an idea is officially proposed.

## Specification & Rationale

I propose that https://github.com/lens-protocol/LIPs/discussions is adopted as an optional first phase in the LIP process, under a new category ("LIP Ideas").

This would allow anyone to introduce a new proposal idea in just a few clicks: New discussion -> LIP Ideas - Get Started -> Add title and body -> Start discussion.

This does not introduce a timeline or conditions for when a proposal should move from the discussion phase to pull request. This is left up to the creator or anyone participating in the thread who wants to create a formal LIP based on the discussion. If a proposal is already well-defined, it could even skip the discussion phase and move directly to LIP.

This proposal also updates the README to include instructions for creating an "LIP Idea" and "LIP Pull Request".

## Copyright

Copyright and related rights waived via CC0.
