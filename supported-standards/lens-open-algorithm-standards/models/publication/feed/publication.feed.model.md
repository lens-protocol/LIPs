# Model

## Name

Publications Feed

### Personal

Supported - `publication_personal_feed`

### Global

Supported - `publication_global_feed`

## Data Output

### Personal
JSON schema can be found [here](./personal-schema.json) for usage in json validation.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://lens.xyz/publication.personal.feed.schema.json",
  "title": "Publication Feed",
  "description": "Ordered list of publications to be shown to users",
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "ProfileId for which the publications are being recommended",
      "pattern": "^0x[0-9a-fA-F]+$"
    },
    "publications": {
      "description": "array of publicationIds",
      "type": "array",
      "items": {
        "type": "string",
        "description": "publicationId",
        "pattern": "^0x[0-9a-fA-F]+-0x[0-9a-fA-F]+$"
      },
      "minItems": 100,
      "maxItems": 1000
    }
  },
  "required": ["profileId", "publications"]
}
```

Example:

```json
{
  "profileId": "0x01", 
  "publications": ["0x02-0x01", "0x03-0x05"]
}
```


#### Rules

Enter rules here

### Global
JSON schema can be found [here](./global-schema.json) for usage in json validation.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://lens.xyz/publication.global.feed.schema.json",
  "title": "Publication Feed",
  "description": "Ordered list of publications to be shown to users",
  "type": "object",
  "properties": {
    "publications": {
      "description": "array of publicationIds",
      "type": "array",
      "items": {
        "type": "string",
        "description": "publicationId",
        "pattern": "^0x[0-9a-fA-F]+-0x[0-9a-fA-F]+$"
      },
      "minItems": 100,
      "maxItems": 1000
    }
  },
  "required": ["publications"]
}
```

Example:

```json
{
  "publications": ["0x02-0x01", "0x03-0x05"]
}
```

#### Rules

- The publications in the array should be sorted in the order that is most relevant to the end-user.
- The maximum size of the entire response is 1MB

## Model service requirements and constraints
- Update at least every 24 hours