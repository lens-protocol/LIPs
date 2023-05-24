# Checking in 1.0.0

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
interface CheckingInMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the checking in
   */
  $schema: 'https://raw.githubusercontent.com/lens-protocol/lens-standards/main/lens-metadata-standards/publication/checking-in/1.0.0/schema.json';

  /**
   * The metadata details for the checking in
   */
  lens: CheckingInMetadataDetails;
}

interface CheckingInMetadataDetails extends MetadataCommon {
  /**
   * Where you checking in from
   */
  location: string;

  /**
   * Main content focus that for this publication
   */
  mainContentFocus: PublicationMainFocus.CHECKING_IN;

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
  "$schema": "https://raw.githubusercontent.com/lens-protocol/lens-standards/main/lens-metadata-standards/publication/checking-in/1.0.0/schema.json",
  "name": "Me checking in",
  "description": "Me checking in",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "external_url": "https://checking-in-link.com",
  "attributes": [],
  "lens": {
    "id": "1234",
    "location": "AAVE office",
    "content": "Just got into the office",
    "locale": "en-US",
    "mainContentFocus": "CHECKING_IN",
    "tags": ["checking-in"],
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
