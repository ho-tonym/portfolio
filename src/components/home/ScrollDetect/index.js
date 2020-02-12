import React, {useEffect, useState, useRef, useCallback} from 'react'
import { useStateValue } from "../../../MyProvider"
import projectInfo from '../../../assets/data/projectInfo'
import _ from 'lodash'
// but i have to do it over elements

const ScrollDetect = () => {
  const [animIsPlaying, toggleAnim] = useState(false)
  const { currentProj, setProj, weAreTransitioning } = useStateValue();
  const projCountRef = useRef(currentProj)
  const animRef = useRef(animIsPlaying)
  animRef.current = animIsPlaying

  const transRef = useRef(weAreTransitioning)
  transRef.current = weAreTransitioning
  // let scrollY = 0;
  useEffect(() => {
    window.addEventListener('wheel', handleNavigation);
    return () => window.removeEventListener("wheel", handleNavigation);
  }, [])

//   window.addEventListener('wheel', e => handleNavigation(e));
// window.removeEventListener("wheel", e => handleNavigation(e));
//ONLY WORK IF STATE IS SET A CERTAIN WAY

// weAreTransitioning is diff from animisplaying
// - anim is playing breaks current isntance of function - which allows for scrolling again to next proj
// - wearetransitoning - prevents scrolling when we are trans(each proj page doesnt change when anim is playing)
  const scrollUp = _.debounce(() => {
    if (!transRef.current) {
      toggleAnim(false)
      if(projCountRef.current + 1 > projectInfo.length - 1) {
        setProj(0)
        projCountRef.current = 0
      }
      else {
        setProj(projCountRef.current + 1)
        projCountRef.current = projCountRef.current + 1
      }
    }
  }, 1000)

  const scrollDown = _.throttle(() => {
    if (!transRef.current) {
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
    }
  }, 1000)

  const handleNavigation = useCallback(e => {
    if(!animRef.current) {
      // if state in contextapi is allow scroll, then do this shit
      if(e.deltaY > 20) {
        toggleAnim(true)// exits the current iteration, which allows for a second scroll
        scrollUp()
      } else if(e.deltaY < -20) {
        toggleAnim(true)
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
