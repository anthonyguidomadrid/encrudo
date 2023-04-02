import localFont from '@next/font/local'
import { appWithTranslation } from 'next-i18next'
import type { AppContext, AppProps } from 'next/app'

import { Layout } from '@src/components/templates/layout'
import { LayoutQuery } from '@src/lib/__generated/sdk'
import { client } from '@src/lib/client'
import '../../styles/global.css'

export const banglaSangam = localFont({
  src: [
    {
      path: './utils/fonts/bangla-sangam-mn.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: './utils/fonts/bangla-sangam-mn.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './utils/fonts/bangla-sangam-mn.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: './utils/fonts/bangla-sangam-mn.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './utils/fonts/bangla-sangam-mn.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: './utils/fonts/bangla-sangam-mn.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './utils/fonts/bangla-sangam-mn.woff',
      weight: '600',
      style: 'normal'
    },
    {
      path: './utils/fonts/bangla-sangam-mn.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './utils/fonts/bangla-sangam-mn.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: './utils/fonts/bangla-sangam-mn.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})

export type AppProperties = AppProps & {
  data: LayoutQuery
}

const App = ({ Component, pageProps, data }: AppProperties) => {
  return (
    <Layout
      menuContent={data?.menuCollection?.items}
      assetContent={data?.assetsCollection?.items[0]}
    >
      <Component {...pageProps} />
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
