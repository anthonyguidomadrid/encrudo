import { Flex, useTheme } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { Footer } from '../footer'
import { Header } from '../header'

export type Logo = {
  url: string
  description: string
}

export type MenuItem = {
  name: string
  url: string
  isProject: boolean
  isCta: boolean
}

export type AssetContent = {
  logo: Logo
  socialMediaCollection: {
    items: {
      url: string
      description: string
    }[]
  }
}
interface LayoutProps {
  children: ReactNode
  menuContent: MenuItem[]
  assetContent: AssetContent
}

export const Layout = ({
  children,
  menuContent,
  assetContent
}: LayoutProps) => {
  const router = useRouter()
  const theme = useTheme()

  const isHomePage = router.pathname === '/'

  return (
    <>
      <Header
        borderBottom={isHomePage ? '' : '1px'}
        borderColor={isHomePage ? null : theme.f36.gray200}
        logo={assetContent.logo}
        menuItems={menuContent}
      />
      <Flex
        flexGrow="1"
        flexDirection="column"
        width="100%"
        as="main"
        pb={{ base: 8, lg: 12 }}
      >
        {children}
      </Flex>
      <Footer />
    </>
  )
}
