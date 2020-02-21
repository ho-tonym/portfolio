import React from 'react'

export const PreloaderExitAnim = ({ location, setSvgNumber }) => {
  if (location.pathname === '/') {
    setSvgNumber(['1'])
  }
  return(<></>)
}
