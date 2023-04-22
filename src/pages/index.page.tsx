import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import { Splide, SplideSlide } from 'splide-nextjs/react-splide'

import { getServerSideTranslations } from './utils/get-serverside-translations'

import { SeoFields } from '@src/components/features/seo'
import { client } from '@src/lib/client'

const Page = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log('page', page.slider.imageCollection)
  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
      {page.slider?.imageCollection?.items?.length > 0 && (
        <Splide aria-label="My Favorite Images">
          {page.slider.imageCollection?.items?.map((image, idx) => {
            return (
              <SplideSlide key={idx}>
                <div
                  className="h-screen"
                  style={{
                    backgroundImage: `url(${image?.url})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </SplideSlide>
            )
          })}
        </Splide>
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
