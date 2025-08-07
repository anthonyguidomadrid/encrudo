import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { SeoFields } from '@src/components/features/seo'
import { client } from '@src/lib/client'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'
import dynamic from 'next/dynamic'
import { BreadcrumbItem } from '@src/components/breadcrumbs/breadcrumbs'

const Breadcrumbs = dynamic(
  () =>
    import('@src/components/breadcrumbs/breadcrumbs').then(
      mod => mod.Breadcrumbs
    ),
  { ssr: false }
)
import { LINKS } from '@src/constants/links'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { WebPageJsonLd } from 'next-seo'

const Page = ({
  page: {
    pageName,
    content: { json },
    seo,
    html
  }
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation()
  const { asPath } = useRouter()
  const BREADCRUMBS: BreadcrumbItem[] = [
    { label: t('link.home'), href: LINKS.HOME },
    { label: pageName, href: asPath }
  ]
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/${asPath}`

  return (
    <>
      {seo && <SeoFields {...seo} />}
      <WebPageJsonLd
        name={pageName}
        description={seo?.pageDescription}
        id={url}
        url={url}
      />
      <section className="bg-grey-light pt-36 pb-16">
        <h1 className="max-w-4xl mx-auto px-5 text-white text-center">
          {pageName}
        </h1>
      </section>
      <Breadcrumbs items={BREADCRUMBS} />
      <section
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(json)
        }}
        className="max-w-4xl mx-auto py-10 px-5 space-y-4"
      />

      {html && (
        <section
          dangerouslySetInnerHTML={{ __html: html }}
          className="max-w-4xl mx-auto pb-10 px-5 space-y-4 flex justify-center"
        />
      )}
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
