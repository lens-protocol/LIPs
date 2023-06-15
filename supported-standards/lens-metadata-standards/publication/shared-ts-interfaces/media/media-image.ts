import { MetadataLicenseType } from '../metadata-license-type';
import { MediaCommon } from './media-common';

enum MediaImageMimeType {
  GIF = 'image/gif',
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  TIFF = 'image/tiff',
  BMP = 'image/x-ms-bmp',
  SVG = 'image/svg+xml',
  WEBP = 'image/webp',
}

export interface MediaImage extends MediaCommon {
  /**
   * This is the mime type of media
   */
  type: MediaImageMimeType;

  /**
   * License for the image
   */
  license?: MetadataLicenseType;
}
