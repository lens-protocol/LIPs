# Embed 1.0.0

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
interface EmbedMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the embed
   */
  $schema: 'https://raw.githubusercontent.com/lens-protocol/lens-standards/main/lens-metadata-standards/publication/embed/1.0.0/schema.json';

  /**
   * The metadata details for the image
   */
  lens: EmbedMetadataDetails;
}

interface EmbedMetadataDetails extends MetadataCommon {
  /**
   * The embed URL
   */
  embed: string;

  /**
   * Main content focus that for this publication
   */
  mainContentFocus: PublicationMainFocus.EMBED;

  /**
   * The other attachments you want to include with it
   */
  attachments?: (MediaImage | MediaVideo | MediaAudio)[];
}
```

## JSON example

Will use all the fields but remember a lot are optional you can use the json schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/lens-standards/main/lens-metadata-standards/publication/embed/1.0.0/schema.json",
  "name": "My embed",
  "description": "My embed Description",
  "external_url": "https://mylink.com",
  "attributes": [],
  "image": "https://mynftimage.com/image.png",
  "animation_url": "https://myembed.com/embed.html",
  "lens": {
    "id": "1234",
    "embed": "https://embedlink.com",
    "content": "My embed content",
    "locale": "en-US",
    "mainContentFocus": "EMBED",
    "content": "My embed Content",
    "tags": ["embed"],
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
