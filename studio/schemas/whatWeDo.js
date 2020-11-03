export default {
  name: 'whatWeDo',
  title: 'What We Do',
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
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockText'
    },
    {
      name: 'statement',
      title: 'Statement',
      type: 'string'
    },
    {
      name: 'figure',
      title: 'Figure',
      type: 'figure'
    },
    {
      name: 'whatWeHelpWith',
      title: 'What we can help you with',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'weCanHelp',
      title: 'We can help',
      type: 'blockContent'
    },
    {
      name: 'moreWaysWeCanHelp',
      title: 'More ways we can help',
      type: 'moreWaysWeCanHelp',
    },
    {
      name: 'serviceArea',
      title: 'Service area',
      type: 'serviceArea'
    }
  ]
}
