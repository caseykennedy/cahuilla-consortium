// Layout:
// TODO: create hook for siteMetaData

// _____________________________________________________________

import React, { useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'

// Components
import HideWindow from './HideWindow'
import Header from '../Header'
import Footer from '../Footer'

import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import 'swiper/css/swiper.css'

// _____________________________________________________________

type LayoutProps = {
  children: React.ReactNode
  location: {
    pathname: string
  }
  // mainRef: React.RefObject<HTMLDivElement>
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line no-console
  console.log(
    `%c Site by CaseyKennedy.me `,
    `background: #52C3B8; color: #000000`
  )
  return (
    <>
      <S.Wrapper>
        <Header mainRef={mainRef} pathname={location?.pathname} />
        <S.Main ref={mainRef}>{children}</S.Main>
      </S.Wrapper>
      <Footer />
      <HideWindow />
    </>
  )
}

export default Layout
