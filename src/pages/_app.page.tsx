import { ChakraProvider } from '@chakra-ui/react'
import localFont from '@next/font/local'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

import { Layout, MenuItem, AssetContent } from '@src/components/templates/layout'
import { client } from '@src/lib/client'
import { theme } from '@src/theme'

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

export type AppProperties =
  AppProps & { data: { menuCollection: {
    items: MenuItem[]
  }, assetsCollection: {
    items: AssetContent[]
  }
}}

const App = ({ Component, pageProps, data }: AppProperties) => {
  return (
    <ChakraProvider
      theme={{
        ...theme,
        fonts: {
          heading: `${banglaSangam.style.fontFamily}, ${theme.fonts.heading}`,
          body: `${banglaSangam.style.fontFamily}, ${theme.fonts.body}`
        }
      }}
    >
      <Layout
        menuContent={data.menuCollection.items}
        assetContent={data.assetsCollection.items[0]}
      >
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

App.getInitialProps = async ({ locale }: { locale?: string }) => {
  try {
    const data = await client.layout({ locale })

    if (!data) {
      return {
        notFound: true
      }
    }

    return {
      data
    }
  } catch {
    return {
      notFound: true
    }
  }
}

export default appWithTranslation(App)
