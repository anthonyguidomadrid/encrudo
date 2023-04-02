import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useTranslation } from 'next-i18next'

import { ProductTileGrid } from '@src/components/features/product'
import { SeoFields } from '@src/components/features/seo'
import { client } from '@src/lib/client'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'

const Page = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation()

  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    return {
      notFound: true
    }
  } catch {
    return {
      notFound: true
    }
  }
}

export default Page
