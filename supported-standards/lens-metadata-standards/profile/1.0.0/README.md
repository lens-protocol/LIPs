# Profile metadata standard

## JSON schema

The JSON schema can be found [here](./schema.json).

## TypeScript

References:

- [MetadataAttribute](../../shared-ts-interfaces/metadata-attribute.ts)

```ts
interface Profile {
  /**
   * The JSON schema for the image
   */
  $schema: "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/profile/1.0.0/schema.json";
}
```

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/profile/1.0.0/schema.json"
}
```
