// Layout:

import React, { useRef } from 'react'

import HideWindow from './HideWindow'
import Header from '../Header'
import Footer from '../Footer'

import * as S from './styles.scss'

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
