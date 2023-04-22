import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { getServerSideTranslations } from './utils/get-serverside-translations'

import { HomeSlider } from '@src/components/features/homeSlider'
import { SeoFields } from '@src/components/features/seo'
import { client } from '@src/lib/client'

const Page = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
      {page.slider?.imageCollection?.items?.length > 0 && (
        <HomeSlider items={page.slider?.imageCollection?.items} />
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const data = await client.pageLanding({ locale })

    const page = data.pageHomeCollection?.items[0]

    if (!page) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        ...(await getServerSideTranslations(locale)),
        page
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}

export default Page
