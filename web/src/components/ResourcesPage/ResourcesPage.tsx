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
          <Heading as="h4" className="text--md">
            {post.title}
          </Heading>
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
        </Box>
        <Box>
          {post._rawExcerpt && <BlockContent blocks={post._rawExcerpt || []} />}
          <Text as="span" mt={4}>
            <a href={post.asset.asset.url} target="_blank">
              Download
            </a>
          </Text>
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
      <Flex>
        <Grid
          columns={`repeat(auto-fit,minmax(300px,1fr))`}
          gap={theme.space[4]}
        >
          {posts.map(({ node: post }, idx) => (
            <Post post={post} key={idx} />
          ))}
        </Grid>
      </Flex>
    </S.ResourcesPage>
  )
}

export default ResourcesPage
