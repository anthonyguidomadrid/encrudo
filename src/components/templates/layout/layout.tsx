import { ReactNode } from 'react'

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
  socialMediaCollection?: {
    items?: SocialMedia[] | null
  } | null
} | null
interface LayoutProps {
  children: ReactNode
  menuContent?: MenuItem[]
  assetContent?: AssetContent
}

export const Layout = ({
  children,
  menuContent,
  assetContent
}: LayoutProps) => {

  menuContent =
    menuContent &&
    menuContent.sort((a, b) => a?.indexOrder ?? 1 - (b?.indexOrder ?? 0))

  return (
    <>
      <Header
        menuContent={menuContent}
        logoLight={assetContent?.logoLight}
        logoDark={assetContent?.logoDark}
      />
      <div className="h-screen">{children}</div>
      <h1>Footer</h1>
    </>
  )
}
