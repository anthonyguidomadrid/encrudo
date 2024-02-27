import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Script from 'next/script'

import EmailIcon from '@icons/email.svg'
import LocationIcon from '@icons/location.svg'
import PhoneIcon from '@icons/phone.svg'
import { ContactForm } from '@src/components/contactForm'
import { SeoFields } from '@src/components/features/seo'
import { GoogleMap } from '@src/components/googleMap'
import { PageHeader } from '@src/components/pageHeader'
import { GTAG_TRACKING_ID } from '@src/helpers/gtag'
import { transformPhoneNumberToLink } from '@src/helpers/transformPhoneNumber'
import { client } from '@src/lib/client'
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations'

const Page = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { pageHeader, contactInformation, seo } = page
  const phoneNumberLink = transformPhoneNumberToLink(contactInformation?.phone)
  const contactClass = 'flex justify-center gap-2'

  return (
    <>
      {seo && <SeoFields {...seo} />}
      {
        <>
          <Script id="conversion-script">
            {`gtag('event', 'conversion', {'send_to': '${GTAG_TRACKING_ID}/SvDsCKq_ppYZEMGphqED'});`}
          </Script>
          <PageHeader {...pageHeader} />
          <div className="mx-5 flex flex-col gap-4">
            <p className={contactClass}>
              <PhoneIcon className="h-5" />
              <a className="no-underline" href={`tel:${phoneNumberLink}`}>
                {contactInformation?.phone}
              </a>
            </p>
            <div className={contactClass}>
              <EmailIcon className="h-5" />
              <a
                href={`mailto: ${contactInformation?.email}`}
                className="no-underline"
              >
                {contactInformation?.email}
              </a>
            </div>
            <div className={contactClass}>
              <LocationIcon className="h-5" />
              {contactInformation?.location}
            </div>
          </div>
          <ContactForm />
          <GoogleMap />
        </>
      }
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
