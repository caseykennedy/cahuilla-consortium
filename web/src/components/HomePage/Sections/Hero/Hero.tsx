// Hero Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useSpring, config } from 'react-spring'
import Img from 'gatsby-image/withIEPolyfill'
import { Parallax } from 'react-scroll-parallax'

import * as S from './styles.scss'
import { Box, Flex, AnimatedBox, Heading } from '../../../../elements'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

const Hero = () => {
  const fadeAnimation = useSpring({
    config: config.molasses,
    delay: 260,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <>
      <S.Hero>
        Herro
      </S.Hero>
    </>
  )
}

export default Hero
