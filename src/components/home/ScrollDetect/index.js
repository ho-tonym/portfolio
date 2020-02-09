import React, {useEffect, useState, useRef, useCallback} from 'react'
import { useStateValue } from "../../../MyProvider"
import projectInfo from '../../../assets/data/projectInfo'
import _ from 'lodash'
// but i have to do it over elements

const ScrollDetect = () => {
  const [animIsPlaying, toggleAnim] = useState(false)
  const { currentProj, setProj } = useStateValue();
  const projCountRef = useRef(currentProj)
  const animRef = useRef(animIsPlaying)

  // let scrollY = 0;
  useEffect(() => {
    window.addEventListener('wheel', handleNavigation);
    return () => window.removeEventListener("wheel", handleNavigation);
  }, [])

//   window.addEventListener('wheel', e => handleNavigation(e));
// window.removeEventListener("wheel", e => handleNavigation(e));
  const scrollUp = _.debounce(() => {
    animRef.current = false
    toggleAnim(false)
    if(projCountRef.current + 1 > projectInfo.length - 1) {
      setProj(0)
      projCountRef.current = 0
    }
    else {
      setProj(projCountRef.current + 1)
      projCountRef.current = projCountRef.current + 1
    }
  }, 1000)

  const scrollDown = _.debounce(() => {
    animRef.current = false
toggleAnim(false)
    if(projCountRef.current - 1 < 0) {
      setProj(projectInfo.length - 1)
      projCountRef.current = 2
    // console.log("in scrollDown:", projCountRef)
    }
    else {
      setProj(projCountRef.current - 1)
      projCountRef.current = projCountRef.current - 1
    // console.log("in scrollDown:", projCountRef)
    }

  }, 1000)

  const handleNavigation = useCallback(e => {
    if(!animRef.current){
      // if state in contextapi is allow scroll, then do this shit
      if(e.deltaY > 20){
        toggleAnim(true)
        animRef.current = true
        // scrollY = e.deltaY
        scrollUp()
      }
      else if(e.deltaY < -20){
        // scrollY = e.deltaY
        toggleAnim(true)
        animRef.current = true
        scrollDown()
      }
      // e.deltaY = 0
      // console.log(e.deltaY)
    }
  }, [])

  return (
    <></>
  )
}

export default ScrollDetect
