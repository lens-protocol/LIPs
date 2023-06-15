import { Markdown, Url } from './type-alias';

enum PublicationMetadataDisplayType {
  number = 'number',
  string = 'string',
  date = 'date',
}

interface PublicationMetadataAttribute {
  displayType?: PublicationMetadataDisplayType;
  traitType?: string;
  value: string;
}

export interface MarketplaceMetadata {
  /**
   * A human-readable description of the item.
   */
  description?: Markdown;

  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   * and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: Url;

  /**
   * Name of the NFT item.
   */
  name?: string;

  /**
   * These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the 
  item.
   */
  attributes?: PublicationMetadataAttribute[];

  /**
   * Marketplaces will store any NFT image here.
   */
  image?: Url;

  /**
   * In spec for OpenSea and other providers - also used when using EMBED main publication focus
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   * and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   * Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   * WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: Url;
}
