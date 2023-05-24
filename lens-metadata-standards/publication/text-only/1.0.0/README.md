# TextOnly 1.0.0

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
interface TextOnlyMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the text
   */
  $schema: 'https://raw.githubusercontent.com/lens-protocol/lens-standards/main/lens-metadata-standards/publication/text-only/1.0.0/schema.json';

  /**
   * The metadata details for the text only
   */
  lens: TextOnlyMetadataDetails;
}

interface TextOnlyMetadataDetails extends MetadataCommon {
  /**
   * Main content focus that for this publication
   */
  mainContentFocus: PublicationMainFocus.TEXT_ONLY;

  /**
   * The content for the publication
   */
  content: Markdown;
}
```

## JSON example

Will use all the fields but remember a lot are optional you can use the json schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/lens-standards/main/lens-metadata-standards/publication/text-only/1.0.0/schema.json",
  "name": "My text",
  "description": "My text Description",
  "external_url": "https://mytext.com",
  "attributes": [],
  "image": "https://text.com/image.png",
  "lens": {
    "title": "My text",
    "id": "1234",
    "locale": "en-US",
    "mainContentFocus": "TEXT_ONLY",
    "content": "My text Content",
    "tags": ["text"],
    "appId": "my-app-id"
  }
}
```
