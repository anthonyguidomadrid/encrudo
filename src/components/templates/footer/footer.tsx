import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import { ContactContent, Logo, SocialMediaContent, MenuItem } from '../layout'

import { FooterWrapper } from '.'

import { NewsletterForm } from '@src/components/newsletterForm'
import { transformPhoneNumberToLink } from '@src/helpers/transformPhoneNumber'
import { getAddress } from '@src/helpers/getAddress'

export type FooterProps = {
  logo?: Logo
  contactContent: ContactContent | null
  socialMediaContent?: SocialMediaContent[]
  menuContent?: MenuItem[]
}

export const Footer = ({
  logo,
  contactContent,
  socialMediaContent,
  menuContent
}: FooterProps) => {
  const { t } = useTranslation()
  const phoneNumber = transformPhoneNumberToLink(contactContent?.phone)
  const linkClassName = 'no-underline hover:opacity-70'

  return (
    <footer role="contentinfo">
      <section className="text-primary">
        <div className="max-w-7xl m-auto px-10">
          <div className="flex justify-center py-10 border-t-2">
            <Image
              src={logo?.url ?? ''}
              alt={logo?.description ?? ''}
              width={75}
              height={75}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center pb-10">
            <FooterWrapper title={t('footer.contact')}>
              <address className="not-italic">
                {getAddress(contactContent)}
              </address>
              <Link
                href={`mailto: ${contactContent?.email}`}
                target={'_blank'}
                className={linkClassName}
                rel="noreferrer"
              >
                {contactContent?.email}
              </Link>
              <Link href={`tel:${phoneNumber}`} className={linkClassName}>
                {contactContent?.phone}
              </Link>
            </FooterWrapper>
            <FooterWrapper title={t('footer.link')}>
              <nav aria-label={t('footer.link')}>
                <ul className="list-none p-0 m-0 flex flex-col items-center gap-1">
                  {menuContent?.map((menuItem, index) => (
                    <li key={index}>
                      <Link
                        href={menuItem?.link ?? ''}
                        className={linkClassName}
                        scroll={!menuItem?.link?.includes('#')}
                      >
                        {menuItem?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </FooterWrapper>
            <FooterWrapper title={t('footer.social')}>
              <nav aria-label={t('footer.social')}>
                <ul className="list-none p-0 m-0 flex flex-col items-center gap-1">
                  {socialMediaContent?.map((menuItem, index) => (
                    <li key={index}>
                      <Link
                        href={menuItem?.link ?? ''}
                        target={'_blank'}
                        className={linkClassName}
                        rel="noreferrer"
                      >
                        {menuItem?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </FooterWrapper>
          </div>
          {contactContent?.displayNewsletter && (
            <div className="flex justify-center mt-6 mb-10 md:mb-6">
              <MailchimpSubscribe
                url={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
                render={({ subscribe, status }) => (
                  <NewsletterForm
                    status={status}
                    onValidated={formData => subscribe(formData)}
                  />
                )}
              />
            </div>
          )}
        </div>
      </section>
      <div className="bg-beige-light text-primary text-sm">
        <div className="max-w-7xl m-auto flex text-center flex-col md:flex-row gap-2 justify-between py-3 px-10">
          <p>
            {t('footer.copyright', {
              year: new Date().getFullYear(),
              siteName: contactContent?.websiteName
            })}
            <Link href="https://www.anthonyguido.dev/" rel="noreferrer" target='_blank'>
              {t('footer.developer')}
            </Link>
          </p>
          <div className="flex gap-5 justify-center">
            <Link href="/aviso-legal" rel="noreferrer" className="no-underline">
              {t('footer.legal')}
            </Link>
            <Link
              href="/proteccion-datos"
              rel="noreferrer"
              className="no-underline"
            >
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
