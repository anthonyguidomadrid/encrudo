import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import { LanguageSelector } from '../header'
import { ContactContent, Logo, SocialMediaContent, MenuItem } from '../layout'

import { FooterWrapper } from '.'
import { transformPhoneNumberToLink } from '@src/helpers/transformPhoneNumber'

export type FooterProps = {
  logo?: Logo
  contactContent?: ContactContent
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

  return (
    <>
      <section className="bg-beige-light text-primary">
        <div className="max-w-7xl m-auto px-5">
          <div className="flex justify-center py-10">
            <Image
              src={logo?.url ?? ''}
              alt={logo?.description ?? ''}
              width={75}
              height={75}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center pb-10">
            <FooterWrapper title={t('footer.contact')}>
              <span>{contactContent?.location}</span>
              <a href={`mailto: ${contactContent?.email}`}>
                {contactContent?.email}
              </a>
              <a href={`tel:${phoneNumber}`}>{contactContent?.phone}</a>
            </FooterWrapper>
            <FooterWrapper title={t('footer.link')}>
              {menuContent?.map((menuItem, index) => (
                <a key={index} href={menuItem?.link ?? ''}>
                  {menuItem?.name}
                </a>
              ))}
            </FooterWrapper>
            <FooterWrapper title={t('footer.social')}>
              {socialMediaContent?.map((menuItem, index) => (
                <a
                  key={index}
                  href={menuItem?.link ?? ''}
                  target={'_blank'}
                  rel="noreferrer"
                >
                  {menuItem?.name}
                </a>
              ))}
            </FooterWrapper>
          </div>
          <div className="flex justify-center py-2">
            <LanguageSelector />
          </div>
        </div>
      </section>
      <footer className="bg-grey-dark text-white text-sm">
        <div className="max-w-7xl m-auto flex text-center flex-col md:flex-row gap-2 justify-between p-3">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <p>
            <a
              href="https://anthonyguido.dev/"
              target={'_blank'}
              rel="noreferrer"
            >
              {t('footer.website')}
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
