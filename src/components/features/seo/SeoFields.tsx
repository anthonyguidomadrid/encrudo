import Head from 'next/head'
import { generateNextSeo } from 'next-seo/pages'
import { useRouter } from 'next/router'

import { SeoFieldsFragment } from '@src/lib/__generated/sdk'

const isAbsoluteHttpUrl = (value: unknown): value is string =>
  typeof value === 'string' && /^https?:\/\//.test(value)

const stripQueryAndHash = (path: string) => path.split('#')[0].split('?')[0]

const stripTrailingSlash = (path: string) =>
  path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path

const normalizeTwitterHandle = (value: unknown) => {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  if (!trimmed) return undefined

  // Reject URLs — twitter:site/twitter:creator expect handles (e.g. @encrudo)
  if (/^https?:\/\//i.test(trimmed)) return undefined

  return trimmed.startsWith('@') ? trimmed : `@${trimmed}`
}

const stripLocalePrefix = (path: string, locales: string[] | undefined) => {
  if (!locales?.length) return path
  const normalized = path.startsWith('/') ? path : `/${path}`

  for (const locale of locales) {
    if (normalized === `/${locale}`) return '/'
    if (normalized.startsWith(`/${locale}/`)) {
      const rest = normalized.slice(locale.length + 1)
      return rest.length ? rest : '/'
    }
  }

  return normalized
}

const generateUrl = (
  siteUrl: string | undefined,
  locale: string,
  path: string,
  options?: {
    defaultLocale?: string
    locales?: string[]
  }
) => {
  if (!isAbsoluteHttpUrl(siteUrl)) return undefined

  const cleanPath = stripQueryAndHash(path)
  const pathWithoutLocale = stripLocalePrefix(cleanPath, options?.locales)

  const normalizedPath = pathWithoutLocale.startsWith('/')
    ? pathWithoutLocale
    : `/${pathWithoutLocale}`

  const defaultLocale = options?.defaultLocale || 'es'

  const localizedPath =
    locale && locale !== defaultLocale
      ? normalizedPath === '/'
        ? `/${locale}`
        : `/${locale}${normalizedPath}`
      : normalizedPath

  const finalPath = stripTrailingSlash(localizedPath)

  try {
    const url = new URL(siteUrl)
    url.pathname = finalPath
    url.search = ''
    url.hash = ''
    return url.toString()
  } catch {
    return undefined
  }
}

export const SeoFields = ({
  pageTitle,
  pageDescription,
  noindex,
  nofollow,
  canonicalUrl,
  shareImagesCollection
}: SeoFieldsFragment) => {
  const { locale, locales, defaultLocale, asPath } = useRouter()

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const twitterSite = normalizeTwitterHandle(
    process.env.NEXT_PUBLIC_TWITTER_SITE || process.env.NEXT_PUBLIC_TWITTER
  )
  const twitterHandle = normalizeTwitterHandle(
    process.env.NEXT_PUBLIC_TWITTER_HANDLE || process.env.NEXT_PUBLIC_TWITTER
  )

  const url = generateUrl(siteUrl, locale || '', asPath, {
    defaultLocale: defaultLocale || 'es',
    locales: locales?.slice()
  })

  const languageAlternates =
    locales
      ?.map(localeItem => ({
        hrefLang: localeItem,
        href: generateUrl(siteUrl, localeItem, asPath, {
          defaultLocale: defaultLocale || 'es',
          locales: locales?.slice()
        })
      }))
      .filter((alt): alt is { hrefLang: string; href: string } =>
        Boolean(alt.href)
      ) || []

  const xDefault = generateUrl(siteUrl, defaultLocale || 'es', asPath, {
    defaultLocale: defaultLocale || 'es',
    locales: locales?.slice()
  })

  const languageAlternatesWithDefault = xDefault
    ? [...languageAlternates, { hrefLang: 'x-default', href: xDefault }]
    : languageAlternates

  return (
    <Head>
      {generateNextSeo({
        title: pageTitle || undefined,
        description: pageDescription || undefined,
        canonical: canonicalUrl || url || undefined,
        nofollow: nofollow || false,
        noindex: noindex || false,
        languageAlternates: languageAlternatesWithDefault.length
          ? languageAlternatesWithDefault
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
          cardType: 'summary_large_image',
          ...(twitterSite ? { site: twitterSite } : {}),
          ...(twitterHandle ? { handle: twitterHandle } : {})
        }
      })}
    </Head>
  )
}
