# Live stream 1.0.0

## JSON schema

The JSON schema can be found [here](./schema.json).

## TypeScript

References:

- [MarketplaceMetadata](../../shared-ts-interfaces/marketplace-metadata.ts)
- [MetadataAttribute](../../../shared-ts-interfaces/metadata-attribute.ts)
- [MetadataCommon](../../shared-ts-interfaces/metadata-common.ts)
- [PublicationMainFocus](../../shared-ts-interfaces/publication-main-focus.ts)
- [MediaVideo](../../shared-ts-interfaces/media/media-video.ts)
- [MediaImage](../../shared-ts-interfaces/media/media-image.ts)
- [MediaAudio](../../shared-ts-interfaces/media/media-audio.ts)

```ts
interface LivestreamMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the livestream
   */
  $schema: "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/livestream/1.0.0/schema.json";

  /**
   * The metadata details for the livestream
   */
  lens: LivestreamMetadataDetails;

  /**
   * If you use an appId and you only want your app to be able to publish under it,
   * you will need to sign the `lens` object with your server private key
   * and populate the signature here. We will need your public key to verify this.
   * If the signature does not match what we have in our mappings it will not be surfaced
   * in the API.
   */
  signature?: Signature;
}

interface LivestreamMetadataDetails extends MetadataCommon {
  /**
   * The livestream title
   */
  title?: string;

  /**
   * unix timestamp (unix timestamp)
   */
  startsAt: number;

  /**
   * unix timestamp (unix timestamp)
   */
  endsAt?: number;

  /**
   * Some livestream platforms have the playback url as a separate url
   * If you do not liveUrl and playbackUrl should just be the same to avoid
   * confusion with optional fields
   */
  playbackUrl: URI;

  /**
   * Some livestream platforms have the live url as a separate url
   */
  liveUrl: URI;

  /**
   * The data can not be changed so you can put in an API endpoint to know
   * if it is still live or not for clients to be able to check
   */
  isLiveNowApiCall?: URI;

  /**
   * Main content focus that for this publication
   */
  mainContentFocus: PublicationMainFocus.LIVESTREAM;

  /**
   * The other attachments you want to include with it
   */
  attachments?: (MediaImage | MediaVideo | MediaAudio)[];
}
```

## Field extra requirements

`isLiveNowApiCall` response should be:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "isLive": {
      "type": "boolean"
    }
  },
  "required": ["isLive"]
}
```

`playbackUrl` and `liveUrl` must have the `lensId` in the query string parameter example:

`https://decentralized-media-server.com/stream.m3u8?lensId=0x2c6b-0x10`

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/livestream/1.0.0/schema.json",
  "name": "My livestream",
  "description": "My livestream",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "external_url": "https://livestream.com",
  "animation_url": "https://playbackurl.com/trailer.mp4",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "content": "Come to my livestream tonight",
    "locale": "en-US",
    "mainContentFocus": "LIVESTREAM",
    "title": "My livestream",
    "startsAt": "2023-05-24T12:46:10.987Z",
    "endsAt": "2023-05-24T19:46:10.987Z",
    "playbackUrl": "https://playbackurl.com/playback.m3u8?lensId=0x2c6b-0x10",
    "liveUrl": "https://liveurl.com/live.m3u8?lensId=0x2c6b-0x10",
    "isLiveNowApiCall": "https://api.com/is-live",
    "tags": ["livestream"],
    "attachments": [
      {
        "type": "PNG",
        "item": "https://myimage.com",
        "altTag": "My Image",
        "license": "CCO"
      }
    ],
    "appId": "my-app-id"
  }
}
```

## Implementation recommendations

- `animation_url` should be used if you wish to make it collectable we suggest using a small video of the livestream as a trailer so opensea and other marketplaces can view it. Anything over 100MB will not be loaded by opensea. This is not to be used on clients wanting to show the livestream, always use the `playbackUrl` and `liveUrl` for this. `animated_url` only exists for compatibility with more generic NFT applications.
- if `startTime` is passed and `isLiveNowApiCall` is returning false then we advise the clients to not show the livestream as live.
- do not call `isLiveNowApiCall` until `startTime` has passed.
- if `endTime` is passed and `isLiveNowApiCall` is returning true then we advise the clients to continue showing the livestream as live.
- if you wish to do a `go live` button you can just prefill the `startTime` as now to meet the spec.
