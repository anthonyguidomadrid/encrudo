import { SpeedInsights } from '@vercel/speed-insights/next'
import Head from 'next/head'
import { LocalBusinessJsonLd } from 'next-seo'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { Italiana, Montserrat } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import * as gtag from '../helpers/gtag'

import {
  AssetContent,
  ContactContent,
  Layout
} from '@src/components/templates/layout'
import { LogoJsonLd } from '@src/components/features/seo'
import type { LayoutQuery } from '@src/lib/__generated/sdk'

import '../styles/global.css'
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css'
import 'react-image-lightbox/style.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-montserrat'
})

const italiana = Italiana({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-italiana'
})

export type AppProperties = AppProps & {
  pageProps: AppProps['pageProps'] & {
    layoutData?: LayoutQuery
  }
}

const App = ({ Component, pageProps }: AppProperties) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const data = pageProps.layoutData

  const contactContent = data?.componentContactCollection
    ?.items[0] as ContactContent
  const assetContent = data?.assetsCollection?.items[0] as AssetContent
  const socialMediaContent = data?.componentSocialMediaCollection?.items
  const url = process.env.NEXT_PUBLIC_SITE_URL

  const favicons = data?.assetsCollection?.items?.[0]?.favicons
  const websiteName = data?.componentContactCollection?.items?.[0]?.websiteName

  return (
    <div
      className={`${montserrat.className} ${montserrat.variable} ${italiana.variable}`}
    >
      <Head>
        {websiteName ? (
          <meta name="apple-mobile-web-app-title" content={websiteName} />
        ) : null}

        {favicons?.appleTouchIcon?.url ? (
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={favicons.appleTouchIcon.url}
          />
        ) : null}

        {favicons?.favicon96X96?.url ? (
          <>
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href={favicons.favicon96X96.url}
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href={favicons.favicon96X96.url}
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href={favicons.favicon96X96.url}
            />
          </>
        ) : null}

        {favicons?.faviconSvg?.url ? (
          <link rel="icon" type="image/svg+xml" href={favicons.faviconSvg.url} />
        ) : null}

        {favicons?.faviconIco?.url ? (
          <link rel="icon" type="image/x-icon" href={favicons.faviconIco.url} />
        ) : null}

        {favicons?.manifestJson?.url ? (
          <link rel="manifest" href={favicons.manifestJson.url} />
        ) : null}

        {favicons?.webAppManifest192?.url ? (
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={favicons.webAppManifest192.url}
          />
        ) : null}

        {favicons?.webAppManifest512?.url ? (
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href={favicons.webAppManifest512.url}
          />
        ) : null}
      </Head>

      <Layout
        menuContent={data?.menuCollection?.items?.sort(
          (a, b) => (a?.indexOrder ?? 0) - (b?.indexOrder ?? 0)
        )}
        assetContent={assetContent}
        contactContent={contactContent}
        socialMediaContent={socialMediaContent}
      >
        <LocalBusinessJsonLd
          type="Store"
          name={pageProps?.title}
          description={pageProps?.seo?.pageDescription}
          url={url}
          telephone={contactContent?.phone!}
          address={{
            streetAddress: contactContent?.streetAddress ?? undefined,
            addressLocality: contactContent?.addressLocality ?? undefined,
            addressRegion: contactContent?.addressRegion ?? undefined,
            postalCode: contactContent?.postalCode ?? undefined,
            addressCountry: contactContent?.addressCountry ?? undefined
          }}
          openingHoursSpecification={[
            {
              opens: '09:00',
              closes: '18:00',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday'
              ]
            }
          ]}
        />
        <LogoJsonLd logo={assetContent?.logoDark?.url!} url={url!} />
        <div
          key={router.asPath}
          className="animate-[pageFadeIn_260ms_ease-out_both] motion-reduce:animate-none"
        >
          <Component {...pageProps} />
        </div>
        <SpeedInsights />
      </Layout>
    </div>
  )
}

export default appWithTranslation(App)
