# Live stream 1.0.0

## JSON schema

The JSON schema can be found [here](./schema.json).

## TypeScript

References:

- [MarketplaceMetadata](../../shared-ts-interfaces/marketplace-metadata.ts)
- [MetadataCommon](../../shared-ts-interfaces/metadata-common.ts)
- [PublicationMainFocus](../../shared-ts-interfaces/publication-main-focus.ts)
- [MediaVideo](../../shared-ts-interfaces/media-video.ts)
- [MediaImage](../../shared-ts-interfaces/media-image.ts)
- [MediaAudio](../../shared-ts-interfaces/media-audio.ts)

```ts
interface LiveStreamMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the live stream
   */
  $schema: 'https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/live-stream/1.0.0/schema.json';

  /**
   * The metadata details for the live stream
   */
  lens: LiveStreamMetadataDetails;
}

interface LiveStreamMetadataDetails extends MetadataCommon {
  /**
   * The live stream title
   */
  title?: string;

  /**
   * unix timestamp
   */
  startsAt: ISODate;

  /**
   * unix timestamp
   */
  endsAt?: ISODate;

  /**
   * Some live stream platforms have the playback url as a separate url
   */
  playbackUrl?: Url;

  /**
   * Some live stream platforms have the live url as a separate url
   */
  liveUrl: Url;

  /**
   * The data can not be changed so you can put in an API endpoint to know
   * if it is still live or not for clients to be able to check
   */
  isLiveNowApiCall?: Url;

  /**
   * Main content focus that for this publication
   */
  mainContentFocus: PublicationMainFocus.LIVE_STREAM;

  /**
   * The other attachments you want to include with it
   */
  attachments?: (MediaImage | MediaVideo | MediaAudio)[];
}
```

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/live-stream/1.0.0/schema.json",
  "name": "My live stream",
  "description": "My live stream",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "external_url": "https://live-stream.com",
  "animation_url": "https://playbackurl.com/playback.mp4",
  "lens": {
    "id": "1234",
    "content": "Come to my live stream tonight",
    "locale": "en-US",
    "mainContentFocus": "LIVE_STREAM",
    "title": "My live stream",
    "startsAt": "2023-05-24T12:46:10.987Z",
    "endsAt": "2023-05-24T19:46:10.987Z",
    "playbackUrl": "https://playbackurl.com/playback.mp4",
    "liveUrl": "https://liveurl.com/live.mp4",
    "isLiveNowApiCall": "https://api.com/3457435872435/is-live",
    "tags": ["live-stream"],
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
