// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

import { Text, Heading, Box, Flex } from '../ui'
import Icon from '../Icons'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// Components
import ImgMatch from '../ImgMatch'
import Symbol from '../Symbol'
import Wordmark from '../Wordmark'

// ___________________________________________________________________

const Year = () => {
  return new Date().getFullYear()
}

const HideAway = () => {
  return (
    <S.HideAway>
      <Box className="wallpaper" />
      <Flex className="footnote">
        <S.Logo>
          <Link to="/" aria-label="Back to home">
            <div className="symbol">
              <Symbol />
            </div>
            <div className="wordmark">
              <Wordmark />
            </div>
          </Link>
        </S.Logo>
        <Flex alignItems="center">
          <p>
            This project was supported by Grant No. 2018-TW-AX-0015 awarded by
            the Office on Violence Against Women, U.S. Department of Justice.
            The opinions, findings, conclusions, and recommendations expressed
            in this publication/program/exhibition are those of the author and
            do not necessarily reflect the views of the U.S. Department of
            Justice.
          </p>
        </Flex>
      </Flex>
    </S.HideAway>
  )
}

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Flex className="inner">
        <Flex className="panel">
          <Box width={[1, 1 / 2]}>
            <Heading as="h3">
              reach out anytime,
              <br />
              our advocates are
              <br />
              here for you.
            </Heading>
          </Box>
          <Flex width={[1, 1 / 2]}>
            <Box width={[1, 1 / 2]}>
              <h4>Social</h4>
              <ul>
                <li>facebook</li>
                <li>instagram</li>
                <li>twitter</li>
              </ul>
            </Box>
            <Box width={[1, 1 / 2]}>
              <h4>Contact</h4>
              <p>
                You can reach us at:
                <br />
                <a
                  href="mailto:info@cahuillaconsortium.org?subject=Contact from cahuillaconsortium.org"
                  aria-label="email us"
                >
                  info@cahuillaconsortium.org
                </a>
                <br />
                <a
                  href="tel:1 (800) 799-SAFE"
                  aria-label="call us 1 (800) 799-SAFE"
                >
                  1 (800) 799-SAFE
                </a>
              </p>
            </Box>
          </Flex>
        </Flex>

        <div className="bg">
          <ImgMatch
            src="bg-footer-humming-bird.jpg"
            altText="Humming bird and flowers"
          />
        </div>
      </Flex>
      <HideAway />
    </S.Footer>
  )
}

export default Footer
