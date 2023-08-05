import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import EmailIcon from '@icons/email.svg'
import LocationIcon from '@icons/location.svg'
import PhoneIcon from '@icons/phone.svg'
import { ContactForm } from '@src/components/contactForm'
import { SeoFields } from '@src/components/features/seo'
import { PageHeader } from '@src/components/pageHeader'
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
          <PageHeader {...pageHeader} />
          <div className="mx-5 mb-10 flex flex-col gap-4">
            <p className={contactClass}>
              <PhoneIcon className="h-5" />
              <a href={`tel:${phoneNumberLink}`}>{contactInformation?.phone}</a>
            </p>
            <div className={contactClass}>
              <EmailIcon className="h-5" />
              <a href={`mailto: ${contactInformation?.email}`}>
                {contactInformation?.email}
              </a>
            </div>
            <div className={contactClass}>
              <LocationIcon className="h-5" />
              {contactInformation?.location}
            </div>
          </div>
          <ContactForm />
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
