// Icon Component Styles:

// _____________________________________________________________

// Core
import styled from 'styled-components'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Begin Styles
// _____________________________________________________________

const IconStyle = styled.span<{ color?: string }>`
  font-size: 1rem;
  line-height: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  color: ${props => (props.color ? props.color : theme.colors.black)};

  svg {
    fill: ${props => (props.color ? props.color : theme.colors.black)};
    stroke: ${props => (props.color ? props.color : theme.colors.black)};
    transition: ${theme.transition.all};

    path {
      stroke: ${props => (props.color ? props.color : theme.colors.black)};
    }
  }
`

export default IconStyle
