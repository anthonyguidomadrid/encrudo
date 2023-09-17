import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { SeoFields } from '@src/components/features/seo'
import { client } from '@src/lib/client'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'

const Page = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    pageName,
    content: { json },
    seo
  } = page

  return (
    <>
      {seo && <SeoFields {...seo} />}
      <div className="bg-grey-light pt-36 pb-16">
        <h1 className="max-w-4xl mx-auto px-5 text-white text-center">{pageName}</h1>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(json)
        }}
        className="max-w-4xl mx-auto py-10 px-5 space-y-4"
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  locale
}) => {
  if (!params?.slug || !locale) {
    return {
      notFound: true
    }
  }

  try {
    const data = await client.pageEditor({
      slug: params.slug.toString(),
      locale
    })
    const page = data.pageEditorCollection?.items[0]

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
