import S from '@sanity/desk-tool/structure-builder'
import {
  MdPeople,
  MdViewQuilt,
  MdSettings,
  MdLibraryBooks,
  MdQuestionAnswer,
  MdViewList
} from 'react-icons/md'
import { GoFile } from 'react-icons/go'

const hiddenTypes = [
  'category',
  'companyInfo',
  'page',
  'person',
  'post',
  'project',
  'siteSettings'
]

export default () =>
  S.list()
    .title('CCVAP Content')
    .items([
      // Settings
      // _________________________________________________________________
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),

      // People
      // _________________________________________________________________
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People'))

        .icon(MdPeople),

      // Post Category
      // _________________________________________________________________
      S.listItem()
        .title('Post Categories')
        .schemaType('postCategory')
        .child(S.documentTypeList('postCategory').title('Post Category'))

        .icon(MdViewList),

      // Post
      // _________________________________________________________________
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Post'))

        .icon(MdLibraryBooks),

      // FAQs
      // _________________________________________________________________
      S.listItem()
        .title('FAQs')
        .schemaType('faq')
        .child(S.documentTypeList('faq').title('FAQ'))

        .icon(MdQuestionAnswer),

      // What we do
      // _________________________________________________________________

      S.listItem()
        .title('What We Do')
        .child(
          S.editor()
            .id('whatWeDo')
            .schemaType('whatWeDo')
            .documentId('whatWeDo')
        )
        .icon(MdViewQuilt),

      // What we do
      // _________________________________________________________________

      S.listItem()
        .title('Who We Are')
        .child(
          S.editor()
            .id('whoWeAre')
            .schemaType('whoWeAre')
            .documentId('whoWeAre')
        )
        .icon(MdViewQuilt),

      // End
      // _________________________________________________________________
    ])
