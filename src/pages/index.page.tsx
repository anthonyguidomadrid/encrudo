import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { getServerSideTranslations } from './utils/get-serverside-translations'

import { SeoFields } from '@src/components/features/seo'
import { ProductTile } from '@src/components/productTile'
import { SliderBackground } from '@src/components/sliderBackground'
import { client } from '@src/lib/client'

const Page = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log({ page })
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
          {page.projectsCollection.items.map((project, idx) => {
            return <ProductTile key={idx} {...{ project }} />
          })}
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
