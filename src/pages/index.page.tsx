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
      {page.slider?.imageCollection?.items?.length && (
        <HomeSlider items={page.slider?.imageCollection?.items} />
      )}
      {page.projectsCollection?.items?.length && (
        <section className="max-w-7xl	mx-auto my-10 grid grid-cols-3 grid-flow-row gap-10">
          {page.projectsCollection.items.map((project, idx) => {
            return (
              <div
                key={idx}
                className="w-full bg-black h-80"
                style={{
                  backgroundImage: `url(${project?.thumbnail?.url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <p>{project.title}</p>
              </div>
            )
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
