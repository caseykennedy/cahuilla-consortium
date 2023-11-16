// NavLinks:
// Navigation links

// _____________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { useTransition } from 'react-spring'

import * as S from './styles.scss'

import data from '../nav.json'

// _____________________________________________________________

type LinkProps = {
  item: any
  transition: any
  handleExitOnClick: () => any
}

type NavLinksProps = {
  handleExit: () => any
  isNavOpen: boolean
}

// _____________________________________________________________

const NavLink = ({ item, transition, handleExitOnClick }: LinkProps) => {
  return (
    <S.NavLink onClick={handleExitOnClick} style={transition}>
      <Link to={item.link} className="nav-mobile__link">
        {item.name}
      </Link>
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
      trail: 80,
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
