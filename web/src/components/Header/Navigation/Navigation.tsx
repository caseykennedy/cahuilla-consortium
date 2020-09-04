// Navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Libraries
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// UI
import { Box } from '../../ui'

// ___________________________________________________________________

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

// ___________________________________________________________________

const data = [
  {
    name: 'what we do',
    link: '/#what'
  },
  {
    name: 'who we are',
    link: '/#who'
  },
  {
    name: 'FAQ',
    link: '/#faq'
  },
  {
    name: 'blog',
    link: '/#blog'
  },
  {
    name: 'contact',
    link: '/#contact'
  }
]
