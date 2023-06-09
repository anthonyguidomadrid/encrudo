import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import { Splide, SplideSlide } from 'splide-nextjs/react-splide'

import { SeoFields } from '@src/components/features/seo'
import { client } from '@src/lib/client'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'

const Page = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    title,
    description,
    mainPicture,
    picturesOfReferenceCollection,
    seo
  } = page

  const SLIDE_DIMENSION = {
    width: 384,
    height: 288
  }

  return (
    <>
      {seo && <SeoFields {...seo} />}
      {
        <>
          <div
            className={`h-screen bg-cover bg-no-repeat bg-center`}
            style={{
              backgroundImage: `url(${mainPicture?.url})`
            }}
          />
          <div className="text-center py-20 px-10">
            <h1>{title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(description?.json)
              }}
              className="max-w-2xl mx-auto pt-5"
            />
          </div>
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
