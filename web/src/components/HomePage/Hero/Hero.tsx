// Hero Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useSpring, config } from 'react-spring'
import Img from 'gatsby-image/withIEPolyfill'

import ImgMatch from '../../ImgMatch'

import * as S from './styles.scss'
import { Box, Flex, AnimatedBox, Heading } from '../../ui'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Hero = () => {
  const fadeAnimation = useSpring({
    config: config.molasses,
    delay: 260,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <S.Hero>
      <ImgMatch
        src="counseling.jpg"
        altText="Friends comforting each others."
      />
    </S.Hero>
  )
}

export default Hero
