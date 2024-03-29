// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import billboard from './billboard'
import blockContent from './blockContent'
import blockText from './blockText'
import contact from './contact'
import faq from './faq'
import figure from './figure'
import file from './file'
import hiddenQuote from './hiddenQuote'
import howWeSeekToHelp from './howWeSeekToHelp'
import mainImage from './mainImage'
import moreWaysWeCanHelp from './moreWaysWeCanHelp'
import person from './person'
import policy from './policy'
import post from './post'
import postCategory from './postCategory'
import resource from './resource'
import serviceArea from './serviceArea'
import siteSettings from './siteSettings'
import whatWeDo from './whatWeDo'
import whatIsOurPurpose from './whatIsOurPurpose'
import whoWeAre from './whoWeAre'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    billboard,
    blockContent,
    blockText,
    contact,
    faq,
    figure,
    file,
    hiddenQuote,
    howWeSeekToHelp,
    mainImage,
    moreWaysWeCanHelp,
    person,
    policy,
    post,
    postCategory,
    resource,
    serviceArea,
    siteSettings,
    whatWeDo,
    whatIsOurPurpose,
    whoWeAre

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
