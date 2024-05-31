import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const Figure = (props: any) => {
  console.log(props)
  return (
    <figure>
      {props.asset && (
        <GatsbyImage
          {...props}
          alt={props.alt}
          width={500}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      )}
      <figcaption>{props.caption}</figcaption>
    </figure>
  )
}

export default Figure
