import { appWithTranslation } from 'next-i18next'
import type { AppContext, AppProps } from 'next/app'

import { Layout } from '@src/components/templates/layout'
import { LayoutQuery } from '@src/lib/__generated/sdk'
import { client } from '@src/lib/client'
import '../../styles/global.css'

export type AppProperties = AppProps & {
  data: LayoutQuery
}

const App = ({ Component, pageProps, data }: AppProperties) => {
  return (
    <Layout
      menuContent={data?.menuCollection?.items?.sort((a, b) => (a?.indexOrder ?? 0) - (b?.indexOrder ?? 0))}
      assetContent={data?.assetsCollection?.items[0]}
      contactContent={data?.componentContactCollection?.items[0]}
      socialMediaContent={data?.componentSocialMediaCollection?.items}
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
