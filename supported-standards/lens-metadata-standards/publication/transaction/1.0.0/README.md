# Transaction 1.0.0

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
enum TransactionMetadataType {
  ERC721 = 'ERC721',
  ERC20 = 'ERC20',
  OTHER = 'OTHER',
}

interface TransactionMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the transaction
   */
  $schema: 'https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/transaction/1.0.0/schema.json';

  /**
   * The metadata details for the transaction
   */
  lens: TransactionMetadataDetails;

  /**
   * If you use an appId and you only want your app to be able to publish under it,
   * you will need to sign the `lens` object with your server private key
   * and populate the signature here. We will need your public key to verify this.
   * If the signature does not match what we have in our mappings it will not be surfaced
   * in the API.
   */
  signture: string;
}

interface TransactionMetadataDetails extends MetadataCommon {
  /**
   * what transaction type is it
   */
  type: TransactionMetadataType;

  /**
   * The transaction hash
   */
  txHash: string;

  /**
   * The chain id
   */
  chainId: number;

  /**
   * Main content focus that for this publication
   */
  mainContentFocus: PublicationMainFocus.TRANSACTION;

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
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/transaction/1.0.0/schema.json",
  "name": "My transaction",
  "description": "My transaction",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "external_url": "https://transaction-link.com",
  "lens": {
    "id": "1234",
    "content": "Just brought a cool NFT on ethereum",
    "locale": "en-US",
    "mainContentFocus": "TRANSACTION",
    "type": "ERC721",
    "txHash": "0x7c734de89205722a1254e4938b44ef8065b78524cdaf000f6b291dcbebd057d8",
    "chainId": 1,
    "tags": ["transaction"],
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
