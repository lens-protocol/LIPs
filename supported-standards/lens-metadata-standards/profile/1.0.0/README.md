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
}
```

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/profile/1.0.0/schema.json",
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
  ]
}
```
