export default {
  name: 'moreWaysWeCanHelp',
  title: 'More ways we can help',
  type: 'document',
  liveEdit: false,
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'blockText'
    },
    {
      name: 'immediateSafety',
      title: 'Immediate safety',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'emergencyHousing',
      title: 'Emergency housing',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'transitionalHousing',
      title: 'Transitional housing',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
