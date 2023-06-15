# Model

## Name

This is the names of the models for profile score.

### Personal

Supported - `profile_personal_score`

### Global

Supported - `profile_global_score`

## Data Output

### Personal

JSON schema can be found [here](./personal-schema.json) for usage in json validation.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "results": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "profileId": {
            "type": "string",
            "pattern": "^0x[0-9a-fA-F]+$"
          },
          "scores": {
            "type": "array",
            "items": {
              "type": "array",
              "minItems": 2,
              "maxItems": 2,
              "items": [
                {
                  "type": "string",
                  "pattern": "^0x[0-9a-fA-F]+$"
                },
                {
                  "type": "string",
                  "pattern": "^-?[0-9]+(\\.[0-9]+)?$"
                }
              ]
            }
          },
          "next": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": ["profileId", "scores", "next"]
      }
    }
  },
  "required": ["results"]
}
```

Example:

```json
{
  "results": [
    {
      "profileId": "0x01",
      "scores": [
        ["0x01", "1293.44"],
        ["0x02", "1234.03"]
      ],
      "next": "POINTER_TO_NEXT_RESULTS"
    }
  ]
}
```

If using JSONL you do not need the `next` field and the size rules below do not apply for you.

#### Rules

- The score array per profile should be sorted by score in descending order.
- The maximum size of the entire response is 50MB.(this does not apply to .jsonl format)
- The maximum array of results in each page is 150,000.(this does not apply to .jsonl format)

### Global

JSON schema can be found [here](./global-schema.json) for usage in json validation.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "results": {
      "type": "array",
      "items": {
        "type": "array",
        "minItems": 2,
        "maxItems": 2,
        "items": [
          {
            "type": "string",
            "pattern": "^0x[0-9a-fA-F]+$"
          },
          {
            "type": "string",
            "pattern": "^-?[0-9]+(.[0-9]+)?$"
          }
        ]
      }
    },
    "next": {
      "oneOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "required": ["results", "next"]
}
```

Example:

```json
{
  "results": [
    ["0x01", "1293.44"],
    ["0x02", "123423.44"]
  ],
  "next": "POINTER_TO_NEXT_RESULTS"
}
```

If using JSONL you do not need the `next` field and the size rules below do not apply for you.

#### Rules

- The score array per profile should be sorted by score in descending order.
- The maximum size of the entire response is 50MB. (this does not apply to .jsonl format)
- The maximum array of results in each page is 150,000. (this does not apply to .jsonl format)

## Model service requirements and constraints

- The model should be updated no more than every 3 hours.
