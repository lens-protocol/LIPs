# Article 1.0.0

## JSON schema

The JSON schema can be found [here](./schema.json).

## TypeScript

References:

- [MarketplaceMetadata](../../shared-ts-interfaces/marketplace-metadata.ts)
- [MetadataCommon](../../shared-ts-interfaces/metadata-common.ts)
- [PublicationMainFocus](../../shared-ts-interfaces/publication-main-focus.ts)
- [MediaVideo](../../shared-ts-interfaces/media/media-video.ts)
- [MediaImage](../../shared-ts-interfaces/media/media-image.ts)
- [MediaAudio](../../shared-ts-interfaces/media/media-audio.ts)

```ts
interface ArticleMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the article
   */
  $schema: 'https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/article/1.0.0/schema.json';

  /**
   * The metadata details for the image
   */
  lens: ArticleMetadataDetails;

  /**
   * If you use an appId and you only want your app to be able to publish under it,
   * you will need to sign the `lens` object with your server private key
   * and populate the signature here. We will need your public key to verify this.
   * If the signature does not match what we have in our mappings it will not be surfaced
   * in the API.
   */
  signture: string;
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
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/article/1.0.0/schema.json",
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
