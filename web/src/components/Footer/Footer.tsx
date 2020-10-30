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
        <Flex alignItems="center" pr={6}>
          <p>
            This website was produced by the Cahuilla Consortium under grant
            award #2019-VO-GX-0010, awarded by the Office for Victims of Crime,
            Office of Justice Programs, U.S. Department of Justice. The
            opinions, findings, and conclusions or recommendations expressed on
            this website are those of the contributors and do not necessarily
            represent the official position or policies of the U.S. Department
            of Justice.
          </p>
        </Flex>
      </Flex>
    </S.HideAway>
  )
}

const Footer: React.FC = () => {
  return (
    <S.Footer id="contact">
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
                <li>
                  <a
                    href="//www.instagram.com/cahuilla_consortium"
                    target="_blank"
                  >
                    facebook
                  </a>
                </li>
                <li>
                  <a
                    href="//www.facebook.com/CahuillaConsortiumCCVAP"
                    target="_blank"
                  >
                    instagram
                  </a>
                </li>
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
                <br />
                <span>
                  <a href="tel:951-330-0479" aria-label="call us 951-330-0479">
                    1 (951) 330-0479
                  </a>{' '}
                  (hotline)
                </span>
                <br />
                <span>
                  <a href="tel: 951-763-5547" aria-label="call us 951-763-5547">
                    1 (951) 763-5547
                  </a>{' '}
                  (office)
                </span>
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
