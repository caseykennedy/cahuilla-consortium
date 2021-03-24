import { MdApps } from 'react-icons/md'

export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: MdApps,
  fields: [
    {
      name: 'telephone',
      title: 'Telephone',
      type: 'string'
    },
    {
      name: 'hotline',
      title: 'Hotline',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    }
  ],
  liveEdit: false
}