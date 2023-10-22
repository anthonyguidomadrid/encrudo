import { GetServerSideProps } from 'next'
import absoluteUrl from 'next-absolute-url'
import { getServerSideSitemap } from 'next-sitemap'
import URI from 'urijs'

import { SitemapPagesFieldsFragment } from '@src/lib/__generated/sdk'
import { client } from '@src/lib/client'

type SitemapFieldsWithoutTypename = Omit<
  SitemapPagesFieldsFragment,
  '__typename'
>
type SitemapPageCollection =
  SitemapFieldsWithoutTypename[keyof SitemapFieldsWithoutTypename]

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { locales, req } = ctx
  const { origin } = absoluteUrl(req)

  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const promiseArr =
    locales?.map(locale => client.sitemapPages({ locale })).filter(Boolean) ||
    []
  const dataPerLocale: SitemapFieldsWithoutTypename[] = await Promise.all(
    promiseArr
  )

  const getPageUrl = (item): string => {
    if (item.slug) return `/proyectos/${item?.slug}`
    if (item.pageSlug) return item.pageSlug
    if (item.pageName === 'Contact') return 'contacto'
    if (item.pageName === 'About') return 'sobre-nosotros'
    return ''
  }

  const fields = dataPerLocale
    .map((localeData, index) =>
      Object.values(localeData).flatMap(
        (pageCollection: SitemapPageCollection) =>
          pageCollection?.items.map(item => {
            const localeForUrl =
              locales?.[index] === ctx.defaultLocale
                ? undefined
                : locales?.[index]
            const url = new URI(origin)
              .segment([localeForUrl || '', getPageUrl(item)])
              .toString()

            return item && !item.seoFields?.excludeFromSitemap
              ? {
                  loc: url,
                  lastmod: item.sys.publishedAt
                }
              : undefined
          })
      )
    )
    .flat()
    .filter(Boolean)

  return getServerSideSitemap(ctx, fields)
}

const Sitemap = () => {
  return null
}

export default Sitemap
