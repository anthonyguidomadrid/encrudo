import { WebPageJsonLd } from 'next-seo'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Script from 'next/script'
import { useState } from 'react'

import EmailIcon from '@icons/email.svg'
import LocationIcon from '@icons/location.svg'
import PhoneIcon from '@icons/phone.svg'
import dynamic from 'next/dynamic'
import { SeoFields } from '@src/components/features/seo'

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
import { GTAG_TRACKING_ID } from '@src/helpers/gtag'
import { transformPhoneNumberToLink } from '@src/helpers/transformPhoneNumber'
import { client } from '@src/lib/client'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'
import { LINKS } from '@src/constants/links'
import { getAddress } from '@src/helpers/getAddress'

const Page = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { pageHeader, contactInformation, seo } = page
  const phoneNumberLink = transformPhoneNumberToLink(contactInformation?.phone)
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
        <div className="mx-5 flex flex-col gap-4">
          <p className={contactClass}>
            <PhoneIcon className="h-5" />
            <a className="no-underline" href={`tel:${phoneNumberLink}`}>
              {contactInformation?.phone}
            </a>
          </p>
          <p className={contactClass}>
            <EmailIcon className="h-5" />
            <a
              href={`mailto:${contactInformation?.email}`}
              className="no-underline"
            >
              {contactInformation?.email}
            </a>
          </p>
          <p className={`${contactClass}`}>
            <LocationIcon className="h-5" />
            <address className="not-italic">
              {getAddress(contactInformation)}
            </address>
          </p>
        </div>
      </section>
      <section>
        <ContactForm
          isSuccess={isContactMsgSent}
          setIsSuccess={setIsContactMsgSent}
        />
      </section>
      <section>
        <GoogleMap />
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

export default Page
