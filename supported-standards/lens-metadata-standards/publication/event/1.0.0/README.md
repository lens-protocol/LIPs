# Event 1.0.0

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
interface EventMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the event
   */
  $schema: "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/event/1.0.0/schema.json";

  /**
   * The metadata details for the event
   */
  lens: EventMetadataDetails;

  /**
   * If you use an appId and you only want your app to be able to publish under it,
   * you will need to sign the `lens` object with your server private key
   * and populate the signature here. We will need your public key to verify this.
   * If the signature does not match what we have in our mappings it will not be surfaced
   * in the API.
   */
  signature?: string;
}

interface EventMetadataDetails extends MetadataCommon {
  /**
   * The title of the event
   */
  title: string;

  /**
   * Where the event is in clear text
   */
  location: string | Url;

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
   * The start time of the event (unix timestamp)
   */
  startsAt: number;

  /**
   * The end time of the event iso string
   */
  endsAt: number;

  /**
   * The links you want to include with it
   */
  links?: Url[];

  /**
   * Main content focus that for this publication
   */
  mainContentFocus: PublicationMainFocus.EVENT;

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
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/event/1.0.0/schema.json",
  "name": "My event",
  "description": "My event",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "external_url": "https://myevent.com",
  "lens": {
    "id": "1234",
    "content": "Come to my cool virtual event",
    "locale": "en-US",
    "mainContentFocus": "EVENT",
    "title": "My event",
    "location": "AAVE office",
    "startsAt": "2023-05-24T12:46:10.987Z",
    "endsAt": "2023-05-24T19:46:10.987Z",
    "links": ["https://mylink.com"],
    "tags": ["event"],
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
