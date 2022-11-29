// useWhoWeAre hook
// Hook for querying data

// _____________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// _____________________________________________________________

type Props = {
  whoWeAre: {
    edges: {
      node: {
        id: string
        _rawAdvisoryNote: string
        _rawBody: string
        _rawLead: string
        advisoryCommittee: string[]
        advisoryCommitteeTitle: string
        billboard: {
          message: string
        }
        howWeSeekToHelp: {
          _rawAdvocacy: string
        }
        whatIsOurPurpose: {
          _rawMission: string
          values: string[]
        }
      }
    }[]
  }
}

const useWhoWeAre = () => {
  const data = useStaticQuery<Props>(graphql`
    query WhoWeAreQuery {
      whoWeAre: allSanityWhoWeAre {
        edges {
          node {
            id
            _rawAdvisoryNote
            _rawBody
            _rawLead
            advisoryCommittee
            advisoryCommitteeTitle
            billboard {
              message
            }
            howWeSeekToHelp {
              _rawAdvocacy
            }
            whatIsOurPurpose {
              _rawMission
              values
            }
          }
        }
      }
    }
  `)

  return data.whoWeAre.edges[0].node
}

export default useWhoWeAre
