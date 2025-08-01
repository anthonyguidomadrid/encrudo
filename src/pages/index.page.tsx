import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { getServerSideTranslations } from './utils/get-serverside-translations'

import { SeoFields } from '@src/components/features/seo'
import dynamic from 'next/dynamic'
const ProductTile = dynamic(
  () =>
    import('@src/components/productTile/productTile').then(
      mod => mod.ProductTile
    ),
  { ssr: false }
)
const SliderBackground = dynamic(
  () =>
    import('@src/components/sliderBackground/sliderBackground').then(
      mod => mod.SliderBackground
    ),
  { ssr: false }
)
const Button = dynamic(
  () => import('@src/components/button/button').then(mod => mod.Button),
  { ssr: false }
)
import { useTranslation } from 'next-i18next'
import { LINKS } from '@src/constants/links'
import { client } from '@src/lib/client'

const Page = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation()
  return (
    <>
      {page.seo && <SeoFields {...page.seo} />}
      {page.slider?.imageCollection?.items?.length && (
        <SliderBackground items={page.slider?.imageCollection?.items} />
      )}
      {page.projectsCollection?.items?.length && (
        <section
          id="proyectos"
          className="max-w-7xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-10"
        >
          {page.projectsCollection.items.map((project, idx: number) => {
            return <ProductTile key={idx} {...{ project }} />
          })}
          <div className="col-span-full flex justify-center">
            <Button
              link={LINKS.PROJECTS}
              label={t('project.see-more')}
              additionalClasses="uppercase px-5 py-2 border border-primary hover:border-primary hover:text-grey-light"
            />
          </div>
        </section>
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
