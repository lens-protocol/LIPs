# Checking in 1.0.0

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
interface CheckingInMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the checking in
   */
  $schema: "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/checking-in/1.0.0/schema.json";

  /**
   * The metadata details for the checking in
   */
  lens: CheckingInMetadataDetails;

  /**
   * If you use an appId and you only want your app to be able to publish under it,
   * you will need to sign the `lens` object with your server private key
   * and populate the signature here. We will need your public key to verify this.
   * If the signature does not match what we have in our mappings it will not be surfaced
   * in the API.
   */
  signature?: Signature;
}

interface CheckingInMetadataDetails extends MetadataCommon {
  /**
   * Where you checking in from
   */
  location: string;

  /**
   * The direct location if you wish to do so
   */
  geographic?: {
    /**
     * The latitude of the location
     */
    latitude: number;

    /**
     * The longitude of the location
     */
    longitude: number;
  };

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

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/checking-in/1.0.0/schema.json",
  "name": "Me checking in",
  "description": "Me checking in",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "external_url": "https://checking-in-link.com",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
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
