import Head from 'next/head'
import { generateNextSeo } from 'next-seo/pages'
import { useRouter } from 'next/router'
import URI from 'urijs'

import { SeoFieldsFragment } from '@src/lib/__generated/sdk'

const isAbsoluteHttpUrl = (value: unknown): value is string =>
  typeof value === 'string' && /^https?:\/\//.test(value)

const generateUrl = (
  siteUrl: string | undefined,
  locale: string,
  path: string
) => {
  if (!isAbsoluteHttpUrl(siteUrl)) return undefined

  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return new URI(siteUrl).segment([locale, normalizedPath]).toString()
}

export const SeoFields = ({
  pageTitle,
  pageDescription,
  noindex,
  nofollow,
  canonicalUrl,
  shareImagesCollection
}: SeoFieldsFragment) => {
  const { locale, locales, asPath } = useRouter()

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  const url = generateUrl(siteUrl, locale || '', asPath)

  const languageAlternates =
    locales
      ?.map(locale => ({
        hrefLang: locale,
        href: generateUrl(siteUrl, locale, asPath)
      }))
      .filter((alt): alt is { hrefLang: string; href: string } =>
        Boolean(alt.href)
      ) || []

  return (
    <Head>
      {generateNextSeo({
        title: pageTitle || undefined,
        description: pageDescription || undefined,
        canonical: canonicalUrl || url || undefined,
        nofollow: nofollow || false,
        noindex: noindex || false,
        languageAlternates: languageAlternates.length
          ? languageAlternates
          : undefined,
        openGraph: {
          type: 'website',
          locale: locale,
          ...(url ? { url } : {}),
          title: pageTitle || undefined,
          description: pageDescription || undefined,
          images: shareImagesCollection?.items.map(item => ({
            url: item?.url || '',
            width: item?.width || 0,
            height: item?.height || 0,
            alt: item?.description || '',
            type: item?.contentType || ''
          }))
        },
        twitter: {
          ...(url ? { site: url } : {}),
          cardType: 'summary_large_image'
        }
      })}
    </Head>
  )
}
