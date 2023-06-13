# Mint 1.0.0

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
interface MintMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the mint
   */
  $schema: 'https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/mint/1.0.0/schema.json';

  /**
   * The metadata details for the mint
   */
  lens: MintMetadataDetails;
}

interface MintMetadataDetails extends MetadataCommon {
  /**
   * The mint item it can be a URL of the known provider like opensea https://opensea.io/assets/ethereum/0xfaa2471e93bd1cee3b0ab381c242ada8e1d1a759/299
   * or https://zora.co/collect/0x9d90669665607f08005cae4a7098143f554c59ef/39626
   * The Lens API has an allow list of providers and if the domain does not match it will mark it as failed metadata
   */
  mintLink: string;

  /**
   * Main content focus that for this publication
   */
  mainContentFocus: PublicationMainFocus.MINT;

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
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/mint/1.0.0/schema.json",
  "name": "My mint",
  "description": "My mint",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "external_url": "https://mint-link.com",
  "lens": {
    "id": "1234",
    "content": "Stand with crypto",
    "mintLink": "https://zora.co/collect/0x9d90669665607f08005cae4a7098143f554c59ef/39626",
    "locale": "en-US",
    "mainContentFocus": "MINT",
    "tags": ["mint"],
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
