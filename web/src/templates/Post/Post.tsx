// Post template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Components
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Section from '../../components/Section'
import BlockContent from '../../components/BlockContent'

import PrevNext from './PrevNext'
import SocialShare from './SocialShare'

// UI
import { Box, Flex, Text, Heading } from '../../components/ui'

// Theme
import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const PostTemplate: React.FC<PostContextShape> = ({ pageContext }) => {
  const post = pageContext.post
  console.log('—————|— post —|—————')
  console.log(post)
  return (
    <Layout>
      <SEO
        pathname={`/implants/${post.slug.current}`}
        title={`${post.title} | `}
        desc={`${post.title} | `}
        individual={false}
      />
      <S.PageTitle />
      <Section pb={7}>
        <S.Post>
          <Box width={1} mb={5}>
            <Text as="p" fontSize={1} fontWeight={500}>
              {post.publishedAt}
            </Text>
          </Box>

          <Flex flexWrap="wrap">
            <Box width={1} mb={[6]}>
              {post.figure && (
                <Img
                  fluid={post.figure.asset.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={post.title}
                  className="article__img"
                />
              )}
            </Box>

            <Heading as="h4" mb={0} className="text--xxl">
              {post.title}
            </Heading>

            <Flex width={1} mb={5} justifyContent="space-between">
              <Text as="p" color="gray" fontSize={1} fontWeight={500}>
                by: {post.authors.name}
              </Text>
            </Flex>

            {post._rawBody && <BlockContent blocks={post._rawBody || []} />}

            <Flex
              color="gray"
              fontSize={1}
              fontWeight={500}
              width={1 / 2}
              className="social-share"
            >
              <p>Share:</p>
              <SocialShare name="facebook" slug={post.slug.current} />
              <SocialShare name="linkedIn" slug={post.slug.current} />
              <SocialShare name="twitter" slug={post.slug.current} />
            </Flex>
          </Flex>
        </S.Post>
      </Section>

      <PrevNext pageContext={pageContext} />
    </Layout>
  )
}

export default PostTemplate

// ___________________________________________________________________
