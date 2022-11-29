// Navigation

// _____________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Libraries
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box } from '../../ui'

import data from '../nav.json'

// _____________________________________________________________

const Navigation = () => {
  return (
    <S.Nav>
      {data.map((item, idx) => (
        <Box className="nav-link" key={idx}>
          <Link
            to={item.link}
            className="nav-link__title"
            activeClassName="active"
            aria-label="Jump to section"
          >
            {item.name}
          </Link>
        </Box>
      ))}
    </S.Nav>
  )
}

export default Navigation
