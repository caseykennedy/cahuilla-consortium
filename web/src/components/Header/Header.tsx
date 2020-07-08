// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

import { Parallax } from 'react-scroll-parallax'

import { Box, Flex, Text, Heading } from '../../elements'

import Logo from '../Logo'
import Navigation from './Navigation'
import NavLinks from './NavLinks'
import Overlay from '../Overlay'
import Button from '../../elements/Button'
import Icon from '../Icons'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type HeaderShape = { mainRef: React.RefObject<HTMLDivElement> }

const Header: React.FC<HeaderShape> = ({ mainRef }) => {
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)

  return (
    <>
      <Overlay
        id="nav-root"
        root="root"
        isOpen={isNavOpen}
        handleExit={() => setNavOpen(false)}
        mainRef={mainRef}
        className={`nav-bg ${isNavOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}
      >
        <NavLinks handleExit={() => setNavOpen(false)} isNavOpen={isNavOpen} />
      </Overlay>

      <S.Header as="header">
        <S.Logo>
          <Link to="/" aria-label="Ortho Implant Co., back to home">
            {/* <Logo /> */}
            CCVAP
          </Link>
        </S.Logo>

        <S.Tools>
          <S.Toggle onClick={toggleModal} aria-label="toggle menu">
            <Icon name="hamburger" color="black" />
          </S.Toggle>

          <S.Nav>
            <Navigation />
          </S.Nav>
        </S.Tools>
        <Box p={5}>
          <Heading as="h1" className="t--uppercase">
            Keeping our people safe
          </Heading>
        </Box>
      </S.Header>
    </>
  )
}

export default Header
