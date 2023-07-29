import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import { Splide, SplideSlide } from 'splide-nextjs/react-splide'

import { SeoFields } from '@src/components/features/seo'
import { PageHeader } from '@src/components/pageHeader'
import { client } from '@src/lib/client'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'

const Page = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { pageHeader, picturesOfReferenceCollection, seo } = page

  const SLIDE_DIMENSION = {
    width: 384,
    height: 288
  }

  return (
    <>
      {seo && <SeoFields {...seo} />}
      {
        <>
          <PageHeader
            bannerUrl={pageHeader.header.url}
            title={pageHeader.title}
            description={pageHeader.description.json}
          />
          <Splide
            options={{
              type: 'loop',
              pagination: false,
              fixedWidth: SLIDE_DIMENSION.width,
              fixedHeight: SLIDE_DIMENSION.height,
              cover: true,
              focus: 'center',
              isNavigation: false,
              autoplay: true,
              easing: 'linear',
              pauseOnHover: false,
              speed: 5000,
              interval: 0,
              pauseOnFocus: false,
              resetProgress: false,
              keyboard: false,
              arrows: false
            }}
          >
            {picturesOfReferenceCollection.items.map(slide => (
              <SplideSlide key={slide.alt}>
                <Image
                  src={slide.url}
                  alt={slide.alt}
                  width={SLIDE_DIMENSION.width}
                  height={SLIDE_DIMENSION.height}
                />
              </SplideSlide>
            ))}
          </Splide>
        </>
      }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const data = await client.pageAbout({
      locale
    })
    const page = data.pageAboutCollection?.items[0]

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
