import React from 'react'
import { useLocation } from 'react-router-dom'
import { useStateValue } from '../../../../MyProvider'

export const PreloaderExitAnim = (props) => {

  const location = useLocation();
  const { setSvgNumber } = useStateValue();
  if (location.pathname === '/') {
    setSvgNumber(['1'])
  }

  return(<></>)
}
