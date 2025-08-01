import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useTranslation } from 'next-i18next'

import ArrowLeft from '@icons/arrow-left.svg'
import { SeoFields } from '@src/components/features/seo'
import dynamic from 'next/dynamic'

const ProjectHeader = dynamic(
  () =>
    import('@src/components/projectHeader/projectHeader').then(
      mod => mod.ProjectHeader
    ),
  { ssr: false }
)
const Gallery = dynamic(
  () => import('@src/components/gallery/gallery').then(mod => mod.Gallery),
  { ssr: false }
)
const Button = dynamic(
  () => import('@src/components/button/button').then(mod => mod.Button),
  { ssr: false }
)
import { client } from '@src/lib/client'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'

const Page = ({
  product
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { title, subtitle, header, description, seo } = product
  const { t } = useTranslation()

  return (
    <>
      {seo && <SeoFields {...seo} />}
      <ProjectHeader
        title={title}
        subtitle={subtitle}
        image={header}
        description={documentToHtmlString(description?.json)}
      />
      <Gallery photos={product.galleryCollection?.items} columnAmount={3} />
      <div className="flex my-10">
        <Button
          label={t('project.back-btn')}
          icon={<ArrowLeft className={'h-7'} />}
          link={'/#proyectos'}
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
    const data = await client.pageProject({
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
