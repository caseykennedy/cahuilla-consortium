// usePerson hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const usePerson = () => {
  const data = useStaticQuery<PersonShape>(graphql`
    query PersonQuery {
      people: allSanityPerson(sort: {fields: name, order: DESC}) {
        edges {
          node {
            avatar {
              asset {
                fluid(maxWidth: 300) {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
                }
              }
              crop {
                top
                right
                left
                bottom
              }
            }
            name
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  return data.people.edges
}

export default usePerson
