import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStateValue } from "../../../MyProvider"
import { useLocation } from "react-router-dom";
import _ from 'lodash'

const CustomScrollBar = () => {
  const { setLineHeight } = useStateValue();
  const location = useLocation();
  useEffect(() => {
    if (!location.pathname === '/')
      handleScroll()
  }, [location.pathname])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])

  const body = document.body;
  const html = document.documentElement;
  const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
  const handleScroll = _.throttle(() => {
     const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
     const windowBottom = windowHeight + window.pageYOffset;
     // console.log(windowBottom/docHeight)
     // if (windowBottom >= docHeight) {
     //    console.log("bot")
     // } else {
     //   console.log("not bot")
     // }
     setLineHeight(5 * windowBottom/docHeight)
     // windowBottom/docHeight
     // console.log(windowBottom/docHeight);
   },200)

  return (
    <></>
  )
}

export default CustomScrollBar
