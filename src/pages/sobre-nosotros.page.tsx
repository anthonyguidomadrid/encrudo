import { WebPageJsonLd } from 'next-seo'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import { Splide, SplideSlide } from 'splide-nextjs/react-splide'

import { SeoFields } from '@src/components/features/seo'
import dynamic from 'next/dynamic'

const PageHeader = dynamic(
  () =>
    import('@src/components/pageHeader/pageHeader').then(mod => mod.PageHeader),
  { ssr: false }
)
import { client } from '@src/lib/client'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'
import { LINKS } from '@src/constants/links'

const Page = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { pageHeader, picturesOfReferenceCollection, seo } = page
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}${LINKS.ABOUT_US}`

  const SLIDE_DIMENSION = {
    width: 216,
    height: 288
  }

  return (
    <>
      {seo && <SeoFields {...seo} />}
      <WebPageJsonLd
        name={pageHeader?.title}
        description={seo?.pageDescription}
        id={url!}
        url={url!}
      />
      <PageHeader {...pageHeader} />
      <section aria-label="Galería de imágenes de referencia">
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
          {picturesOfReferenceCollection.items.map((slide, idx) => (
            <SplideSlide key={idx}>
              <Image
                src={slide.url}
                alt={slide.description}
                width={SLIDE_DIMENSION.width}
                height={SLIDE_DIMENSION.height}
              />
            </SplideSlide>
          ))}
        </Splide>
      </section>
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
