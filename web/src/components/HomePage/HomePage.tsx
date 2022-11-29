// HomePage:

// _____________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Sections
import Hero from './Hero'
import WhatWeDo from './WhatWeDo'
import WhoWeAre from './WhoWeAre'
import Faq from './Faq'
import Resources from './Resources'
import Blog from './Blog'

// _____________________________________________________________

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <WhatWeDo />
      <WhoWeAre />
      <Faq />
      {/* <Resources /> */}
      <Blog />
    </S.HomePage>
  )
}

export default HomePage
