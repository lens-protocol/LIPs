import { MetadataLicenseType } from '../metadata-license-type';
import { Url } from '../type-alias';
import { MediaCommon } from './media-common';

enum MediaMetadataAudioType {
  MUSIC = 'MUSIC',
  PODCAST = 'PODCAST',
  AUDIOBOOK = 'AUDIOBOOK',
  SOUNDS = 'SOUNDS',
  OTHER = 'OTHER',
}

enum MediaAudioMimeType {
  WAV = 'audio/wav',
  WAV_VND = 'audio/vnd.wave',
  MP3 = 'audio/mpeg',
  OGG_AUDIO = 'audio/ogg',
  MP4_AUDIO = 'audio/mp4',
  AAC = 'audio/aac',
  WEBM_AUDIO = 'audio/webm',
  FLAC = 'audio/flac',
}

export interface MediaAudio extends MediaCommon {
  /**
   * This is the mime type of media
   */
  type: MediaAudioMimeType;

  /**
   * The cover for the audio
   */
  cover?: string;

  /**
   * How long the the audio is in seconds
   */
  duration?: number;

  /**
   * License for the audio
   */
  license?: MetadataLicenseType;

  /**
   * The credits for the audio
   */
  credits?: string;

  /**
   * The artist for the audio
   */
  artist?: string;

  /**
   * The genre for the audio
   */
  genre?: string;

  /**
   * The record label for the audio
   */
  recordLabel?: string;

  /**
   * The type of audio
   */
  audioType: MediaMetadataAudioType;

  /**
   * The lyrics for the audio
   */
  lyrics?: Url | undefined | null;
}
