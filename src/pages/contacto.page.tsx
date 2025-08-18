import { WebPageJsonLd } from 'next-seo'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Script from 'next/script'
import { useState } from 'react'
import { SeoFields } from '@src/components/features/seo'
import { GTAG_TRACKING_ID } from '@src/helpers/gtag'
import { client } from '@src/lib/client'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'
import { LINKS } from '@src/constants/links'
import dynamic from 'next/dynamic'

const PageHeader = dynamic(
  () =>
    import('@src/components/pageHeader/pageHeader').then(mod => mod.PageHeader),
  { ssr: false }
)
const ContactForm = dynamic(
  () =>
    import('@src/components/contactForm/contactForm').then(
      mod => mod.ContactForm
    ),
  { ssr: false }
)
const GoogleMap = dynamic(
  () =>
    import('@src/components/googleMap/googleMap').then(mod => mod.GoogleMap),
  { ssr: false }
)
const ContactInfoBlock = dynamic(
  () =>
    import('@src/components/contactInfoBlock/contactInfoBlock').then(
      mod => mod.ContactInfoBlock
    ),
  { ssr: false }
)

const ContactPage = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { pageHeader, contactInformation, seo, googleMapsUrl } = page
  const contactClass = 'flex items-start sm:justify-center gap-2'
  const [isContactMsgSent, setIsContactMsgSent] = useState(false)
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}${LINKS.CONTACT}`

  return (
    <>
      {seo && <SeoFields {...seo} />}
      <WebPageJsonLd
        name={pageHeader?.title}
        description={seo?.pageDescription}
        id={url}
        url={url}
      />
      {isContactMsgSent && (
        <Script id="conversion-script">
          {`gtag('event', 'conversion', {'send_to': '${GTAG_TRACKING_ID}/SvDsCKq_ppYZEMGphqED'});`}
        </Script>
      )}
      <section>
        <PageHeader {...pageHeader} />
        <ContactInfoBlock
          contactInformation={contactInformation}
          contactClass={contactClass}
        />
      </section>
      <section>
        <ContactForm
          isSuccess={isContactMsgSent}
          setIsSuccess={setIsContactMsgSent}
        />
      </section>
      <section>
        <GoogleMap googleMapsUrl={googleMapsUrl} />
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const data = await client.pageContact({
      locale
    })
    const page = data.pageContactCollection?.items[0]

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

export default ContactPage
