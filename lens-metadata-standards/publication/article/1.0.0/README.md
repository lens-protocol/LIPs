# Article 1.0.0

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
interface ArticleMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the article
   */
  $schema: 'https://raw.githubusercontent.com/lens-protocol/lens-standards/main/LIPs/publication/article/1.0.0/schema.json';

  /**
   * The metadata details for the image
   */
  lens: ArticleMetadataDetails;
}

interface ArticleMetadataDetails extends MetadataCommon {
  /**
   * Main content focus that for this publication
   */
  mainContentFocus: PublicationMainFocus.ARTICLE;

  /**
   * The content for the publication
   */
  content: Markdown;

  /**
   * The title of the article
   */
  title?: string;

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
  "$schema": "https://raw.githubusercontent.com/lens-protocol/lens-standards/main/LIPs/publication/article/1.0.0/schema.json",
  "name": "My Article",
  "description": "My Article Description",
  "external_url": "https://myarticle.com",
  "attributes": [],
  "image": "https://myarticle.com/image.png",
  "lens": {
    "title": "My Article",
    "metadata_id": "1234",
    "locale": "en-US",
    "mainContentFocus": "ARTICLE",
    "content": "My Article Content",
    "tags": ["article"],
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
