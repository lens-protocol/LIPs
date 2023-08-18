# Story 1.0.0

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
interface StoryMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the video
   */
  $schema: "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/story/1.0.0/schema.json";

  /**
   * The metadata details for the story
   */
  lens: StoryMetadataDetails;

  /**
   * If you use an appId and you only want your app to be able to publish under it,
   * you will need to sign the `lens` object with your server private key
   * and populate the signature here. We will need your public key to verify this.
   * If the signature does not match what we have in our mappings it will not be surfaced
   * in the API.
   */
  signature?: string;
}

interface StoryMetadataDetails extends MetadataCommon {
  /**
   * The content for the story
   */
  content?: string;

  /**
   * Main content focus that for this publication
   */
  mainContentFocus: PublicationMainFocus.STORY;

  /**
   * The other attachments you want to include with it
   */
  asset?: MediaImage | MediaVideo | MediaAudio;
}
```

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/story/1.0.0/schema.json",
  "name": "My Story",
  "description": "My Story Description",
  "external_url": "https://mystory.com",
  "attributes": [],
  "image": "https://mystory.com/story.png",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "locale": "en-US",
    "mainContentFocus": "STORY",
    "content": "Bored!!",
    "tags": ["story"],
    "asset": {
      "type": "PNG",
      "item": "https://myimage.com",
      "altTag": "My Image",
      "license": "CCO"
    },
    "appId": "my-app-id"
  }
}
```
