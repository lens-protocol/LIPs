# 3D 1.0.0

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
- [MetadataLicenseType](../../shared-ts-interfaces/metadata-license-type.ts)

```ts
enum ThreeDFormat {
  gLTF = "gLTF/GLB",
  fbx = "FBX",
  vrm = "VRM",
  obj = "OBJ",
}

interface ThreeDAsset {
  /**
   * The 3D asset url or zip
   */
  url: string;

  /**
   * path in extracted zip. Relative. 3D start point, must be 3D file type
   */
  zipPath?: string;

  /**
   * Link to web based 3D player
   */
  playerUrl: string;

  /**
   * format of the 3D object. gLTF/GLB, FBX, VRM or OBJ
   */
  format: ThreeDFormat;

  /**
   * License for the 3D item
   */
  license?: MetadataLicenseType;
}

interface ThreeDMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the 3D
   */
  $schema: "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/3D/1.0.0/schema.json";

  /**
   * The metadata details for the 3D publication
   */
  lens: ThreeDMetadataDetails;

  /**
   * If you use an appId and you only want your app to be able to publish under it,
   * you will need to sign the `lens` object with your server private key
   * and populate the signature here. We will need your public key to verify this.
   * If the signature does not match what we have in our mappings it will not be surfaced
   * in the API.
   */
  signature?: string;
}

interface ThreeDMetadataDetails extends MetadataCommon {
  /**
   * Main content focus that for this publication
   */
  mainContentFocus: PublicationMainFocus.ThreeD;

  /**
   * The 3D items for the publication
   */
  threeDAssets: ThreeDAsset[];

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
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/3D/1.0.0/schema.json",
  "name": "My 3D Publication",
  "description": "My 3D Description",
  "external_url": "https://3d.com",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "animation_url": "https://3d.com/3d.html",
  "lens": {
    "id": "1234",
    "locale": "en-US",
    "mainContentFocus": "3D",
    "content": "My 3D Asset",
    "tags": ["3d"],
    "items": [
      {
        "zipUrl": "ipfs://ipfs/QmWVrjNXmggU9ARYexwVmfyPkR2Ldb92afJz7tETCsnUJJ",
        "path": "gltf/normal/Angelus.glb",
        "playerUrl": "https://collectz/c/0x01b2e3-0x5a",
        "license": "CCO"
      }
    ],
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
