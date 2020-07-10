// NavLinks:
// Navigation links

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { useTransition } from 'react-spring'

import { Box, Text } from '../../ui'

import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type LinkProps = {
  item: any
  transition: any
  handleExitOnClick: () => any
}

type NavLinksProps = {
  handleExit: () => any
  isNavOpen: boolean
}

// ___________________________________________________________________

const NavLink = ({ item, transition, handleExitOnClick }: LinkProps) => {
  // console.log('—————|— Navigation —|—————')
  // console.log(item.subPage)

  return (
    <S.NavLink onClick={handleExitOnClick} style={transition}>
      <Box className="nav-mobile-sub">
        <Link to={item.link} className="nav-mobile__link">
          {item.name}
        </Link>
      </Box>
    </S.NavLink>
  )
}

const NavLinks: React.FC<NavLinksProps> = ({ handleExit, isNavOpen }) => {
  const navTransitions = useTransition(
    isNavOpen ? data : [],
    item => item.name,
    {
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      },
      trail: 160,
      unique: true
    }
  )
  return (
    <S.NavLinks>
      {navTransitions.map(({ item, key, props }) => (
        <NavLink
          key={key}
          transition={props}
          handleExitOnClick={() => handleExit()}
          item={item}
        />
      ))}
    </S.NavLinks>
  )
}

export default NavLinks

// ___________________________________________________________________

const data = [
  {
    name: 'what we do',
    link: '/what-we-do'
  },
  {
    name: 'who we are',
    link: '/who-we-are'
  },
  {
    name: 'volunteer',
    link: '/volunteer'
  },
  {
    name: 'blog',
    link: '/blog'
  },
  {
    name: 'contact',
    link: '/contact'
  }
]
