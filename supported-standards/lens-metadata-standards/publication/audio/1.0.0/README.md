# Audio 1.0.0

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
interface AudioMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the audio
   */
  $schema: "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/audio/1.0.0/schema.json";

  /**
   * The metadata details for the image
   */
  lens: AudioMetadataDetails;

  /**
   * If you use an appId and you only want your app to be able to publish under it,
   * you will need to sign the `lens` object with your server private key
   * and populate the signature here. We will need your public key to verify this.
   * If the signature does not match what we have in our mappings it will not be surfaced
   * in the API.
   */
  signature?: Signature;
}

interface AudioMetadataDetails extends MetadataCommon {
  /**
   * Main content focus that for this publication
   */
  mainContentFocus: PublicationMainFocus.AUDIO;

  /**
   * The audio for the publication
   */
  audio: MediaAudio;

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
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/audio/1.0.0/schema.json",
  "name": "My Audio",
  "description": "My Audio Description",
  "external_url": "https://myaudio.com",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "animation_url": "https://myaudio.com/audio.mp3",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "locale": "en-US",
    "mainContentFocus": "AUDIO",
    "title": "The audio title",
    "content": "My Audio Content",
    "tags": ["audio"],
    "audio": {
      "type": "MP3",
      "item": "https://myaudio.com",
      "altTag": "My Audio",
      "audioType": "MUSIC",
      "cover": "https://myimage.com",
      "duration": 100,
      "license": "CCO",
      "credits": "My Credits",
      "artist": "My Artist",
      "genre": "My Genre",
      "recordLabel": "My Record Label"
    },
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
