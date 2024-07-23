import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav'

import { Header, HeaderProps } from './header'
import { Footer, FooterProps } from './footer'

interface LayoutProps {
  children: ReactNode
  headerProps: HeaderProps
  footerProps: FooterProps
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, headerProps, footerProps } = props
  return (
    <Box>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Header {...headerProps} />
      <Box as="main">
        <SkipNavContent />
        {children}
      </Box>
      <Footer {...footerProps} />
    </Box>
  )
}
