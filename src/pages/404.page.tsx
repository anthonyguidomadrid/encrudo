import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

import { Button } from '@src/components/button'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'

const ErrorPage404 = () => {
  const { t } = useTranslation()
  return (
    <div className="h-screen bg-[url('https://images.ctfassets.net/7hpjtmfrm15k/5qTadZhBsyw28D7skaatuZ/b8ca8c02fff6a8f779b3aa01e501d41f/background-404-page.jpg')] bg-gray-400 bg-blend-multiply	bg-cover bg-no-repeat bg-center flex justify-center items-center text-center flex-col p-10 text-white gap-5">
      <h1>{t('not-found.title')}</h1>
      <p className="max-w-xl">{t('not-found.description')}</p>
      <Button
        label={t('not-found.button')}
        link={'/'}
        additionalClasses={'text-white'}
      />
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
