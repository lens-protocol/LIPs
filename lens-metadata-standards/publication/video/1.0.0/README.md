# Video 1.0.0

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
interface VideoMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the video
   */
  $schema: 'https://raw.githubusercontent.com/lens-protocol/lens-standards/main/lens-metadata-standards/publication/video/1.0.0/schema.json';

  /**
   * The metadata details for the video
   */
  lens: VideoMetadataDetails;
}

interface VideoMetadataDetails extends MetadataCommon {
  /**
   * The video for the publication
   */
  video: MediaVideo;

  /**
   * Main content focus that for this publication
   */
  mainContentFocus:
    | PublicationMainFocus.VIDEO
    | PublicationMainFocus.SHORT_VIDEO;

  /**
   * The other attachments you want to include with it
   */
  attachments?: (MediaImage | MediaVideo | MediaAudio)[];
}
```

## JSON example

Will use all the fields but remember a lot are optional you can use the json schema to see this.

### Video

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/lens-standards/main/lens-metadata-standards/publication/video/1.0.0/schema.json",
  "name": "My Video",
  "description": "My Video Description",
  "external_url": "https://myvideo.com",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "animation_url": "https://myvideo.com/video.mp4",
  "lens": {
    "metadata_id": "1234",
    "locale": "en-US",
    "mainContentFocus": "VIDEO",
    "content": "My Video Content",
    "tags": ["video"],
    "video": {
      "type": "MP4",
      "item": "https://myvideo.com",
      "altTag": "My Video",
      "cover": "https://myimage.com",
      "duration": 100,
      "license": "CCO"
    },
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

## Short video

Must be under 2 minutes.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/lens-standards/main/lens-metadata-standards/publication/video/1.0.0/schema.json",
  "name": "My Video",
  "description": "My Video Description",
  "external_url": "https://myvideo.com",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "animation_url": "https://myvideo.com/video.mp4",
  "lens": {
    "metadata_id": "1234",
    "locale": "en-US",
    "mainContentFocus": "SHORT_VIDEO",
    "content": "My Short Video Content",
    "tags": ["video"],
    "video": {
      "type": "MP4",
      "item": "https://myvideo.com",
      "altTag": "My Video",
      "cover": "https://myimage.com",
      "duration": 100,
      "license": "CCO"
    },
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
