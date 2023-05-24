# Audio 1.0.0

## JSON schema

The JSON schema can be found [here](./schema.json).

## TypeScript

References:

- [MarketplaceMetadata](../../shared-ts-interfaces/marketplace-metadata.ts)
- [MetadataCommon](../../shared-ts-interfaces/metadata-common.ts)
- [PublicationMainFocus](../../shared-ts-interfaces/publication-main-focus.ts)
- [MediaVideo](../../shared-ts-interfaces/media-video.ts)
- [MediaImage](../../shared-ts-interfaces/media-image.ts)
- [MediaAudio](../../shared-ts-interfaces/media-audio.ts)

```ts
interface AudioMetadata extends MarketplaceMetadata {
  /**
   * The JSON schema for the audio
   */
  $schema: 'https://raw.githubusercontent.com/lens-protocol/lens-standards/main/lens-metadata-standards/publication/audio/1.0.0/schema.json';

  /**
   * The metadata details for the image
   */
  lens: AudioMetadataDetails;
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

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/lens-standards/main/lens-metadata-standards/publication/audio/1.0.0/schema.json",
  // start of marketplace fields - if its not tokenized no need to add these fields
  "name": "My Audio", // optional
  "description": "My Audio Description", // optional
  "external_url": "https://myaudio.com", // optional
  "attributes": [], // optional
  "image": "https://myimage.com/image.png", // optional
  "animation_url": "https://myaudio.com/audio.mp3", // optional
  // end of marketplace fields
  "lens": {
    "metadata_id": "1234",
    "locale": "en-US",
    "mainContentFocus": "AUDIO",
    "content": "My Audio Content", // optional
    "tags": ["audio"], // optional
    "audio": {
      "type": "MP3",
      "item": "https://myaudio.com",
      "altTag": "My Audio", // optional
      "audioType": "MUSIC",
      "cover": "https://myimage.com", // optional
      "duration": 100,
      // means anyone can use it
      // if you leave blank it also means anyone can use it
      // you can also apply a proper license
      "license": "CCO", // optional
      "credits": "My Credits",  // optional
      "artist": "My Artist", // optional
      "genre": "My Genre", // optional
      "recordLabel": "My Record Label", // optional
    },
    // you can attach more media items as you wish
    // you can add more audios in here as well any extra
    // media items can go in here
    "attachments": [
      {
        "type": "PNG",
        "item": "https://myimage.com",
        "altTag": "My Image", // optional
        // means anyone can use it
        // if you leave blank it also means anyone can use it
        // you can also apply a proper license
        "license": "CCO", // optional
      },
    ],
    "appId": "my-app-id", // optional
  },
};
```
