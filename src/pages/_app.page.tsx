import { SpeedInsights } from '@vercel/speed-insights/next'
import { LocalBusinessJsonLd } from 'next-seo'
import { appWithTranslation } from 'next-i18next'
import type { AppContext, AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import * as gtag from '../helpers/gtag'

import {
  AssetContent,
  ContactContent,
  Layout
} from '@src/components/templates/layout'
import { LogoJsonLd } from '@src/components/features/seo'
import { LayoutQuery } from '@src/lib/__generated/sdk'
import { client } from '@src/lib/client'

import '../styles/global.css'
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css'
import 'react-image-lightbox/style.css'

export type AppProperties = AppProps & {
  data: LayoutQuery
}

const App = ({ Component, pageProps, data }: AppProperties) => {
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

  const contactContent = data?.componentContactCollection
    ?.items[0] as ContactContent
  const assetContent = data?.assetsCollection?.items[0] as AssetContent
  const socialMediaContent = data?.componentSocialMediaCollection?.items
  const url = process.env.NEXT_PUBLIC_SITE_URL

  return (
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
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
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
  )
}

App.getInitialProps = async ({ router }: AppContext) => {
  const locale = router.locale
  try {
    const data = await client.layout({ locale })

    if (!data) {
      return {
        notFound: true
      }
    }

    return { data }
  } catch {
    return {
      notFound: true
    }
  }
}

export default appWithTranslation(App)
