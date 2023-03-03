// gatsby-node.js

// Blog Post Pages
async function createPostPages(graphql, actions) {
  // Get Gatsby‘s method for creating new pages
  const { createPage } = actions
  const PostTemplate = require.resolve('./src/templates/Post/index.ts')

  // Query Gatsby‘s GraphAPI for all the categories that come from Sanityd
  // You can query this API on http://localhost:8000/___graphql
  const result = await graphql(`
    {
      allSanityPost(sort: { order: DESC, fields: publishedAt }) {
        edges {
          node {
            author
            title
            _rawExcerpt
            _rawBody
            _id
            publishedAt(formatString: "MMMM DD, yyyy")
            slug {
              current
            }
            figure {
              asset {
                gatsbyImageData(
                  fit: FILLMAX
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                  aspectRatio: 1
                )
                url
              }
            }
            categories {
              title
            }
          }
          previous {
            slug {
              current
            }
            title
            _rawExcerpt
          }
          next {
            slug {
              current
            }
            title
            _rawExcerpt
          }
        }
      }
    }
  `)
  // If there are any errors in the query, cancel the build and tell us
  if (result.errors) throw result.errors
  // Let‘s gracefully handle if allSanity is null
  const postNodes = (result.data.allSanityPost || {}).edges || []

  postNodes
    // Loop through the category nodes, but don't return anything
    .forEach(({ node: node }) => {
      // Desctructure the id and slug fields for each category
      const { id, slug = {} } = node
      // If there isn't a slug, we want to do nothing
      if (!slug) return
      // Make the URL with the current slug
      const path = `/blog/${slug.current}`
      // Create the page using the URL path and the template file, and pass down the id
      // that we can use to query for the right category in the template file
      createPage({
        path,
        component: PostTemplate,
        context: {
          slug: node.slug.current,
          post: node
        }
      })
    })
}

// Create Pages
// _____________________________________________________________
exports.createPages = async ({ graphql, actions }) => {
  await createPostPages(graphql, actions)
}
