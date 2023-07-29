import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { SeoFields } from '@src/components/features/seo'
import { client } from '@src/lib/client'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'
import { PageHeader } from '@src/components/pageHeader'

const Page = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { pageHeader, contactInformation, seo } = page

  return (
    <>
      {seo && <SeoFields {...seo} />}
      {
        <>
          <PageHeader
            bannerUrl={pageHeader.header.url}
            title={pageHeader.title}
            description={pageHeader.description.json}
          />
        </>
      }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const data = await client.pageContact({
      locale
    })
    const page = data.pageContactCollection?.items[0]

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
