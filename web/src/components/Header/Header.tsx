// Header:
// Site Header with logo

// _____________________________________________________________

import React, { useRef, useState } from 'react'
import { Link } from 'gatsby'

import Symbol from '../Symbol'
import Wordmark from '../Wordmark'
import Navigation from './Navigation'
import NavLinks from './NavLinks'
import Portal from '../Portal'
import Overlay from '../Overlay'
import Button from '../ui/Button'
import Icon from '../Icons'

import { Flex } from '../ui'

import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// _____________________________________________________________

type HeaderShape = {
  mainRef: React.RefObject<HTMLDivElement>
  pathname?: string
}

const Header: React.FC<HeaderShape> = ({ mainRef, pathname }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const exitRef = useRef<HTMLDivElement>(null)
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)
  const isIndex = pathname === '/'

  return (
    <>
      <Portal
        id="nav-root"
        root="main-root"
        isOpen={isNavOpen}
        handleExit={() => setNavOpen(false)}
        scrollRef={scrollRef}
        mainRef={mainRef}
        exitRef={exitRef}
      >
        <Overlay
          className={`nav-bg ${isNavOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}
        >
          <NavLinks
            handleExit={() => setNavOpen(false)}
            isNavOpen={isNavOpen}
          />
        </Overlay>
      </Portal>

      <S.Header as="header" px={[4, 5]} isIndex={!isIndex}>
        <S.Logo>
          <Link to="/" aria-label="Back to home">
            <Flex className="symbol">
              <Symbol />
            </Flex>
            <Flex className="wordmark">
              <Wordmark />
            </Flex>
          </Link>
        </S.Logo>

        <S.Tools>
          <S.Toggle onClick={toggleModal} aria-label="Toggle menu">
            <Icon name="hamburger" color="black" />
          </S.Toggle>

          <Navigation />
        </S.Tools>
      </S.Header>
    </>
  )
}

export default Header
