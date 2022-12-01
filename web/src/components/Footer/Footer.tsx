// Footer:

// _____________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Heading, Box, Flex } from '../ui'

import * as S from './styles.scss'

// Components
import Symbol from '../Symbol'
import Wordmark from '../Wordmark'

import useContact from '../../hooks/useContact'

// _____________________________________________________________

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
            {/* <div className="wordmark">
              <Wordmark />
            </div> */}
          </Link>
        </S.Logo>
        <Flex alignItems="center">
          <p className="t--small">
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
  const contact = useContact()
  return (
    <S.Footer id="contact">
      <Flex className="inner">
        <Flex className="panel">
          <Box width={[1, 1, 1 / 2]} mb={[5, 0]}>
            <Heading as="h3" fontSize={4}>
              reach out anytime,
              <br />
              our advocates are
              <br />
              here for you.
            </Heading>
          </Box>
          <Flex width={[1, 1, 1 / 2]} flexWrap="wrap">
            <Box width={[1, 1 / 2]} mb={[5, 0]}>
              <h4>Social</h4>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/CahuillaConsortiumCCVAP"
                    target="_blank"
                  >
                    facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cahuilla_consortium"
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
                  href={`mailto:${contact.email}?subject=Contact from cahuillaconsortium.org`}
                  aria-label="email us"
                >
                  {contact.email}
                </a>
                <br />
                <br />
                <span>
                  24/7 HOTLINE:
                  <br />
                  <a
                    href={`hotline: ${contact.hotline}`}
                    aria-label={`call us: ${contact.hotline}`}
                  >
                    {contact.hotline}
                  </a>
                </span>
                <br />
                <br />
                <span>
                  OFFICE:
                  <br />
                  <a
                    href={`tel: ${contact.telephone}`}
                    aria-label={`call us: ${contact.telephone}`}
                  >
                    {contact.telephone}
                  </a>
                </span>
              </p>
            </Box>
          </Flex>
        </Flex>

        <div className="bg">
          <StaticImage
            src="../../images/bg-footer-humming-bird.jpg"
            alt="Humming bird and flowers"
            placeholder="blurred"
            objectPosition="50% 50%"
            objectFit="cover"
            layout="fullWidth"
            quality={60}
          />
        </div>
      </Flex>
      <HideAway />
    </S.Footer>
  )
}

export default Footer
