// useContact hook
// Hook for querying site settings data

// _____________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// _____________________________________________________________

type Props = {
  contact: {
    edges: {
      node: {
        address: string
        email: string
        hotline: string
        telephone: string
      }
    }[]
  }
}

const useContact = () => {
  const data = useStaticQuery<Props>(graphql`
    query ContactQuery {
      contact: allSanityContact {
        edges {
          node {
            address
            email
            hotline
            telephone
          }
        }
      }
    }
  `)

  return data.contact.edges[0].node
}

export default useContact
