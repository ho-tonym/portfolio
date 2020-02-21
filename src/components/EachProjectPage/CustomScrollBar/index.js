import React, { useEffect } from 'react'
import _ from 'lodash'
import { useLocation } from 'react-router-dom';
import { useStateValue } from '../../../MyProvider'

const CustomScrollBar = () => {
  const { setLineHeight } = useStateValue();
  const location = useLocation();
  const body = document.body;
  const html = document.documentElement;
  const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
  const handleScroll = _.throttle(() => {
     const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
     const windowBottom = windowHeight + window.pageYOffset;
     setLineHeight(5 * (windowBottom / docHeight))
   }, 200)

  useEffect(() => {
    if (!(location.pathname === '/')) {
      handleScroll()
    }
  }, [location.pathname])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <></>
  )
}

export default CustomScrollBar
