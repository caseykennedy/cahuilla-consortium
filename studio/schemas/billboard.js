import { MdPanorama } from 'react-icons/md'

export default {
  name: 'billboard',
  title: 'Billboard',
  type: 'document',
  icon: MdPanorama,
  liveEdit: false,

  fields: [
    {
      name: 'message',
      title: 'Message',
      type: 'string'
    },
  ]
}
