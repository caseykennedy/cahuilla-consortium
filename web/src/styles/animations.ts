// Spring Animations

// ___________________________________________________________________

// Core
import { css, keyframes } from 'styled-components'
import { useSpring, config } from 'react-spring'

// ___________________________________________________________________

export const pageAnimation = useSpring({
  config: config.molasses,
  delay: 0,
  from: { opacity: 0 },
  to: { opacity: 1 }
})