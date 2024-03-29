// Previous / Next pre-footer
// TODO: button bg image

// _____________________________________________________________

import React from 'react'

// Components
import Icon from '../../../components/Icons'

// Theme
import theme from '../../../gatsby-plugin-theme-ui'

// _____________________________________________________________

const SocialShare: React.FC<{ name: string; slug: string }> = ({
  name,
  slug
}) => {
  const shareSlug = `https://www.cahuillaconsortium.org/blog/${slug}`

  switch (name) {
    case 'facebook':
      return (
        <a
          href={`//www.facebook.com/sharer.php?u=${shareSlug}`}
          target="_blank"
        >
          <Icon name={name} />
        </a>
      )
    case 'twitter':
      return (
        <a
          href={`//twitter.com/share?url=${shareSlug}`}
          target="_blank"
        >
          <Icon name={name} />
        </a>
      )
    case 'linkedIn':
      return (
        <a
          href={`//www.linkedin.com/shareArticle?mini=true&url=${shareSlug}`}
          target="_blank"
        >
          <Icon name={name} />
        </a>
      )
    default:
      return null
  }
}

export default SocialShare
