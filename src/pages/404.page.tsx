import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

import { Button } from '@src/components/button'
import { SeoFields } from '@src/components/features/seo/SeoFields'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'
import { client } from '@src/lib/client'
import { ImageFieldsFragment } from '@src/lib/__generated/sdk'

const ErrorPage404 = ({ notFoundBackgroundImageUrl }) => {
  const { t } = useTranslation()
  return (
    <>
      <SeoFields
        pageTitle={t('not-found.title')}
        pageDescription={t('not-found.description')}
        noindex={true}
        nofollow={true}
        canonicalUrl={null}
        shareImagesCollection={{
          items: [{ url: notFoundBackgroundImageUrl }] as ImageFieldsFragment[]
        }}
        __typename={'ComponentSeo'}
      />
      <section
        className="relative h-screen bg-blend-multiply bg-cover bg-no-repeat bg-center flex justify-center items-center"
        style={{ backgroundImage: `url('${notFoundBackgroundImageUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 flex text-center flex-col p-10 text-white gap-5">
          <h1>{t('not-found.title')}</h1>
          <p className="max-w-xl">{t('not-found.description')}</p>
          <Button
            label={t('not-found.button')}
            link={'/'}
            additionalClasses={'text-white border border-white'}
          />
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = await client.notFound({
    locale
  })
  const notFoundBackgroundImageUrl =
    data.assetsCollection?.items[0]?.notFoundBackgroundImage?.url
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
      notFoundBackgroundImageUrl
    }
  }
}

export default ErrorPage404
