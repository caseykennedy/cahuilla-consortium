export default {
  name: 'whatIsOurPurpose',
  title: 'What Is Our Purpose',
  type: 'document',
  liveEdit: false,
  fields: [
    {
      name: 'mission',
      title: 'Mission',
      type: 'blockText'
    },
    {
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
