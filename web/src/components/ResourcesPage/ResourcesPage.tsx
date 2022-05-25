// ResourcesPage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Theme + Styles
import theme from '../../../config/theme'
import * as S from './styles.scss'

import { Box, Flex, Text, Heading, Grid } from 'theme-ui'

// Components
import BlockContent from '../BlockContent'
import Icon from '../Icons'

// Hooks
import useResource from '../../hooks/useResource'
import useLoadMore from '../../hooks/useLoadMore'

// ___________________________________________________________________

const blogPath = 'blog'

const Post: React.FC<{ post: ResourceQuery }> = ({ post }) => {
  return (
    <Flex className="post">
      <a href={post.asset.asset.url} className="inner" target="_blank">
        <Box>
          {/* <Text as="p" mb={2}>
            {post.publishedAt}
          </Text> */}
          <Flex sx={{ justifyContent: 'flex-end', width: '100%' }}>
            <Box mb={4} sx={{ flex: 1 }}>
              {post.figure && (
                <Img
                  fluid={{
                    ...post.figure.asset.fluid,
                    aspectRatio: 1.5 / 1
                  }}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={post.title}
                  className="article__img"
                />
              )}
            </Box>
          </Flex>
          <Heading as="h4" mb={3} className="text--md">
            {post.title}
          </Heading>
        </Box>
        <Box>
          {post._rawExcerpt && <BlockContent blocks={post._rawExcerpt || []} />}
          <Flex
            sx={{
              mt: 4,
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Text as="span">
              <a href={post.asset.asset.url} target="_blank">
                Download
              </a>
            </Text>
            {post.isVideo && <div className="is-video">Video</div>}
          </Flex>
        </Box>
      </a>
    </Flex>
  )
}

const ResourcesPage: React.FC = () => {
  const posts = useResource()
  const { list, handleLoadMore, hasMore } = useLoadMore(posts)
  return (
    <S.ResourcesPage>
      <Box>
        <Heading as="h3" mt={2} mb={3}>
          Resources
        </Heading>
      </Box>
      <Box>
        <Grid
          columns={`repeat(auto-fit,minmax(300px,1fr))`}
          gap={theme.space[4]}
        >
          {posts.map(({ node: post }, idx) => (
            <Post post={post} key={idx} />
          ))}
        </Grid>
      </Box>
    </S.ResourcesPage>
  )
}

export default ResourcesPage
