import { ContactContent } from '@src/components/templates/layout'

export const getAddress = (
  contactInformation: ContactContent | null
): string => {
  if (!contactInformation) {
    return ''
  }

  return [
    contactInformation?.streetAddress,
    contactInformation?.postalCode,
    contactInformation?.addressLocality,
    contactInformation?.addressRegion,
    contactInformation?.addressCountry
  ]
    .filter(Boolean)
    .join(', ')
}
