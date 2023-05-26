import { AppId, Locale, Markdown } from './type-alias';

enum PublicationContentWarning {
  NSFW = 'NSFW',
  SENSITIVE = 'SENSITIVE',
  SPOILER = 'SPOILER',
}

export interface MetadataCommon {
  /**
   * The metadata lens_id can be anything but if your uploading to IPFS
   * you will want it to be random.. using uuid could be an option!
   */
  metadata_id: string;

  /**
   * The content of a publication.
   */
  content?: Markdown;

  /**
   * IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT
   * Full spec > https://tools.ietf.org/search/bcp47
   */
  locale: Locale;

  /**
   * Ability to tag your publication
   */
  tags?: string[];

  /**
   * Ability to add a content warning
   */
  contentWarning?: PublicationContentWarning;

  /**
   * Ability to hide from feed
   */
  hideFromFeed?: boolean;

  /**
   * This is the appId the content belongs to
   */
  appId?: AppId;
}
