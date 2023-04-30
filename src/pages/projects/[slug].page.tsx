import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { client } from '@src/lib/client'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'

const Page = ({product}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log({ product })

  return <h1>Project</h1>
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
