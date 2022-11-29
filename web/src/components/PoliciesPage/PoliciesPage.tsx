// PoliciesPage:

import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

import { Box, Flex, Text, Heading, Grid } from 'theme-ui'

// Components
import BlockContent from '../BlockContent'

// Hooks
import usePolicies from '../../hooks/usePolicies'
import useLoadMore from '../../hooks/useLoadMore'

// _____________________________________________________________

const Post: React.FC<{ post: ResourceQuery }> = ({ post }) => {
  return (
    <Flex className="post">
      <a href={post.asset.asset.url} className="inner" target="_blank">
        <Box>
          <Flex sx={{ justifyContent: 'flex-end', width: '100%' }}>
            <Box mb={4} sx={{ flex: 1 }}>
              {post.figure && (
                <GatsbyImage
                  image={post.figure.asset.gatsbyImageData}
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
                {post.isVideo ? 'Watch' : 'Download'}
              </a>
            </Text>
            {post.isVideo && <div className="is-video">Video</div>}
          </Flex>
        </Box>
      </a>
    </Flex>
  )
}

const PoliciesPage: React.FC = () => {
  const posts = usePolicies()
  const { list, handleLoadMore, hasMore } = useLoadMore(posts)
  return (
    <S.PoliciesPage>
      <Box>
        <Heading as="h3" mt={2} mb={3}>
          Policies
        </Heading>
      </Box>
      <Box>
        <Grid columns={[1, 2, 3]} gap={theme.space[4]}>
          {posts.map(({ node: post }, idx) => (
            <Post post={post} key={idx} />
          ))}
        </Grid>
      </Box>
    </S.PoliciesPage>
  )
}

export default PoliciesPage
