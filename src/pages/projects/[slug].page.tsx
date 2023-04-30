import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useTranslation } from 'next-i18next'

import { Button } from '@src/components/button'
import { Gallery } from '@src/components/gallery'
import { ProjectHeader } from '@src/components/projectHeader'
import { client } from '@src/lib/client'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'

const Page = ({
  product
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { title, subtitle, header, description } = product
  const { t } = useTranslation()

  return (
    <>
      <ProjectHeader
        title={title}
        subtitle={subtitle}
        image={header}
        description={documentToHtmlString(description?.json)}
      />
      <Gallery photos={product.galleryCollection?.items} columnAmount={3}/>
      <div className="flex my-10">
        <Button
          label={t('project.back-btn')}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          }
          link={'/#projects'}
        />
      </div>
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
    const data = await client.pageProduct({
      slug: params.slug.toString(),
      locale
    })
    const product = data.pageProjectCollection?.items[0]

    if (!product) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        ...(await getServerSideTranslations(locale)),
        product
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}

export default Page
