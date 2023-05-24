import { MetadataLicenseType } from '../metadata-license-type';
import { Url } from '../type-alias';
import { MediaCommon } from './media-common';

enum MediaVideoMimeType {
  GLTF = 'model/gltf+json',
  GLTF_BINARY = 'model/gltf-binary',
  WEBM = 'video/webm',
  MP4 = 'video/mp4',
  M4V = 'video/x-m4v',
  OGV = 'video/ogv',
  OGG = 'video/ogg',
  MPEG = 'video/mpeg',
  QUICKTIME = 'video/quicktime',
}

export interface MediaVideo extends MediaCommon {
  /**
   * This is the mime type of media
   */
  type: MediaVideoMimeType;

  /**
   * The cover for the video
   */
  cover?: Url;

  /**
   * How long the video is in unix seconds
   */
  duration?: number;

  /**
   * License for the video
   */
  license?: MetadataLicenseType;
}
