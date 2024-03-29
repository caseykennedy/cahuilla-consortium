// useToggle
// toggle visibility

import { useState } from 'react'

// _____________________________________________________________

const useToggle = () => {
  const [isShowing, setIsShowing] = useState(false)

  function toggle() {
    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    toggle
  }
}

export default useToggle
