LIP-9 Lens-Wide Verification Process
----

In light of LIP-5, which could/will open up the garden, a process for verified profiles becomes more relevant.

Currently, each Interface/App build on top of the protocol has their own way to verfiy profiles.
That makes it hard for new people to distinguish verified from non-verfied profiles, depending on the platform they got onboarded with
(example: a verified profile on hey doesn't appear as verified on tape)

Also, the newly introduced "reputation score" opens up new possibilities on that front.


Here's an approach to start the discussion:

- The protocol sets up a "database" that holds a list of all verified profiles.
- Each platform can submit to that database, adding new profiles as verifed - in that case, the badge would show "Verified by XYZ" on all platforms that aggregate the list.
- Each platform can choose to aggregate that list, but of course doesn't have to (tho it's recommended).
- If you have a reputation score above a defined threshold, you can apply for a general/lenswide verfication
- A "light verification" can be done individually by going through another process (like linking a github profie, etc...).
