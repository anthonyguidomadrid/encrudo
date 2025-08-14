import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useTranslation } from 'next-i18next'

import ArrowLeft from '@icons/arrow-left.svg'
import { ProductJsonLd } from 'next-seo'
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
import { LINKS } from '@src/constants/links'

const Page = ({
  product
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { title, subtitle, header, description, seo, galleryCollection } =
    product
  const { t } = useTranslation()
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}${LINKS.PROJECTS}/${product.slug}`

  return (
    <>
      {seo && <SeoFields {...seo} />}
      <ProductJsonLd
        productName={title}
        description={description?.json ? description.json : ''}
        brand="Encrudo Taller"
        images={galleryCollection.items.map(item => item?.url || '')}
        offers={{
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url
        }}
        url={url}
      />
      <ProjectHeader
        title={title}
        subtitle={subtitle}
        image={header}
        description={documentToHtmlString(description?.json)}
      />
      <Gallery photos={galleryCollection?.items} columnAmount={3} />
      <div className="flex my-10">
        <Button
          label={t('project.back-btn')}
          icon={<ArrowLeft className={'h-7'} />}
          link={LINKS.PROJECTS}
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
