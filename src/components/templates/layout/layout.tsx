import { ReactNode } from 'react'

import { Footer } from '../footer'
import { Header } from '../header'

export type SocialMedia = {
  url?: string | null
  description?: string | null
} | null

export type Logo = {
  url?: string | null
  description?: string | null
} | null

export type MenuItem = {
  name?: string | null
  link?: string | null
  isProject?: boolean | null
  indexOrder?: number | null
} | null

export type AssetContent = {
  logoLight?: Logo
  logoDark?: Logo
  logoSmall?: Logo
} | null

export type ContactContent = {
  location?: string | null
  email?: string | null
  phone?: string | null
} | null

export type SocialMediaContent = {
  name?: string | null
  link?: string | null
} | null

interface LayoutProps {
  children: ReactNode
  menuContent?: MenuItem[]
  assetContent?: AssetContent
  contactContent?: ContactContent
  socialMediaContent?: SocialMediaContent[]
}

export const Layout = ({
  children,
  menuContent,
  assetContent,
  contactContent,
  socialMediaContent
}: LayoutProps) => (
  <>
    <Header
      menuContent={menuContent}
      logoLight={assetContent?.logoLight}
      logoDark={assetContent?.logoDark}
    />
    <main id="main-content" role="main" tabIndex={-1}>
      {children}
    </main>
    <Footer
      logo={assetContent?.logoSmall}
      contactContent={contactContent}
      menuContent={menuContent}
      socialMediaContent={socialMediaContent}
    />
  </>
)
