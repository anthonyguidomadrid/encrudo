import PhoneIcon from '@icons/phone.svg'
import EmailIcon from '@icons/email.svg'
import LocationIcon from '@icons/location.svg'
import { getAddress } from '@src/helpers/getAddress'
import { transformPhoneNumberToLink } from '@src/helpers/transformPhoneNumber'

interface ContactInfoBlockProps {
  contactInformation: any
  contactClass: string
}

export const ContactInfoBlock: React.FC<ContactInfoBlockProps> = ({
  contactInformation,
  contactClass
}) => {
  const phoneNumberLink = transformPhoneNumberToLink(contactInformation?.phone)
  return (
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
  )
}
