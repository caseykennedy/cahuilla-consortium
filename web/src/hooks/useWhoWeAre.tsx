// useWhoWeAre hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

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
