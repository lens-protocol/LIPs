# Model Service Metadata

## Service ID

`profile_global_karma3labs_influencer-score_1`

## Model Description

This model provides EigenTrust-based global trust scores for profiles.

### EigenTrust Input

#### Peers

We treat each profile as a peer.

#### Local Trust

Between two profiles A and B, the local trust from A to B is defined as:

3 * (number of comments made by A on B's posts) +
8 * (number of A's mirrors of B's posts) +
6 * (1 if A follows B, otherwise 0) + 
12 * (number of collects by A of B's posts)

Since a follow is from an address to a profile,
we convert the address of a follow to the primary profile of the address.

#### Pre-Trust

We place uniform pre-trust (used as both initial trust and trust bias)
for the hand-curated list of 10 profiles:

```
   id   |       handle        
--------+---------------------
     13 | yoginth.lens
    142 | christina.lens
     49 | mariariivari.lens
     36 | bradorbradley.lens
      6 | wagmi.lens
   3297 | levychain.lens
      9 | nicolo.lens
     45 | sasicodes.lens
      5 | stani.lens
     22 | davidev.lens
```
#### Alpha (pre-trust bias strength)

0.5

#### Convergence Criteria

Full ranking stability (flat-tail) for two iterations.

## Model Developer

Karma3 Labs
([Website](https://karma3labs.com/))
([GitHub](https://github.com/Karma3Labs/))
([Twitter](https://twitter.com/Karma3Labs/))

## Intended Uses

### How the Model Should Be Used

The score is the trust weight of each profile in the network, in the range of [0..1].
Scores are relative: Scores of all profiles sum to 1.0.

#### Ranking

These profile scores can be used as ranking keys:

* Sorting profiles by the score gives the global ranking.
* Profile search result (ex: search by name) can be sorted using the score
  in order to display relevant results at the top (think of Google's PageRank).

#### Trustworthiness Gauge

Individual profile's percentile position in the global ranking
can indicate how much trustworthy the profile is.
Established non-sybil profiles tend to float to the top of the ranking;
bots/sybils and new profiles lacking inbound trust tend to sink to the bottom.

### Model Date

2023-06-29

## Model Versions

### Version 1 (2023-06-29)

* Initial version.

## Model Interval

Scores are updated every 3 hours.

## Limitations (optional)

## External Website

https://karma3labs.com/

## GitHub Repository

https://github.com/Karma3Labs/ts-lens

## Licenses

MIT License

## Global Model Data Output Location

s3://karma3labs/eigentrust-lens-influencer/latest.jsonl
