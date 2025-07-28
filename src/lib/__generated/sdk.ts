import { GraphQLClient } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  assetsCollection?: Maybe<AssetsCollection>;
  componentPageHeaderCollection?: Maybe<ComponentPageHeaderCollection>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  componentSliderCollection?: Maybe<ComponentSliderCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageAboutCollection?: Maybe<PageAboutCollection>;
  pageProjectCollection?: Maybe<PageProjectCollection>;
};


export type AssetLinkingCollectionsAssetsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentPageHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentSliderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Logo and social media links [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/assets) */
export type Assets = Entry & _Node & {
  __typename?: 'Assets';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AssetsLinkingCollections>;
  logoDark?: Maybe<Asset>;
  logoLight?: Maybe<Asset>;
  logoSmall?: Maybe<Asset>;
  sys: Sys;
};


/** Logo and social media links [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/assets) */
export type AssetsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Logo and social media links [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/assets) */
export type AssetsLogoDarkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Logo and social media links [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/assets) */
export type AssetsLogoLightArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Logo and social media links [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/assets) */
export type AssetsLogoSmallArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type AssetsCollection = {
  __typename?: 'AssetsCollection';
  items: Array<Maybe<Assets>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetsFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  logoDark_exists?: InputMaybe<Scalars['Boolean']>;
  logoLight_exists?: InputMaybe<Scalars['Boolean']>;
  logoSmall_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type AssetsLinkingCollections = {
  __typename?: 'AssetsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AssetsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetsOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Contact Information in Footer and Contact Page [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentContact) */
export type ComponentContact = Entry & _Node & {
  __typename?: 'ComponentContact';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentContactLinkingCollections>;
  location?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Contact Information in Footer and Contact Page [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentContact) */
export type ComponentContactEmailArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Contact Information in Footer and Contact Page [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentContact) */
export type ComponentContactLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Contact Information in Footer and Contact Page [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentContact) */
export type ComponentContactLocationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Contact Information in Footer and Contact Page [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentContact) */
export type ComponentContactPhoneArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentContactCollection = {
  __typename?: 'ComponentContactCollection';
  items: Array<Maybe<ComponentContact>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentContactFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentContactFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentContactFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  location_contains?: InputMaybe<Scalars['String']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_not?: InputMaybe<Scalars['String']>;
  location_not_contains?: InputMaybe<Scalars['String']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_contains?: InputMaybe<Scalars['String']>;
  phone_exists?: InputMaybe<Scalars['Boolean']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not?: InputMaybe<Scalars['String']>;
  phone_not_contains?: InputMaybe<Scalars['String']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentContactLinkingCollections = {
  __typename?: 'ComponentContactLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageContactCollection?: Maybe<PageContactCollection>;
};


export type ComponentContactLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentContactLinkingCollectionsPageContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentContactLinkingCollectionsPageContactCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentContactLinkingCollectionsPageContactCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentContactOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Page header with banner image, title and description [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentPageHeader) */
export type ComponentPageHeader = Entry & _Node & {
  __typename?: 'ComponentPageHeader';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ComponentPageHeaderDescription>;
  header?: Maybe<Asset>;
  linkedFrom?: Maybe<ComponentPageHeaderLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Page header with banner image, title and description [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentPageHeader) */
export type ComponentPageHeaderDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Page header with banner image, title and description [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentPageHeader) */
export type ComponentPageHeaderHeaderArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Page header with banner image, title and description [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentPageHeader) */
export type ComponentPageHeaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Page header with banner image, title and description [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentPageHeader) */
export type ComponentPageHeaderTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentPageHeaderCollection = {
  __typename?: 'ComponentPageHeaderCollection';
  items: Array<Maybe<ComponentPageHeader>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentPageHeaderDescription = {
  __typename?: 'ComponentPageHeaderDescription';
  json: Scalars['JSON'];
  links: ComponentPageHeaderDescriptionLinks;
};

export type ComponentPageHeaderDescriptionAssets = {
  __typename?: 'ComponentPageHeaderDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentPageHeaderDescriptionEntries = {
  __typename?: 'ComponentPageHeaderDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentPageHeaderDescriptionLinks = {
  __typename?: 'ComponentPageHeaderDescriptionLinks';
  assets: ComponentPageHeaderDescriptionAssets;
  entries: ComponentPageHeaderDescriptionEntries;
  resources: ComponentPageHeaderDescriptionResources;
};

export type ComponentPageHeaderDescriptionResources = {
  __typename?: 'ComponentPageHeaderDescriptionResources';
  block: Array<ComponentPageHeaderDescriptionResourcesBlock>;
  hyperlink: Array<ComponentPageHeaderDescriptionResourcesHyperlink>;
  inline: Array<ComponentPageHeaderDescriptionResourcesInline>;
};

export type ComponentPageHeaderDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'ComponentPageHeaderDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type ComponentPageHeaderDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentPageHeaderDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentPageHeaderDescriptionResourcesInline = ResourceLink & {
  __typename?: 'ComponentPageHeaderDescriptionResourcesInline';
  sys: ResourceSys;
};

export type ComponentPageHeaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentPageHeaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentPageHeaderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  header_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentPageHeaderLinkingCollections = {
  __typename?: 'ComponentPageHeaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageAboutCollection?: Maybe<PageAboutCollection>;
  pageContactCollection?: Maybe<PageContactCollection>;
};


export type ComponentPageHeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentPageHeaderLinkingCollectionsPageAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentPageHeaderLinkingCollectionsPageAboutCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentPageHeaderLinkingCollectionsPageContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentPageHeaderLinkingCollectionsPageContactCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentPageHeaderLinkingCollectionsPageAboutCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentPageHeaderLinkingCollectionsPageContactCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentPageHeaderOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSeo) */
export type ComponentSeo = Entry & _Node & {
  __typename?: 'ComponentSeo';
  _id: Scalars['ID'];
  canonicalUrl?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentSeoLinkingCollections>;
  nofollow?: Maybe<Scalars['Boolean']>;
  noindex?: Maybe<Scalars['Boolean']>;
  pageDescription?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  shareImagesCollection?: Maybe<AssetCollection>;
  sys: Sys;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSeo) */
export type ComponentSeoCanonicalUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSeo) */
export type ComponentSeoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSeo) */
export type ComponentSeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSeo) */
export type ComponentSeoNofollowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSeo) */
export type ComponentSeoNoindexArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSeo) */
export type ComponentSeoPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSeo) */
export type ComponentSeoPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSeo) */
export type ComponentSeoShareImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ComponentSeoCollection = {
  __typename?: 'ComponentSeoCollection';
  items: Array<Maybe<ComponentSeo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentSeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']>;
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSeoLinkingCollections = {
  __typename?: 'ComponentSeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageAboutCollection?: Maybe<PageAboutCollection>;
  pageContactCollection?: Maybe<PageContactCollection>;
  pageEditorCollection?: Maybe<PageEditorCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
  pageProjectCollection?: Maybe<PageProjectCollection>;
};


export type ComponentSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageAboutCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageContactCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageEditorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageEditorCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageProjectCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentSeoLinkingCollectionsPageAboutCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsPageContactCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsPageEditorCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PageSlugAsc = 'pageSlug_ASC',
  PageSlugDesc = 'pageSlug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsPageHomeCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentSeoLinkingCollectionsPageProjectCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentSeoOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NofollowAsc = 'nofollow_ASC',
  NofollowDesc = 'nofollow_DESC',
  NoindexAsc = 'noindex_ASC',
  NoindexDesc = 'noindex_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Home page & product page sliders [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSlider) */
export type ComponentSlider = Entry & _Node & {
  __typename?: 'ComponentSlider';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  imageCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<ComponentSliderLinkingCollections>;
  sys: Sys;
};


/** Home page & product page sliders [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSlider) */
export type ComponentSliderImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Home page & product page sliders [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSlider) */
export type ComponentSliderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSliderCollection = {
  __typename?: 'ComponentSliderCollection';
  items: Array<Maybe<ComponentSlider>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentSliderFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSliderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSliderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSliderLinkingCollections = {
  __typename?: 'ComponentSliderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
};


export type ComponentSliderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSliderLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSliderLinkingCollectionsPageHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentSliderLinkingCollectionsPageHomeCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentSliderOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Social Media Links in Footer [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSocialMedia) */
export type ComponentSocialMedia = Entry & _Node & {
  __typename?: 'ComponentSocialMedia';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  link?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentSocialMediaLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Social Media Links in Footer [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSocialMedia) */
export type ComponentSocialMediaLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Social Media Links in Footer [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSocialMedia) */
export type ComponentSocialMediaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Social Media Links in Footer [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/componentSocialMedia) */
export type ComponentSocialMediaNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentSocialMediaCollection = {
  __typename?: 'ComponentSocialMediaCollection';
  items: Array<Maybe<ComponentSocialMedia>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentSocialMediaFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSocialMediaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSocialMediaFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSocialMediaLinkingCollections = {
  __typename?: 'ComponentSocialMediaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentSocialMediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentSocialMediaOrder {
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** Menu items: name, link, index and CTA [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/menu) */
export type Menu = Entry & _Node & {
  __typename?: 'Menu';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  indexOrder?: Maybe<Scalars['Int']>;
  isCta?: Maybe<Scalars['Boolean']>;
  isProject?: Maybe<Scalars['Boolean']>;
  link?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<MenuLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Menu items: name, link, index and CTA [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/menu) */
export type MenuIndexOrderArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Menu items: name, link, index and CTA [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/menu) */
export type MenuIsCtaArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Menu items: name, link, index and CTA [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/menu) */
export type MenuIsProjectArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Menu items: name, link, index and CTA [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/menu) */
export type MenuLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Menu items: name, link, index and CTA [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/menu) */
export type MenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Menu items: name, link, index and CTA [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/menu) */
export type MenuNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type MenuCollection = {
  __typename?: 'MenuCollection';
  items: Array<Maybe<Menu>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  indexOrder?: InputMaybe<Scalars['Int']>;
  indexOrder_exists?: InputMaybe<Scalars['Boolean']>;
  indexOrder_gt?: InputMaybe<Scalars['Int']>;
  indexOrder_gte?: InputMaybe<Scalars['Int']>;
  indexOrder_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  indexOrder_lt?: InputMaybe<Scalars['Int']>;
  indexOrder_lte?: InputMaybe<Scalars['Int']>;
  indexOrder_not?: InputMaybe<Scalars['Int']>;
  indexOrder_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  isCta?: InputMaybe<Scalars['Boolean']>;
  isCta_exists?: InputMaybe<Scalars['Boolean']>;
  isCta_not?: InputMaybe<Scalars['Boolean']>;
  isProject?: InputMaybe<Scalars['Boolean']>;
  isProject_exists?: InputMaybe<Scalars['Boolean']>;
  isProject_not?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type MenuLinkingCollections = {
  __typename?: 'MenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MenuOrder {
  IndexOrderAsc = 'indexOrder_ASC',
  IndexOrderDesc = 'indexOrder_DESC',
  IsCtaAsc = 'isCta_ASC',
  IsCtaDesc = 'isCta_DESC',
  IsProjectAsc = 'isProject_ASC',
  IsProjectDesc = 'isProject_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** About page template [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageAbout) */
export type PageAbout = Entry & _Node & {
  __typename?: 'PageAbout';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageAboutLinkingCollections>;
  pageHeader?: Maybe<ComponentPageHeader>;
  pageName?: Maybe<Scalars['String']>;
  picturesOfReferenceCollection?: Maybe<AssetCollection>;
  seo?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** About page template [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageAbout) */
export type PageAboutLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** About page template [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageAbout) */
export type PageAboutPageHeaderArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentPageHeaderFilter>;
};


/** About page template [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageAbout) */
export type PageAboutPageNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** About page template [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageAbout) */
export type PageAboutPicturesOfReferenceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** About page template [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageAbout) */
export type PageAboutSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};

export type PageAboutCollection = {
  __typename?: 'PageAboutCollection';
  items: Array<Maybe<PageAbout>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageAboutFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageAboutFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageAboutFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pageHeader?: InputMaybe<CfComponentPageHeaderNestedFilter>;
  pageHeader_exists?: InputMaybe<Scalars['Boolean']>;
  pageName?: InputMaybe<Scalars['String']>;
  pageName_contains?: InputMaybe<Scalars['String']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName_not?: InputMaybe<Scalars['String']>;
  pageName_not_contains?: InputMaybe<Scalars['String']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  picturesOfReferenceCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageAboutLinkingCollections = {
  __typename?: 'PageAboutLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageAboutLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageAboutOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Contact page template [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageContact) */
export type PageContact = Entry & _Node & {
  __typename?: 'PageContact';
  _id: Scalars['ID'];
  contactInformation?: Maybe<ComponentContact>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageContactLinkingCollections>;
  pageHeader?: Maybe<ComponentPageHeader>;
  pageName?: Maybe<Scalars['String']>;
  seo?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** Contact page template [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageContact) */
export type PageContactContactInformationArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentContactFilter>;
};


/** Contact page template [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageContact) */
export type PageContactLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Contact page template [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageContact) */
export type PageContactPageHeaderArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentPageHeaderFilter>;
};


/** Contact page template [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageContact) */
export type PageContactPageNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Contact page template [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageContact) */
export type PageContactSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};

export type PageContactCollection = {
  __typename?: 'PageContactCollection';
  items: Array<Maybe<PageContact>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageContactFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageContactFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageContactFilter>>>;
  contactInformation?: InputMaybe<CfComponentContactNestedFilter>;
  contactInformation_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pageHeader?: InputMaybe<CfComponentPageHeaderNestedFilter>;
  pageHeader_exists?: InputMaybe<Scalars['Boolean']>;
  pageName?: InputMaybe<Scalars['String']>;
  pageName_contains?: InputMaybe<Scalars['String']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName_not?: InputMaybe<Scalars['String']>;
  pageName_not_contains?: InputMaybe<Scalars['String']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageContactLinkingCollections = {
  __typename?: 'PageContactLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageContactLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageContactOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageEditor) */
export type PageEditor = Entry & _Node & {
  __typename?: 'PageEditor';
  _id: Scalars['ID'];
  content?: Maybe<PageEditorContent>;
  contentfulMetadata: ContentfulMetadata;
  html?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageEditorLinkingCollections>;
  pageName?: Maybe<Scalars['String']>;
  pageSlug?: Maybe<Scalars['String']>;
  seo?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageEditor) */
export type PageEditorContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageEditor) */
export type PageEditorHtmlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageEditor) */
export type PageEditorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageEditor) */
export type PageEditorPageNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageEditor) */
export type PageEditorPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageEditor) */
export type PageEditorSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};

export type PageEditorCollection = {
  __typename?: 'PageEditorCollection';
  items: Array<Maybe<PageEditor>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageEditorContent = {
  __typename?: 'PageEditorContent';
  json: Scalars['JSON'];
  links: PageEditorContentLinks;
};

export type PageEditorContentAssets = {
  __typename?: 'PageEditorContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageEditorContentEntries = {
  __typename?: 'PageEditorContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageEditorContentLinks = {
  __typename?: 'PageEditorContentLinks';
  assets: PageEditorContentAssets;
  entries: PageEditorContentEntries;
  resources: PageEditorContentResources;
};

export type PageEditorContentResources = {
  __typename?: 'PageEditorContentResources';
  block: Array<PageEditorContentResourcesBlock>;
  hyperlink: Array<PageEditorContentResourcesHyperlink>;
  inline: Array<PageEditorContentResourcesInline>;
};

export type PageEditorContentResourcesBlock = ResourceLink & {
  __typename?: 'PageEditorContentResourcesBlock';
  sys: ResourceSys;
};

export type PageEditorContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PageEditorContentResourcesHyperlink';
  sys: ResourceSys;
};

export type PageEditorContentResourcesInline = ResourceLink & {
  __typename?: 'PageEditorContentResourcesInline';
  sys: ResourceSys;
};

export type PageEditorFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageEditorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageEditorFilter>>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  html?: InputMaybe<Scalars['String']>;
  html_contains?: InputMaybe<Scalars['String']>;
  html_exists?: InputMaybe<Scalars['Boolean']>;
  html_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  html_not?: InputMaybe<Scalars['String']>;
  html_not_contains?: InputMaybe<Scalars['String']>;
  html_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName?: InputMaybe<Scalars['String']>;
  pageName_contains?: InputMaybe<Scalars['String']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName_not?: InputMaybe<Scalars['String']>;
  pageName_not_contains?: InputMaybe<Scalars['String']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageSlug?: InputMaybe<Scalars['String']>;
  pageSlug_contains?: InputMaybe<Scalars['String']>;
  pageSlug_exists?: InputMaybe<Scalars['Boolean']>;
  pageSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageSlug_not?: InputMaybe<Scalars['String']>;
  pageSlug_not_contains?: InputMaybe<Scalars['String']>;
  pageSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageEditorLinkingCollections = {
  __typename?: 'PageEditorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageEditorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageEditorOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PageSlugAsc = 'pageSlug_ASC',
  PageSlugDesc = 'pageSlug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Home Page [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageHome) */
export type PageHome = Entry & _Node & {
  __typename?: 'PageHome';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageHomeLinkingCollections>;
  projectsCollection?: Maybe<PageHomeProjectsCollection>;
  seo?: Maybe<ComponentSeo>;
  slider?: Maybe<ComponentSlider>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Home Page [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageHome) */
export type PageHomeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Home Page [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageHome) */
export type PageHomeProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageHomeProjectsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageProjectFilter>;
};


/** Home Page [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageHome) */
export type PageHomeSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** Home Page [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageHome) */
export type PageHomeSliderArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSliderFilter>;
};


/** Home Page [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageHome) */
export type PageHomeTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageHomeCollection = {
  __typename?: 'PageHomeCollection';
  items: Array<Maybe<PageHome>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageHomeFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageHomeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageHomeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  projects?: InputMaybe<CfPageProjectNestedFilter>;
  projectsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slider?: InputMaybe<CfComponentSliderNestedFilter>;
  slider_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageHomeLinkingCollections = {
  __typename?: 'PageHomeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageHomeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageHomeOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageHomeProjectsCollection = {
  __typename?: 'PageHomeProjectsCollection';
  items: Array<Maybe<PageProject>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageHomeProjectsCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Single page for projects [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageProject) */
export type PageProject = Entry & _Node & {
  __typename?: 'PageProject';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<PageProjectDescription>;
  galleryCollection?: Maybe<AssetCollection>;
  header?: Maybe<Asset>;
  linkedFrom?: Maybe<PageProjectLinkingCollections>;
  seo?: Maybe<ComponentSeo>;
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  thumbnail?: Maybe<Asset>;
  title?: Maybe<Scalars['String']>;
};


/** Single page for projects [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageProject) */
export type PageProjectDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Single page for projects [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageProject) */
export type PageProjectGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Single page for projects [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageProject) */
export type PageProjectHeaderArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Single page for projects [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageProject) */
export type PageProjectLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Single page for projects [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageProject) */
export type PageProjectSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** Single page for projects [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageProject) */
export type PageProjectSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Single page for projects [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageProject) */
export type PageProjectSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Single page for projects [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageProject) */
export type PageProjectThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Single page for projects [See type definition](https://app.contentful.com/spaces/7hpjtmfrm15k/content_types/pageProject) */
export type PageProjectTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageProjectCollection = {
  __typename?: 'PageProjectCollection';
  items: Array<Maybe<PageProject>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageProjectDescription = {
  __typename?: 'PageProjectDescription';
  json: Scalars['JSON'];
  links: PageProjectDescriptionLinks;
};

export type PageProjectDescriptionAssets = {
  __typename?: 'PageProjectDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageProjectDescriptionEntries = {
  __typename?: 'PageProjectDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageProjectDescriptionLinks = {
  __typename?: 'PageProjectDescriptionLinks';
  assets: PageProjectDescriptionAssets;
  entries: PageProjectDescriptionEntries;
  resources: PageProjectDescriptionResources;
};

export type PageProjectDescriptionResources = {
  __typename?: 'PageProjectDescriptionResources';
  block: Array<PageProjectDescriptionResourcesBlock>;
  hyperlink: Array<PageProjectDescriptionResourcesHyperlink>;
  inline: Array<PageProjectDescriptionResourcesInline>;
};

export type PageProjectDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'PageProjectDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type PageProjectDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'PageProjectDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type PageProjectDescriptionResourcesInline = ResourceLink & {
  __typename?: 'PageProjectDescriptionResourcesInline';
  sys: ResourceSys;
};

export type PageProjectFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageProjectFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageProjectFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  galleryCollection_exists?: InputMaybe<Scalars['Boolean']>;
  header_exists?: InputMaybe<Scalars['Boolean']>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageProjectLinkingCollections = {
  __typename?: 'PageProjectLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
};


export type PageProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageProjectLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProjectLinkingCollectionsPageHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageProjectLinkingCollectionsPageHomeCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageProjectOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  assets?: Maybe<Assets>;
  assetsCollection?: Maybe<AssetsCollection>;
  componentContact?: Maybe<ComponentContact>;
  componentContactCollection?: Maybe<ComponentContactCollection>;
  componentPageHeader?: Maybe<ComponentPageHeader>;
  componentPageHeaderCollection?: Maybe<ComponentPageHeaderCollection>;
  componentSeo?: Maybe<ComponentSeo>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  componentSlider?: Maybe<ComponentSlider>;
  componentSliderCollection?: Maybe<ComponentSliderCollection>;
  componentSocialMedia?: Maybe<ComponentSocialMedia>;
  componentSocialMediaCollection?: Maybe<ComponentSocialMediaCollection>;
  entryCollection?: Maybe<EntryCollection>;
  menu?: Maybe<Menu>;
  menuCollection?: Maybe<MenuCollection>;
  pageAbout?: Maybe<PageAbout>;
  pageAboutCollection?: Maybe<PageAboutCollection>;
  pageContact?: Maybe<PageContact>;
  pageContactCollection?: Maybe<PageContactCollection>;
  pageEditor?: Maybe<PageEditor>;
  pageEditorCollection?: Maybe<PageEditorCollection>;
  pageHome?: Maybe<PageHome>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
  pageProject?: Maybe<PageProject>;
  pageProjectCollection?: Maybe<PageProjectCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryAssetsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetsFilter>;
};


export type QueryComponentContactArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentContactOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentContactFilter>;
};


export type QueryComponentPageHeaderArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentPageHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentPageHeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentPageHeaderFilter>;
};


export type QueryComponentSeoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


export type QueryComponentSliderArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentSliderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSliderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentSliderFilter>;
};


export type QueryComponentSocialMediaArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentSocialMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSocialMediaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentSocialMediaFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryMenuArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuFilter>;
};


export type QueryPageAboutArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageAboutOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageAboutFilter>;
};


export type QueryPageContactArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageContactOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageContactFilter>;
};


export type QueryPageEditorArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageEditorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageEditorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageEditorFilter>;
};


export type QueryPageHomeArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageHomeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageHomeFilter>;
};


export type QueryPageProjectArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProjectOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageProjectFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  urn: Scalars['String'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']>;
};

export type _Node = {
  _id: Scalars['ID'];
};

export type CfComponentContactNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentContactNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentContactNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  location_contains?: InputMaybe<Scalars['String']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_not?: InputMaybe<Scalars['String']>;
  location_not_contains?: InputMaybe<Scalars['String']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_contains?: InputMaybe<Scalars['String']>;
  phone_exists?: InputMaybe<Scalars['Boolean']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not?: InputMaybe<Scalars['String']>;
  phone_not_contains?: InputMaybe<Scalars['String']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentPageHeaderNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentPageHeaderNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentPageHeaderNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  header_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfComponentSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']>;
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentSliderNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSliderNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSliderNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageProjectNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageProjectNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageProjectNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  galleryCollection_exists?: InputMaybe<Scalars['Boolean']>;
  header_exists?: InputMaybe<Scalars['Boolean']>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageAboutQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageAboutQuery = { __typename?: 'Query', pageAboutCollection?: { __typename?: 'PageAboutCollection', items: Array<{ __typename?: 'PageAbout', pageHeader?: (
        { __typename?: 'ComponentPageHeader' }
        & PageHeaderFieldsFragment
      ) | null, picturesOfReferenceCollection?: { __typename?: 'AssetCollection', items: Array<(
          { __typename?: 'Asset' }
          & ImageFieldsFragment
        ) | null> } | null, seo?: (
        { __typename?: 'ComponentSeo' }
        & SeoFieldsFragment
      ) | null } | null> } | null };

export type PageContactQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageContactQuery = { __typename?: 'Query', pageContactCollection?: { __typename?: 'PageContactCollection', items: Array<{ __typename?: 'PageContact', pageHeader?: (
        { __typename?: 'ComponentPageHeader' }
        & PageHeaderFieldsFragment
      ) | null, contactInformation?: (
        { __typename?: 'ComponentContact' }
        & ContactFieldsFragment
      ) | null, seo?: (
        { __typename?: 'ComponentSeo' }
        & SeoFieldsFragment
      ) | null } | null> } | null };

export type ContactFieldsFragment = { __typename?: 'ComponentContact', location?: string | null, email?: string | null, phone?: string | null };

export type PageEditorQueryVariables = Exact<{
  slug: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageEditorQuery = { __typename?: 'Query', pageEditorCollection?: { __typename?: 'PageEditorCollection', items: Array<{ __typename?: 'PageEditor', pageName?: string | null, html?: string | null, content?: { __typename?: 'PageEditorContent', json: any } | null, seo?: (
        { __typename?: 'ComponentSeo' }
        & SeoFieldsFragment
      ) | null } | null> } | null };

export type ImageFieldsFragment = { __typename: 'Asset', title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } };

export type PageLandingQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageLandingQuery = { __typename?: 'Query', pageHomeCollection?: { __typename?: 'PageHomeCollection', items: Array<{ __typename?: 'PageHome', title?: string | null, slider?: { __typename?: 'ComponentSlider', imageCollection?: { __typename?: 'AssetCollection', items: Array<(
            { __typename?: 'Asset' }
            & ImageFieldsFragment
          ) | null> } | null } | null, projectsCollection?: { __typename?: 'PageHomeProjectsCollection', items: Array<{ __typename?: 'PageProject', title?: string | null, subtitle?: string | null, slug?: string | null, thumbnail?: (
            { __typename?: 'Asset' }
            & ImageFieldsFragment
          ) | null } | null> } | null, seo?: (
        { __typename?: 'ComponentSeo' }
        & SeoFieldsFragment
      ) | null } | null> } | null };

export type LayoutQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type LayoutQuery = { __typename?: 'Query', menuCollection?: { __typename?: 'MenuCollection', items: Array<{ __typename?: 'Menu', name?: string | null, link?: string | null, isProject?: boolean | null, indexOrder?: number | null } | null> } | null, assetsCollection?: { __typename?: 'AssetsCollection', items: Array<{ __typename?: 'Assets', logoLight?: (
        { __typename?: 'Asset' }
        & ImageFieldsFragment
      ) | null, logoDark?: (
        { __typename?: 'Asset' }
        & ImageFieldsFragment
      ) | null, logoSmall?: (
        { __typename?: 'Asset' }
        & ImageFieldsFragment
      ) | null } | null> } | null, componentContactCollection?: { __typename?: 'ComponentContactCollection', items: Array<(
      { __typename?: 'ComponentContact' }
      & ContactFieldsFragment
    ) | null> } | null, componentSocialMediaCollection?: { __typename?: 'ComponentSocialMediaCollection', items: Array<{ __typename?: 'ComponentSocialMedia', name?: string | null, link?: string | null } | null> } | null };

export type PageHeaderFieldsFragment = { __typename?: 'ComponentPageHeader', title?: string | null, description?: { __typename?: 'ComponentPageHeaderDescription', json: any } | null, header?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null };

export type PageProductQueryVariables = Exact<{
  slug: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageProductQuery = { __typename?: 'Query', pageProjectCollection?: { __typename?: 'PageProjectCollection', items: Array<{ __typename?: 'PageProject', title?: string | null, subtitle?: string | null, description?: { __typename?: 'PageProjectDescription', json: any } | null, header?: (
        { __typename?: 'Asset' }
        & ImageFieldsFragment
      ) | null, galleryCollection?: { __typename?: 'AssetCollection', items: Array<(
          { __typename?: 'Asset' }
          & ImageFieldsFragment
        ) | null> } | null, seo?: (
        { __typename?: 'ComponentSeo' }
        & SeoFieldsFragment
      ) | null } | null> } | null };

export type SeoFieldsFragment = { __typename: 'ComponentSeo', pageTitle?: string | null, pageDescription?: string | null, canonicalUrl?: string | null, nofollow?: boolean | null, noindex?: boolean | null, shareImagesCollection?: { __typename?: 'AssetCollection', items: Array<(
      { __typename?: 'Asset' }
      & ImageFieldsFragment
    ) | null> } | null };

export type SitemapPagesFieldsFragment = { __typename?: 'Query', pageHomeCollection?: { __typename?: 'PageHomeCollection', items: Array<{ __typename?: 'PageHome', sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null, pageAboutCollection?: { __typename?: 'PageAboutCollection', items: Array<{ __typename?: 'PageAbout', pageName?: string | null, sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null, pageContactCollection?: { __typename?: 'PageContactCollection', items: Array<{ __typename?: 'PageContact', pageName?: string | null, sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null, pageEditorCollection?: { __typename?: 'PageEditorCollection', items: Array<{ __typename?: 'PageEditor', pageSlug?: string | null, sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null, pageProjectCollection?: { __typename?: 'PageProjectCollection', items: Array<{ __typename?: 'PageProject', slug?: string | null, sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null };

export type SitemapPagesQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type SitemapPagesQuery = (
  { __typename?: 'Query' }
  & SitemapPagesFieldsFragment
);

export const ContactFieldsFragmentDoc = gql`
    fragment ContactFields on ComponentContact {
  location
  email
  phone
}
    `;
export const ImageFieldsFragmentDoc = gql`
    fragment ImageFields on Asset {
  __typename
  sys {
    id
  }
  title
  description
  width
  height
  url
  contentType
}
    `;
export const PageHeaderFieldsFragmentDoc = gql`
    fragment PageHeaderFields on ComponentPageHeader {
  title
  description {
    json
  }
  header {
    ...ImageFields
  }
}
    `;
export const SeoFieldsFragmentDoc = gql`
    fragment SeoFields on ComponentSeo {
  __typename
  pageTitle
  pageDescription
  canonicalUrl
  nofollow
  noindex
  shareImagesCollection(limit: 3, locale: $locale) {
    items {
      ...ImageFields
    }
  }
}
    `;
export const SitemapPagesFieldsFragmentDoc = gql`
    fragment sitemapPagesFields on Query {
  pageHomeCollection(limit: 1, locale: $locale) {
    items {
      sys {
        publishedAt
      }
    }
  }
  pageAboutCollection(limit: 1, locale: $locale) {
    items {
      pageName
      sys {
        publishedAt
      }
    }
  }
  pageContactCollection(limit: 1, locale: $locale) {
    items {
      pageName
      sys {
        publishedAt
      }
    }
  }
  pageEditorCollection(limit: 10, locale: $locale) {
    items {
      pageSlug
      sys {
        publishedAt
      }
    }
  }
  pageProjectCollection(limit: 20, locale: $locale) {
    items {
      slug
      sys {
        publishedAt
      }
    }
  }
}
    `;
export const PageAboutDocument = gql`
    query pageAbout($locale: String, $preview: Boolean) {
  pageAboutCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      pageHeader {
        ...PageHeaderFields
      }
      picturesOfReferenceCollection(limit: 20) {
        items {
          ...ImageFields
        }
      }
      seo {
        ...SeoFields
      }
    }
  }
}
    ${PageHeaderFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${SeoFieldsFragmentDoc}`;
export const PageContactDocument = gql`
    query pageContact($locale: String, $preview: Boolean) {
  pageContactCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      pageHeader {
        ...PageHeaderFields
      }
      contactInformation {
        ...ContactFields
      }
      seo {
        ...SeoFields
      }
    }
  }
}
    ${PageHeaderFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${ContactFieldsFragmentDoc}
${SeoFieldsFragmentDoc}`;
export const PageEditorDocument = gql`
    query pageEditor($slug: String!, $locale: String, $preview: Boolean) {
  pageEditorCollection(
    limit: 1
    where: {pageSlug: $slug}
    locale: $locale
    preview: $preview
  ) {
    items {
      pageName
      content {
        json
      }
      html
      seo {
        ...SeoFields
      }
    }
  }
}
    ${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const PageLandingDocument = gql`
    query pageLanding($locale: String, $preview: Boolean) {
  pageHomeCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      title
      slider {
        imageCollection(limit: 10) {
          items {
            ...ImageFields
          }
        }
      }
      projectsCollection(limit: 12, locale: $locale, preview: $preview) {
        items {
          title
          subtitle
          slug
          thumbnail {
            ...ImageFields
          }
        }
      }
      seo {
        ...SeoFields
      }
    }
  }
}
    ${ImageFieldsFragmentDoc}
${SeoFieldsFragmentDoc}`;
export const LayoutDocument = gql`
    query layout($locale: String, $preview: Boolean) {
  menuCollection(limit: 10, locale: $locale, preview: $preview) {
    items {
      name
      link
      isProject
      indexOrder
    }
  }
  assetsCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      logoLight {
        ...ImageFields
      }
      logoDark {
        ...ImageFields
      }
      logoSmall {
        ...ImageFields
      }
    }
  }
  componentContactCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      ...ContactFields
    }
  }
  componentSocialMediaCollection(limit: 10, locale: $locale, preview: $preview) {
    items {
      name
      link
    }
  }
}
    ${ImageFieldsFragmentDoc}
${ContactFieldsFragmentDoc}`;
export const PageProductDocument = gql`
    query pageProduct($slug: String!, $locale: String, $preview: Boolean) {
  pageProjectCollection(
    limit: 1
    where: {slug: $slug}
    locale: $locale
    preview: $preview
  ) {
    items {
      title
      subtitle
      description {
        json
      }
      header {
        ...ImageFields
      }
      galleryCollection(limit: 15) {
        items {
          ...ImageFields
        }
      }
      seo {
        ...SeoFields
      }
    }
  }
}
    ${ImageFieldsFragmentDoc}
${SeoFieldsFragmentDoc}`;
export const SitemapPagesDocument = gql`
    query sitemapPages($locale: String!) {
  ...sitemapPagesFields
}
    ${SitemapPagesFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    pageAbout(variables?: PageAboutQueryVariables, requestHeaders?: HeadersInit): Promise<PageAboutQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageAboutQuery>(PageAboutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageAbout', 'query');
    },
    pageContact(variables?: PageContactQueryVariables, requestHeaders?: HeadersInit): Promise<PageContactQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageContactQuery>(PageContactDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageContact', 'query');
    },
    pageEditor(variables: PageEditorQueryVariables, requestHeaders?: HeadersInit): Promise<PageEditorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageEditorQuery>(PageEditorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageEditor', 'query');
    },
    pageLanding(variables?: PageLandingQueryVariables, requestHeaders?: HeadersInit): Promise<PageLandingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageLandingQuery>(PageLandingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageLanding', 'query');
    },
    layout(variables?: LayoutQueryVariables, requestHeaders?: HeadersInit): Promise<LayoutQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LayoutQuery>(LayoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'layout', 'query');
    },
    pageProduct(variables: PageProductQueryVariables, requestHeaders?: HeadersInit): Promise<PageProductQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageProductQuery>(PageProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageProduct', 'query');
    },
    sitemapPages(variables: SitemapPagesQueryVariables, requestHeaders?: HeadersInit): Promise<SitemapPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SitemapPagesQuery>(SitemapPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sitemapPages', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;