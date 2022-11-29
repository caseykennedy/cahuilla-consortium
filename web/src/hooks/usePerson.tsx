// usePerson hook
// Hook for querying data

// _____________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// _____________________________________________________________

const usePerson = () => {
  const data = useStaticQuery<PersonShape>(graphql`
    query PersonQuery {
      people: allSanityPerson(sort: { fields: name, order: DESC }) {
        edges {
          node {
            avatar {
              asset {
                gatsbyImageData(
                  fit: FILLMAX
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                  aspectRatio: 0.85
                )
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
