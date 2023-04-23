import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { getServerSideTranslations } from './utils/get-serverside-translations'

import { HomeSlider } from '@src/components/features/homeSlider'
import { SeoFields } from '@src/components/features/seo'
import { client } from '@src/lib/client'
import Link from 'next/link'

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
        <section
          id="projects"
          className="max-w-7xl mx-auto p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-10"
        >
          {page.projectsCollection.items.map((project, idx) => {
            return (
              <Link key={idx} href={`/project/${project.slug}`}>
                <div  className="flex items-center justify-center">
                  <div className="overflow-hidden cursor-pointer relative group uppercase text-center">
                    <div className="z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white h-full flex justify-center items-end">
                      <div>
                        <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out w-full">
                          <div className="font-bold">{project.title}</div>

                          <div className="opacity-60 text-sm">
                            {project.subtitle}
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={project.thumbnail.description}
                      className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                      src={project.thumbnail.url}
                    />
                  </div>
                </div>
              </Link>
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
