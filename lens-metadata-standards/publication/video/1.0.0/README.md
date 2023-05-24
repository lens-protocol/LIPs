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
  $schema: 'https://schemas.1hive.org/metadata/video/1.0.0/schema.json';

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
  attachments: (MediaImage | MediaVideo | MediaAudio)[];
}
```

## JSON example

```json
{
  "$schema": "TO_MAP_TO_SCHEMA",
  // start of marketplace fields - if its not tokenized no need to add these fields
  "name": "My Video", // optional
  "description": "My Video Description", // optional
  "external_url": "https://myvideo.com", // optional
  "attributes": [], // optional
  "image": "https://myimage.com/image.png", // optional
  "animation_url": "https://myvideo.com/video.mp4", // optional
  // end of marketplace fields
  "lens": {
    "metadata_id": "1234",
    "locale": "en-US",
    "mainContentFocus": "VIDEO",
    "content": "My Video Content", // optional
    "tags": ["video"], // optional
    "video": {
      "type": "MP4",
      "item": "https://myvideo.com",
      "altTag": "My Video", // optional
      "cover": "https://myimage.com", // optional
      "duration": 100,  // optional
      // means anyone can use it
      // if you leave blank it also means anyone can use it
      // you can also apply a proper license
      "license": "CCO", // optional
    },
    // you can attach more media items as you wish
    // you can add more videos in here as well any extra
    // media items can go in here
    "attachments": [
      {
        "type": "PNG",
        "item": "https://myimage.com",
        "altTag": "My Image", // optional
        // means anyone can use it
        // if you leave blank it also means anyone can use it
        // you can also apply a proper license
        "license": "CCO", // optional
      },
    ],
    "appId": "my-app-id", // optional
  },
};
```
