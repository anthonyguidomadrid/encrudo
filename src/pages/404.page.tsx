import { GetStaticProps } from 'next'

import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'

const ErrorPage404 = () => {
  return (
    <div className="bg-black h-screen">
      <p>Page not found</p>
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
