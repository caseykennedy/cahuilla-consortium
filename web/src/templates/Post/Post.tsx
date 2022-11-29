// Post template

// _____________________________________________________________

// Libraries
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// Components
import SEO from '../../components/SEO'
import BlockContent from '../../components/BlockContent'

import SocialShare from './SocialShare'

// UI
import { Box, Flex, Text, Heading } from '../../components/ui'

// Theme
import * as S from './styles.scss'

// Hooks
import useSiteSettings from '../../hooks/useSiteSettings'

// _____________________________________________________________

const PostTemplate: React.FC<PostContextShape> = ({ pageContext }) => {
  const post = pageContext.post
  const siteSettings = useSiteSettings()
  return (
    <>
      <SEO
        article={true}
        banner={`${post.figure.asset.gatsbyImageData}`}
        title={`${post.title} | ${siteSettings.titleShort}`}
        desc={`${post.title}`}
        pathname={`/blog/${post.slug.current}`}
      />
      {/* <S.PageTitle /> */}
      <Box pt={5} px={4} pb={7}>
        <S.Post>
          <Box width={1} mb={5}>
            <Heading as="h1" mb={0} className="text--xl">
              {post.title}
            </Heading>

            <Flex width={1} mb={5} justifyContent="space-between">
              <Text as="p" fontWeight={500}>
                {post.publishedAt} | by: {post.author}
              </Text>
            </Flex>
          </Box>

          <Flex flexWrap="wrap">
            <Box width={1} mb={[6]}>
              {post.figure && (
                <GatsbyImage
                  image={post.figure.asset.gatsbyImageData}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={post.title}
                />
              )}
            </Box>

            {post._rawBody && <BlockContent blocks={post._rawBody || []} />}

            <Flex
              color="gray"
              alignItems="center"
              fontSize={1}
              fontWeight={500}
              width={1 / 2}
              className="social-share"
            >
              <Heading as="h4" mb={0}>
                Share:
              </Heading>
              <SocialShare name="facebook" slug={post.slug.current} />
              <SocialShare name="linkedIn" slug={post.slug.current} />
              <SocialShare name="twitter" slug={post.slug.current} />
            </Flex>
          </Flex>
        </S.Post>
      </Box>

      {/* <PrevNext pageContext={pageContext} /> */}
    </>
  )
}

export default PostTemplate

// _____________________________________________________________
