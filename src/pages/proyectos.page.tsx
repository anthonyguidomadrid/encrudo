import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { SeoFields } from '@src/components/features/seo'
import { PageHeader } from '@src/components/pageHeader'
import { client } from '@src/lib/client'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'
import { ProductTile } from '@src/components/productTile'

const ProjectsPage = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { pageHeader, projectsCollection, seo } = page

  return (
    <>
      {seo && <SeoFields {...seo} />}
      <PageHeader {...pageHeader} />
      {projectsCollection?.items?.length && (
        <section
          id="proyectos"
          className="max-w-7xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-10"
        >
          {page.projectsCollection.items.map((project, idx: number) => (
            <ProductTile key={idx} {...{ project }} />
          ))}
        </section>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const data = await client.pageProjects({
      locale
    })
    const page = data.pageProjectsCollection?.items[0]

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

export default ProjectsPage
