# Image 1.0.0

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
interface ImageMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the video
   */
  $schema: 'https://raw.githubusercontent.com/lens-protocol/lens-standards/main/lens-metadata-standards/publication/image/1.0.0/schema.json';

  /**
   * The metadata details for the image
   */
  lens: ImageMetadataDetails;
}

interface ImageMetadataDetails extends MetadataCommon {
  /**
   * The image for the publication
   */
  image: MediaImage;

  /**
   * Main content focus that for this publication
   */
  mainContentFocus: PublicationMainFocus.IMAGE;

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
  "$schema": "https://raw.githubusercontent.com/lens-protocol/lens-standards/main/lens-metadata-standards/publication/image/1.0.0/schema.json",
  "name": "My Image",
  "description": "My Image Description",
  "external_url": "https://myimage.com",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "lens": {
    "id": "1234",
    "locale": "en-US",
    "mainContentFocus": "IMAGE",
    "content": "My Image Content",
    "tags": ["image"],
    "image": {
      "type": "PNG",
      "item": "https://myimage.com",
      "altTag": "My Image",
      "license": "CCO"
    },
    "attachments": [
      {
        "type": "MP3",
        "item": "https://myaudio.com",
        "altTag": "My Audio",
        "audioType": "MUSIC",
        "cover": "https://myimage.com",
        "duration": 100,
        "license": "CCO",
        "credits": "My Credits",
        "artist": "My Artist",
        "genre": "My Genre",
        "recordLabel": "My Record Label"
      }
    ],
    "appId": "my-app-id"
  }
}
```
