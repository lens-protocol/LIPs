# Model

## Name

Posts Feed

### Personal

Supported - `post_personal_feed`

### Global

Supported - `post_global_feed`

## Data Output

### Personal
JSON schema can be found [here](./personal-schema.json) for usage in json validation.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://lens.xyz/post.feed.schema.json",
  "title": "Post Feed",
  "description": "Ordered list of posts to be shown to users",
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "ProfileId for which the posts are being recommended",
      "pattern": "^0x[0-9a-fA-F]+$"
    },
    "posts": {
      "description": "array of postIds",
      "type": "array",
      "items": {
        "type": "string",
        "description": "postId",
        "pattern": "^0x[0-9a-fA-F]+$"
      },
      "minItems": 100,
      "maxItems": 1000
    }
  },
  "required": ["profileId", "posts"]
}
```

Example:

```json
{
  "profileId": "0x01", 
  "posts": ["0x01", "0x02"]
}
```


#### Rules

Enter rules here

### Global
JSON schema can be found [here](./global-schema.json) for usage in json validation.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://lens.xyz/post.feed.schema.json",
  "title": "Post Feed",
  "description": "Ordered list of posts to be shown to users",
  "type": "object",
  "properties": {
    "posts": {
      "description": "array of postIds",
      "type": "array",
      "items": {
        "type": "string",
        "description": "postId",
        "pattern": "^0x[0-9a-fA-F]+$"
      },
      "minItems": 100,
      "maxItems": 1000
    }
  },
  "required": ["posts"]
}
```

Example:

```json
{
  "posts": ["0x01", "0x02"]
}
```

#### Rules

- The posts in the array should be sorted in the order that is most relevant to the end-user.
- The maximum size of the entire response is 1MB

## Model service requirements and constraints

- The global feed should be refreshed at least every 1 hour.
- The personal feed should be refreshed at least every 24 hours.
