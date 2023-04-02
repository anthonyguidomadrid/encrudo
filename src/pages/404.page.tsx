import { GetStaticProps } from 'next'
import { Trans, useTranslation } from 'next-i18next'
import Link from 'next/link'

import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'

const ErrorPage404 = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-black h-screen">
      <h1>Page not found</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getServerSideTranslations(locale))
    }
  }
}

export default ErrorPage404
