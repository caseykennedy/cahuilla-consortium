// Post template

// ___________________________________________________________________

// Libraries
import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'

// Components
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import BlockContent from '../../components/BlockContent'

import PrevNext from './PrevNext'
import SocialShare from './SocialShare'

// UI
import { Box, Flex, Text, Heading } from '../../components/ui'

// Theme
import theme from '../../../config/theme'
import * as S from './styles.scss'

// Hooks
import useSiteSettings from '../../hooks/useSiteSettings'

// ___________________________________________________________________

const PostTemplate: React.FC<PostContextShape> = ({ pageContext }) => {
  const post = pageContext.post
  const siteSettings = useSiteSettings()
  return (
    <Layout>
      <SEO
        article={true}
        banner={`${post.figure.asset.fluid.src}`}
        title={`${post.title} | ${siteSettings.titleShort}`}
        desc={`${post.title}`}
        pathname={`/blog/${post.slug.current}`}
      />
      {/* <S.PageTitle /> */}
      <Box pt={5} px={4} pb={7}>
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
                by: {post.author}
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
      </Box>

      <PrevNext pageContext={pageContext} />
    </Layout>
  )
}

export default PostTemplate

// ___________________________________________________________________
