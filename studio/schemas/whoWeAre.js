export default {
  name: 'whoWeAre',
  title: 'Who we are',
  type: 'document',
  liveEdit: false,
  fields: [
    {
      name: 'billboard',
      title: 'Billboard',
      type: 'billboard'
    },
    {
      name: 'lead',
      title: 'Lead',
      type: 'blockText'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'advisoryCommitteeTitle',
      title: 'Advisory committee title',
      type: 'string'
    },
    {
      name: 'advisoryCommittee',
      title: 'Advisory committee',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'advisoryNote',
      title: 'Advisory note',
      type: 'blockText'
    },
    {
      name: 'whatIsOurPurpose',
      title: 'What is our purpose',
      type: 'whatIsOurPurpose'
    },
    {
      name: 'howWeSeekToHelp',
      title: 'How we seek to help',
      type: 'howWeSeekToHelp'
    }
  ]
}
