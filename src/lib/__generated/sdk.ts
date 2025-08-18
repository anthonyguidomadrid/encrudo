import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentPageHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentSliderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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

/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/assets) */
export type Assets = Entry & _Node & {
  __typename?: 'Assets';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AssetsLinkingCollections>;
  logoDark?: Maybe<Asset>;
  logoLight?: Maybe<Asset>;
  logoSmall?: Maybe<Asset>;
  notFoundBackgroundImage?: Maybe<Asset>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/assets) */
export type AssetsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/assets) */
export type AssetsLogoDarkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/assets) */
export type AssetsLogoLightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/assets) */
export type AssetsLogoSmallArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/assets) */
export type AssetsNotFoundBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetsCollection = {
  __typename?: 'AssetsCollection';
  items: Array<Maybe<Assets>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetsFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  logoDark_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logoLight_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logoSmall_exists?: InputMaybe<Scalars['Boolean']['input']>;
  notFoundBackgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type AssetsLinkingCollections = {
  __typename?: 'AssetsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AssetsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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

/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentContact) */
export type ComponentContact = Entry & _Node & {
  __typename?: 'ComponentContact';
  _id: Scalars['ID']['output'];
  addressCountry?: Maybe<Scalars['String']['output']>;
  addressLocality?: Maybe<Scalars['String']['output']>;
  addressRegion?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  displayNewsletter?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentContactLinkingCollections>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  websiteName?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentContact) */
export type ComponentContactAddressCountryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentContact) */
export type ComponentContactAddressLocalityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentContact) */
export type ComponentContactAddressRegionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentContact) */
export type ComponentContactDisplayNewsletterArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentContact) */
export type ComponentContactEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentContact) */
export type ComponentContactLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentContact) */
export type ComponentContactPhoneArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentContact) */
export type ComponentContactPostalCodeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentContact) */
export type ComponentContactStreetAddressArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentContact) */
export type ComponentContactWebsiteNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentContactCollection = {
  __typename?: 'ComponentContactCollection';
  items: Array<Maybe<ComponentContact>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentContactFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentContactFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentContactFilter>>>;
  addressCountry?: InputMaybe<Scalars['String']['input']>;
  addressCountry_contains?: InputMaybe<Scalars['String']['input']>;
  addressCountry_exists?: InputMaybe<Scalars['Boolean']['input']>;
  addressCountry_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressCountry_not?: InputMaybe<Scalars['String']['input']>;
  addressCountry_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressCountry_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressLocality?: InputMaybe<Scalars['String']['input']>;
  addressLocality_contains?: InputMaybe<Scalars['String']['input']>;
  addressLocality_exists?: InputMaybe<Scalars['Boolean']['input']>;
  addressLocality_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressLocality_not?: InputMaybe<Scalars['String']['input']>;
  addressLocality_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressLocality_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressRegion?: InputMaybe<Scalars['String']['input']>;
  addressRegion_contains?: InputMaybe<Scalars['String']['input']>;
  addressRegion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  addressRegion_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressRegion_not?: InputMaybe<Scalars['String']['input']>;
  addressRegion_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressRegion_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  displayNewsletter?: InputMaybe<Scalars['Boolean']['input']>;
  displayNewsletter_exists?: InputMaybe<Scalars['Boolean']['input']>;
  displayNewsletter_not?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  phone_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone_not?: InputMaybe<Scalars['String']['input']>;
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  postalCode_contains?: InputMaybe<Scalars['String']['input']>;
  postalCode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  postalCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postalCode_not?: InputMaybe<Scalars['String']['input']>;
  postalCode_not_contains?: InputMaybe<Scalars['String']['input']>;
  postalCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  streetAddress_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress_exists?: InputMaybe<Scalars['Boolean']['input']>;
  streetAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress_not?: InputMaybe<Scalars['String']['input']>;
  streetAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  websiteName?: InputMaybe<Scalars['String']['input']>;
  websiteName_contains?: InputMaybe<Scalars['String']['input']>;
  websiteName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  websiteName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  websiteName_not?: InputMaybe<Scalars['String']['input']>;
  websiteName_not_contains?: InputMaybe<Scalars['String']['input']>;
  websiteName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContactLinkingCollections = {
  __typename?: 'ComponentContactLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageContactCollection?: Maybe<PageContactCollection>;
};


export type ComponentContactLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentContactLinkingCollectionsPageContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentContactLinkingCollectionsPageContactCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  AddressCountryAsc = 'addressCountry_ASC',
  AddressCountryDesc = 'addressCountry_DESC',
  AddressLocalityAsc = 'addressLocality_ASC',
  AddressLocalityDesc = 'addressLocality_DESC',
  AddressRegionAsc = 'addressRegion_ASC',
  AddressRegionDesc = 'addressRegion_DESC',
  DisplayNewsletterAsc = 'displayNewsletter_ASC',
  DisplayNewsletterDesc = 'displayNewsletter_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  PostalCodeAsc = 'postalCode_ASC',
  PostalCodeDesc = 'postalCode_DESC',
  StreetAddressAsc = 'streetAddress_ASC',
  StreetAddressDesc = 'streetAddress_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WebsiteNameAsc = 'websiteName_ASC',
  WebsiteNameDesc = 'websiteName_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentPageHeader) */
export type ComponentPageHeader = Entry & _Node & {
  __typename?: 'ComponentPageHeader';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ComponentPageHeaderDescription>;
  header?: Maybe<Asset>;
  linkedFrom?: Maybe<ComponentPageHeaderLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentPageHeader) */
export type ComponentPageHeaderDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentPageHeader) */
export type ComponentPageHeaderHeaderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentPageHeader) */
export type ComponentPageHeaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentPageHeader) */
export type ComponentPageHeaderTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPageHeaderCollection = {
  __typename?: 'ComponentPageHeaderCollection';
  items: Array<Maybe<ComponentPageHeader>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentPageHeaderDescription = {
  __typename?: 'ComponentPageHeaderDescription';
  json: Scalars['JSON']['output'];
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
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  header_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPageHeaderLinkingCollections = {
  __typename?: 'ComponentPageHeaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageAboutCollection?: Maybe<PageAboutCollection>;
  pageContactCollection?: Maybe<PageContactCollection>;
  pageProjectsCollection?: Maybe<PageProjectsCollection>;
};


export type ComponentPageHeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentPageHeaderLinkingCollectionsPageAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentPageHeaderLinkingCollectionsPageAboutCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentPageHeaderLinkingCollectionsPageContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentPageHeaderLinkingCollectionsPageContactCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentPageHeaderLinkingCollectionsPageProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentPageHeaderLinkingCollectionsPageProjectsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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

export enum ComponentPageHeaderLinkingCollectionsPageProjectsCollectionOrder {
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

/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSeo) */
export type ComponentSeo = Entry & _Node & {
  __typename?: 'ComponentSeo';
  _id: Scalars['ID']['output'];
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentSeoLinkingCollections>;
  nofollow?: Maybe<Scalars['Boolean']['output']>;
  noindex?: Maybe<Scalars['Boolean']['output']>;
  pageDescription?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  shareImagesCollection?: Maybe<AssetCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSeo) */
export type ComponentSeoCanonicalUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSeo) */
export type ComponentSeoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSeo) */
export type ComponentSeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSeo) */
export type ComponentSeoNofollowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSeo) */
export type ComponentSeoNoindexArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSeo) */
export type ComponentSeoPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSeo) */
export type ComponentSeoPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSeo) */
export type ComponentSeoShareImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentSeoCollection = {
  __typename?: 'ComponentSeoCollection';
  items: Array<Maybe<ComponentSeo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentSeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noindex?: InputMaybe<Scalars['Boolean']['input']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noindex_not?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  pageProjectsCollection?: Maybe<PageProjectsCollection>;
};


export type ComponentSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageAboutCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageContactCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageEditorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageEditorCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageProjectCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageProjectsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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

export enum ComponentSeoLinkingCollectionsPageProjectsCollectionOrder {
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

/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSlider) */
export type ComponentSlider = Entry & _Node & {
  __typename?: 'ComponentSlider';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  imageCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<ComponentSliderLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSlider) */
export type ComponentSliderImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSlider) */
export type ComponentSliderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSliderCollection = {
  __typename?: 'ComponentSliderCollection';
  items: Array<Maybe<ComponentSlider>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentSliderFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSliderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSliderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSliderLinkingCollections = {
  __typename?: 'ComponentSliderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
};


export type ComponentSliderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSliderLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSliderLinkingCollectionsPageHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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

/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSocialMedia) */
export type ComponentSocialMedia = Entry & _Node & {
  __typename?: 'ComponentSocialMedia';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  link?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentSocialMediaLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSocialMedia) */
export type ComponentSocialMediaLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSocialMedia) */
export type ComponentSocialMediaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/componentSocialMedia) */
export type ComponentSocialMediaNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSocialMediaCollection = {
  __typename?: 'ComponentSocialMediaCollection';
  items: Array<Maybe<ComponentSocialMedia>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentSocialMediaFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSocialMediaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSocialMediaFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSocialMediaLinkingCollections = {
  __typename?: 'ComponentSocialMediaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentSocialMediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
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
  /** AVIF image format. */
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
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/menu) */
export type Menu = Entry & _Node & {
  __typename?: 'Menu';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  indexOrder?: Maybe<Scalars['Int']['output']>;
  isCta?: Maybe<Scalars['Boolean']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MenuLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/menu) */
export type MenuIndexOrderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/menu) */
export type MenuIsCtaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/menu) */
export type MenuLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/menu) */
export type MenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/menu) */
export type MenuNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MenuCollection = {
  __typename?: 'MenuCollection';
  items: Array<Maybe<Menu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  indexOrder?: InputMaybe<Scalars['Int']['input']>;
  indexOrder_exists?: InputMaybe<Scalars['Boolean']['input']>;
  indexOrder_gt?: InputMaybe<Scalars['Int']['input']>;
  indexOrder_gte?: InputMaybe<Scalars['Int']['input']>;
  indexOrder_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  indexOrder_lt?: InputMaybe<Scalars['Int']['input']>;
  indexOrder_lte?: InputMaybe<Scalars['Int']['input']>;
  indexOrder_not?: InputMaybe<Scalars['Int']['input']>;
  indexOrder_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isCta?: InputMaybe<Scalars['Boolean']['input']>;
  isCta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isCta_not?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type MenuLinkingCollections = {
  __typename?: 'MenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MenuOrder {
  IndexOrderAsc = 'indexOrder_ASC',
  IndexOrderDesc = 'indexOrder_DESC',
  IsCtaAsc = 'isCta_ASC',
  IsCtaDesc = 'isCta_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageAbout) */
export type PageAbout = Entry & _Node & {
  __typename?: 'PageAbout';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageAboutLinkingCollections>;
  pageHeader?: Maybe<ComponentPageHeader>;
  pageName?: Maybe<Scalars['String']['output']>;
  picturesOfReferenceCollection?: Maybe<AssetCollection>;
  seo?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageAbout) */
export type PageAboutLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageAbout) */
export type PageAboutPageHeaderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentPageHeaderFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageAbout) */
export type PageAboutPageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageAbout) */
export type PageAboutPicturesOfReferenceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageAbout) */
export type PageAboutSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};

export type PageAboutCollection = {
  __typename?: 'PageAboutCollection';
  items: Array<Maybe<PageAbout>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageAboutFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageAboutFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageAboutFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pageHeader?: InputMaybe<CfComponentPageHeaderNestedFilter>;
  pageHeader_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  picturesOfReferenceCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageAboutLinkingCollections = {
  __typename?: 'PageAboutLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageAboutLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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

/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageContact) */
export type PageContact = Entry & _Node & {
  __typename?: 'PageContact';
  _id: Scalars['ID']['output'];
  contactInformation?: Maybe<ComponentContact>;
  contentfulMetadata: ContentfulMetadata;
  googleMapsUrl?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageContactLinkingCollections>;
  pageHeader?: Maybe<ComponentPageHeader>;
  pageName?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageContact) */
export type PageContactContactInformationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentContactFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageContact) */
export type PageContactGoogleMapsUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageContact) */
export type PageContactLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageContact) */
export type PageContactPageHeaderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentPageHeaderFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageContact) */
export type PageContactPageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageContact) */
export type PageContactSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};

export type PageContactCollection = {
  __typename?: 'PageContactCollection';
  items: Array<Maybe<PageContact>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageContactFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageContactFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageContactFilter>>>;
  contactInformation?: InputMaybe<CfComponentContactNestedFilter>;
  contactInformation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  googleMapsUrl?: InputMaybe<Scalars['String']['input']>;
  googleMapsUrl_contains?: InputMaybe<Scalars['String']['input']>;
  googleMapsUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  googleMapsUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  googleMapsUrl_not?: InputMaybe<Scalars['String']['input']>;
  googleMapsUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  googleMapsUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageHeader?: InputMaybe<CfComponentPageHeaderNestedFilter>;
  pageHeader_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageContactLinkingCollections = {
  __typename?: 'PageContactLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageContactLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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

/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageEditor) */
export type PageEditor = Entry & _Node & {
  __typename?: 'PageEditor';
  _id: Scalars['ID']['output'];
  content?: Maybe<PageEditorContent>;
  contentfulMetadata: ContentfulMetadata;
  html?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageEditorLinkingCollections>;
  pageName?: Maybe<Scalars['String']['output']>;
  pageSlug?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageEditor) */
export type PageEditorContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageEditor) */
export type PageEditorHtmlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageEditor) */
export type PageEditorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageEditor) */
export type PageEditorPageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageEditor) */
export type PageEditorPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageEditor) */
export type PageEditorSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};

export type PageEditorCollection = {
  __typename?: 'PageEditorCollection';
  items: Array<Maybe<PageEditor>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageEditorContent = {
  __typename?: 'PageEditorContent';
  json: Scalars['JSON']['output'];
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
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  html?: InputMaybe<Scalars['String']['input']>;
  html_contains?: InputMaybe<Scalars['String']['input']>;
  html_exists?: InputMaybe<Scalars['Boolean']['input']>;
  html_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  html_not?: InputMaybe<Scalars['String']['input']>;
  html_not_contains?: InputMaybe<Scalars['String']['input']>;
  html_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageSlug?: InputMaybe<Scalars['String']['input']>;
  pageSlug_contains?: InputMaybe<Scalars['String']['input']>;
  pageSlug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageSlug_not?: InputMaybe<Scalars['String']['input']>;
  pageSlug_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageEditorLinkingCollections = {
  __typename?: 'PageEditorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageEditorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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

/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageHome) */
export type PageHome = Entry & _Node & {
  __typename?: 'PageHome';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageHomeLinkingCollections>;
  projectsCollection?: Maybe<PageHomeProjectsCollection>;
  seo?: Maybe<ComponentSeo>;
  slider?: Maybe<ComponentSlider>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageHome) */
export type PageHomeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageHome) */
export type PageHomeProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageHomeProjectsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageProjectFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageHome) */
export type PageHomeSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageHome) */
export type PageHomeSliderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSliderFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageHome) */
export type PageHomeTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageHomeCollection = {
  __typename?: 'PageHomeCollection';
  items: Array<Maybe<PageHome>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageHomeFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageHomeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageHomeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  projects?: InputMaybe<CfPageProjectNestedFilter>;
  projectsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slider?: InputMaybe<CfComponentSliderNestedFilter>;
  slider_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageHomeLinkingCollections = {
  __typename?: 'PageHomeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageHomeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
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

/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProject) */
export type PageProject = Entry & _Node & {
  __typename?: 'PageProject';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<PageProjectDescription>;
  galleryCollection?: Maybe<AssetCollection>;
  header?: Maybe<Asset>;
  linkedFrom?: Maybe<PageProjectLinkingCollections>;
  seo?: Maybe<ComponentSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  thumbnail?: Maybe<Asset>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProject) */
export type PageProjectDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProject) */
export type PageProjectGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProject) */
export type PageProjectHeaderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProject) */
export type PageProjectLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProject) */
export type PageProjectSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProject) */
export type PageProjectSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProject) */
export type PageProjectSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProject) */
export type PageProjectThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProject) */
export type PageProjectTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageProjectCollection = {
  __typename?: 'PageProjectCollection';
  items: Array<Maybe<PageProject>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageProjectDescription = {
  __typename?: 'PageProjectDescription';
  json: Scalars['JSON']['output'];
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
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  galleryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  header_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageProjectLinkingCollections = {
  __typename?: 'PageProjectLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
  pageProjectsCollection?: Maybe<PageProjectsCollection>;
};


export type PageProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageProjectLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageProjectLinkingCollectionsPageHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageProjectLinkingCollectionsPageProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageProjectLinkingCollectionsPageProjectsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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

export enum PageProjectLinkingCollectionsPageProjectsCollectionOrder {
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

/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProjects) */
export type PageProjects = Entry & _Node & {
  __typename?: 'PageProjects';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageProjectsLinkingCollections>;
  pageHeader?: Maybe<ComponentPageHeader>;
  pageName?: Maybe<Scalars['String']['output']>;
  projectsCollection?: Maybe<PageProjectsProjectsCollection>;
  seo?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProjects) */
export type PageProjectsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProjects) */
export type PageProjectsPageHeaderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentPageHeaderFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProjects) */
export type PageProjectsPageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProjects) */
export type PageProjectsProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageProjectsProjectsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageProjectFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/gb8vyc5duwg4/content_types/pageProjects) */
export type PageProjectsSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};

export type PageProjectsCollection = {
  __typename?: 'PageProjectsCollection';
  items: Array<Maybe<PageProjects>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageProjectsFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageProjectsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageProjectsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pageHeader?: InputMaybe<CfComponentPageHeaderNestedFilter>;
  pageHeader_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projects?: InputMaybe<CfPageProjectNestedFilter>;
  projectsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageProjectsLinkingCollections = {
  __typename?: 'PageProjectsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageProjectsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageProjectsOrder {
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

export type PageProjectsProjectsCollection = {
  __typename?: 'PageProjectsProjectsCollection';
  items: Array<Maybe<PageProject>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageProjectsProjectsCollectionOrder {
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
  _nodes: Array<Maybe<_Node>>;
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
  pageProjects?: Maybe<PageProjects>;
  pageProjectsCollection?: Maybe<PageProjectsCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryAssetsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetsFilter>;
};


export type QueryComponentContactArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentContactOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentContactFilter>;
};


export type QueryComponentPageHeaderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentPageHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentPageHeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentPageHeaderFilter>;
};


export type QueryComponentSeoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


export type QueryComponentSliderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentSliderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSliderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentSliderFilter>;
};


export type QueryComponentSocialMediaArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentSocialMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSocialMediaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentSocialMediaFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuFilter>;
};


export type QueryPageAboutArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageAboutOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageAboutFilter>;
};


export type QueryPageContactArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageContactOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageContactFilter>;
};


export type QueryPageEditorArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageEditorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageEditorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageEditorFilter>;
};


export type QueryPageHomeArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageHomeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageHomeFilter>;
};


export type QueryPageProjectArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageProjectOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageProjectFilter>;
};


export type QueryPageProjectsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageProjectsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageProjectsFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfComponentContactNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentContactNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentContactNestedFilter>>>;
  addressCountry?: InputMaybe<Scalars['String']['input']>;
  addressCountry_contains?: InputMaybe<Scalars['String']['input']>;
  addressCountry_exists?: InputMaybe<Scalars['Boolean']['input']>;
  addressCountry_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressCountry_not?: InputMaybe<Scalars['String']['input']>;
  addressCountry_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressCountry_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressLocality?: InputMaybe<Scalars['String']['input']>;
  addressLocality_contains?: InputMaybe<Scalars['String']['input']>;
  addressLocality_exists?: InputMaybe<Scalars['Boolean']['input']>;
  addressLocality_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressLocality_not?: InputMaybe<Scalars['String']['input']>;
  addressLocality_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressLocality_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressRegion?: InputMaybe<Scalars['String']['input']>;
  addressRegion_contains?: InputMaybe<Scalars['String']['input']>;
  addressRegion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  addressRegion_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressRegion_not?: InputMaybe<Scalars['String']['input']>;
  addressRegion_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressRegion_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  displayNewsletter?: InputMaybe<Scalars['Boolean']['input']>;
  displayNewsletter_exists?: InputMaybe<Scalars['Boolean']['input']>;
  displayNewsletter_not?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  phone_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone_not?: InputMaybe<Scalars['String']['input']>;
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  postalCode_contains?: InputMaybe<Scalars['String']['input']>;
  postalCode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  postalCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postalCode_not?: InputMaybe<Scalars['String']['input']>;
  postalCode_not_contains?: InputMaybe<Scalars['String']['input']>;
  postalCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  streetAddress_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress_exists?: InputMaybe<Scalars['Boolean']['input']>;
  streetAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress_not?: InputMaybe<Scalars['String']['input']>;
  streetAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  websiteName?: InputMaybe<Scalars['String']['input']>;
  websiteName_contains?: InputMaybe<Scalars['String']['input']>;
  websiteName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  websiteName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  websiteName_not?: InputMaybe<Scalars['String']['input']>;
  websiteName_not_contains?: InputMaybe<Scalars['String']['input']>;
  websiteName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentPageHeaderNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentPageHeaderNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentPageHeaderNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  header_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noindex?: InputMaybe<Scalars['Boolean']['input']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noindex_not?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentSliderNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSliderNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSliderNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageProjectNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageProjectNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageProjectNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  galleryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  header_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageAboutQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageContactQuery = { __typename?: 'Query', pageContactCollection?: { __typename?: 'PageContactCollection', items: Array<{ __typename?: 'PageContact', googleMapsUrl?: string | null, pageHeader?: (
        { __typename?: 'ComponentPageHeader' }
        & PageHeaderFieldsFragment
      ) | null, contactInformation?: (
        { __typename?: 'ComponentContact' }
        & ContactFieldsFragment
      ) | null, seo?: (
        { __typename?: 'ComponentSeo' }
        & SeoFieldsFragment
      ) | null } | null> } | null };

export type ContactFieldsFragment = { __typename?: 'ComponentContact', websiteName?: string | null, streetAddress?: string | null, addressLocality?: string | null, addressRegion?: string | null, postalCode?: string | null, addressCountry?: string | null, email?: string | null, phone?: string | null, displayNewsletter?: boolean | null };

export type PageEditorQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageEditorQuery = { __typename?: 'Query', pageEditorCollection?: { __typename?: 'PageEditorCollection', items: Array<{ __typename?: 'PageEditor', pageName?: string | null, html?: string | null, content?: { __typename?: 'PageEditorContent', json: any } | null, seo?: (
        { __typename?: 'ComponentSeo' }
        & SeoFieldsFragment
      ) | null } | null> } | null };

export type ImageFieldsFragment = { __typename: 'Asset', title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } };

export type PageHeaderFieldsFragment = { __typename?: 'ComponentPageHeader', title?: string | null, description?: { __typename?: 'ComponentPageHeaderDescription', json: any } | null, header?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null };

export type SeoFieldsFragment = { __typename: 'ComponentSeo', pageTitle?: string | null, pageDescription?: string | null, canonicalUrl?: string | null, nofollow?: boolean | null, noindex?: boolean | null, shareImagesCollection?: { __typename?: 'AssetCollection', items: Array<(
      { __typename?: 'Asset' }
      & ImageFieldsFragment
    ) | null> } | null };

export type PageLandingQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageLandingQuery = { __typename?: 'Query', pageHomeCollection?: { __typename?: 'PageHomeCollection', items: Array<{ __typename?: 'PageHome', title?: string | null, slider?: { __typename?: 'ComponentSlider', imageCollection?: { __typename?: 'AssetCollection', items: Array<(
            { __typename?: 'Asset' }
            & ImageFieldsFragment
          ) | null> } | null } | null, projectsCollection?: { __typename?: 'PageHomeProjectsCollection', items: Array<(
          { __typename?: 'PageProject' }
          & ProjectOverviewFieldsFragment
        ) | null> } | null, seo?: (
        { __typename?: 'ComponentSeo' }
        & SeoFieldsFragment
      ) | null } | null> } | null };

export type LayoutQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type LayoutQuery = { __typename?: 'Query', menuCollection?: { __typename?: 'MenuCollection', items: Array<{ __typename?: 'Menu', name?: string | null, link?: string | null, isCta?: boolean | null, indexOrder?: number | null } | null> } | null, assetsCollection?: { __typename?: 'AssetsCollection', items: Array<{ __typename?: 'Assets', logoLight?: (
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

export type NotFoundQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type NotFoundQuery = { __typename?: 'Query', assetsCollection?: { __typename?: 'AssetsCollection', items: Array<{ __typename?: 'Assets', notFoundBackgroundImage?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type PageProjectQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageProjectQuery = { __typename?: 'Query', pageProjectCollection?: { __typename?: 'PageProjectCollection', items: Array<{ __typename?: 'PageProject', title?: string | null, subtitle?: string | null, description?: { __typename?: 'PageProjectDescription', json: any } | null, header?: (
        { __typename?: 'Asset' }
        & ImageFieldsFragment
      ) | null, galleryCollection?: { __typename?: 'AssetCollection', items: Array<(
          { __typename?: 'Asset' }
          & ImageFieldsFragment
        ) | null> } | null, seo?: (
        { __typename?: 'ComponentSeo' }
        & SeoFieldsFragment
      ) | null } | null> } | null };

export type ProjectOverviewFieldsFragment = { __typename?: 'PageProject', title?: string | null, subtitle?: string | null, slug?: string | null, thumbnail?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null };

export type PageProjectsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageProjectsQuery = { __typename?: 'Query', pageProjectsCollection?: { __typename?: 'PageProjectsCollection', items: Array<{ __typename?: 'PageProjects', pageHeader?: (
        { __typename?: 'ComponentPageHeader' }
        & PageHeaderFieldsFragment
      ) | null, seo?: (
        { __typename?: 'ComponentSeo' }
        & SeoFieldsFragment
      ) | null, projectsCollection?: { __typename?: 'PageProjectsProjectsCollection', items: Array<(
          { __typename?: 'PageProject' }
          & ProjectOverviewFieldsFragment
        ) | null> } | null } | null> } | null };

export const ContactFieldsFragmentDoc = gql`
    fragment ContactFields on ComponentContact {
  websiteName
  streetAddress
  addressLocality
  addressRegion
  postalCode
  addressCountry
  email
  phone
  displayNewsletter
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
export const ProjectOverviewFieldsFragmentDoc = gql`
    fragment ProjectOverviewFields on PageProject {
  title
  subtitle
  slug
  thumbnail {
    ...ImageFields
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
      googleMapsUrl
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
          ...ProjectOverviewFields
        }
      }
      seo {
        ...SeoFields
      }
    }
  }
}
    ${ImageFieldsFragmentDoc}
${ProjectOverviewFieldsFragmentDoc}
${SeoFieldsFragmentDoc}`;
export const LayoutDocument = gql`
    query layout($locale: String, $preview: Boolean) {
  menuCollection(limit: 10, locale: $locale, preview: $preview) {
    items {
      name
      link
      isCta
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
export const NotFoundDocument = gql`
    query notFound($locale: String, $preview: Boolean) {
  assetsCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      notFoundBackgroundImage {
        url
      }
    }
  }
}
    `;
export const PageProjectDocument = gql`
    query pageProject($slug: String!, $locale: String, $preview: Boolean) {
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
export const PageProjectsDocument = gql`
    query pageProjects($locale: String, $preview: Boolean) {
  pageProjectsCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      pageHeader {
        ...PageHeaderFields
      }
      seo {
        ...SeoFields
      }
      projectsCollection(limit: 20) {
        items {
          ...ProjectOverviewFields
        }
      }
    }
  }
}
    ${PageHeaderFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ProjectOverviewFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    pageAbout(variables?: PageAboutQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PageAboutQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageAboutQuery>({ document: PageAboutDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'pageAbout', 'query', variables);
    },
    pageContact(variables?: PageContactQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PageContactQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageContactQuery>({ document: PageContactDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'pageContact', 'query', variables);
    },
    pageEditor(variables: PageEditorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PageEditorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageEditorQuery>({ document: PageEditorDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'pageEditor', 'query', variables);
    },
    pageLanding(variables?: PageLandingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PageLandingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageLandingQuery>({ document: PageLandingDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'pageLanding', 'query', variables);
    },
    layout(variables?: LayoutQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<LayoutQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LayoutQuery>({ document: LayoutDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'layout', 'query', variables);
    },
    notFound(variables?: NotFoundQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<NotFoundQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NotFoundQuery>({ document: NotFoundDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'notFound', 'query', variables);
    },
    pageProject(variables: PageProjectQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PageProjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageProjectQuery>({ document: PageProjectDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'pageProject', 'query', variables);
    },
    pageProjects(variables?: PageProjectsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PageProjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageProjectsQuery>({ document: PageProjectsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'pageProjects', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;