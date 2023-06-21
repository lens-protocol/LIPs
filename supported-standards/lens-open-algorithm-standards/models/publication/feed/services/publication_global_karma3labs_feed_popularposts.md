# Model Service Metadata

## Service ID

`profile_global_karma3labs_popular-feed_1`

## Model Description

This model is designed to highlight the **most recent viral posts by the most popular profiles**. We compute **[EigenTrust](https://karma3-labs.gitbook.io/karma3labs/eigentrust) scores** for every single profile. We then combine the trust scores of profiles with the **publication stats** (number of comments, mirrors, collects and age) of every post authored by each profile to produce a recommendation score for every post.

The posts with top scores and created within the last 14 days are then recommended to users.  The formula used to combine scores is a linear equation: 
```
    10 * profile_global_trust_score \
    + 2 * comments_count/max(comments_count) \
    + 5 * mirrors_count/max(mirrors_count) \ 
    + 3 * collects_count/max(collects_count) \
    - 2 * age_in_days/max(age_in_days)
```

## Model Developer

Karma3 Labs
([Website](https://karma3labs.com/))
([GitHub](https://github.com/Karma3Labs/))
([Twitter](https://twitter.com/Karma3Labs/))

## Intended Uses

### How the Model Should Be Used
* The postIds in the array are in the order that they should be recommended to end-users. However, clients can decide to re-order the posts chronologically if it fits their UX better.
* The model refreshes the feed every 1 hour

### Model Date

2023-05-22 053757

## Model Versions

### Version 1 (20230522053757)

* Initial version

## Model Interval

Feed is updated every 1 hour.

## External Website

[Content Discovery on Lens Protocol](https://www.notion.so/karma3labs/Content-Discovery-on-Lens-Protocol-e13aae4dcfc64532af32d74a521dbca8#c2f4192a85ae4d90b9d3bb9af20707fd)

## GitHub Repository

https://github.com/Karma3Labs/ts-lens

## Licenses

MIT License

## Global Model Data Output Location

s3://karma3labs/lens-feed/popular/latest.json

