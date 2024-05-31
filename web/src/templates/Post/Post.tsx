// Post template

// _____________________________________________________________

// Libraries
import React, { useEffect } from 'react'
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
        banner={`${post.figure.asset.url}`}
        title={`${post.title} | ${siteSettings.title}`}
        desc={`${post.title}`}
        pathname={`/blog/${post.slug.current}`}
      />
      <S.Post>
        <div className="post__title">
          <Heading as="h1" mb={0} className="text--lg">
            {post.title}
          </Heading>

          <div className="post__title__meta">
            {post.publishedAt} | by: {post.author}
          </div>
        </div>

        <div className="post__body">
          <Box width={1} mb={5}>
            {post.figure && (
              <GatsbyImage
                image={post.figure.asset.gatsbyImageData}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={post.title}
                sizes="800px"
              />
            )}
          </Box>

          <div>
            {post._rawBody && <BlockContent blocks={post._rawBody || []} />}
          </div>

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
        </div>
      </S.Post>
      {/* Let's save this component for a future feature. */}
      {/* <PrevNext pageContext={pageContext} /> */}
    </>
  )
}

export default PostTemplate

// _____________________________________________________________
