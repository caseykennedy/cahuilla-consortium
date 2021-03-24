import { MdApps } from 'react-icons/md'

export default {
  name: 'hiddenQuote',
  title: 'Hidden Quote',
  type: 'document',
  icon: MdApps,
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text'
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string'
    }
  ],
  liveEdit: false
}
