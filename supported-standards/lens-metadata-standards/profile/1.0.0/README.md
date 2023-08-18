# Profile metadata standard

## JSON schema

The JSON schema can be found [here](./schema.json).

## TypeScript

References:

- [MetadataAttribute](../../shared-ts-interfaces/metadata-attribute.ts)

```ts
interface Profile {
  /**
   * The JSON Schema ID it conforms to
   */
  $schema: "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/profile/1.0.0/schema.json";
  /**
   * The metadata details for the profile
   */
  lens: ProfileMetadataDetails;
  /**
   * If you use an appId you will need to sign the `lens` object with your server private key
   * and populate the signature here. We will need your public key to verify this.
   * If the signature does not match what we have in our mappings it will not be surfaced
   * in the API.
   */
  signature?: Signature;
}

interface ProfileMetadataDetails {
  /**
   * The metadata can be anything but if your uploading to IPFS
   * you will want it to be random.. using uuid could be an option!
   */
  id: string;

  /**
   * The display name for the profile
   */
  name?: string;

  /**
   * The bio for the profile
   */
  bio?: Markdown;

  /**
   * Cover picture location
   */
  cover_picture?: URI;

  /**
   * Any custom attributes can be added here to save state for a profile
   */
  attributes?: MetadataAttribute[];

  /**
   * The appId the content belongs to. If not provided the profile details will be used to update the global profile metadata.
   */
  appId?: AppId;
}
```

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/profile/1.0.0/schema.json",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "name": "Bob",
    "bio": "I am a cool guy",
    "cover_picture": "https://myimage.com/image.png",
    "attributes": [
      {
        "type": "Date",
        "key": "dob",
        "value": "2003-12-06T00:49:31Z"
      },
      {
        "type": "String",
        "key": "favourite_food",
        "value": "Pizza"
      },
      {
        "type": "Number",
        "key": "lucky_number",
        "value": "42"
      },
      {
        "type": "Boolean",
        "key": "is_cool",
        "value": "true"
      }
    ],
    "appId": "my-app-id"
  },
  "signature": "88fbcdb8622ed99e3da7c7a81f3e0f04e961b8f10b3a55ddc7be3b0a8c4332c3"
}
```
