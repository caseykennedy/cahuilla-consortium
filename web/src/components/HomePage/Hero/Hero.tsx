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

type Props = {
  altText: string
  src: string
}

const Hero: React.FC<Props> = ({ altText, src }) => {
  return (
    <S.Hero>
      <ImgMatch src={src} altText={altText} />
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {
  altText: 'Friends comforting each others.',
  src: 'counseling.jpg'
}

Hero.defaultProps = defaultProps
