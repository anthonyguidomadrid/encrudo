import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { SeoFields } from '@src/components/features/seo'

const Page = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <>{page.seoFields && <SeoFields {...page.seoFields} />}</>
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    return {
      notFound: true
    }
  } catch {
    return {
      notFound: true
    }
  }
}

export default Page
