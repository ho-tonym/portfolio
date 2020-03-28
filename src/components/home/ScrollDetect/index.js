import React, { useEffect, useState, useRef, useCallback } from 'react'
import _ from 'lodash'
import { useStateValue } from '../../../MyProvider'
import projectInfo from '../../../assets/data/projectInfo'

const ScrollDetect = () => {
  const [animIsPlaying, toggleAnim] = useState(false)
  const { currentProj, setProj, weAreTransitioning } = useStateValue();
  const projCountRef = useRef(currentProj)
  const animRef = useRef(animIsPlaying)
  animRef.current = animIsPlaying

  const transRef = useRef(weAreTransitioning)
  transRef.current = weAreTransitioning

  const scrollUp = _.throttle(() => {
    if (!transRef.current && animRef.current) {
      if(projCountRef.current + 1 > projectInfo.length - 1) {
        setProj(0)
        projCountRef.current = 0
      } else {
        setProj(projCountRef.current + 1)
        projCountRef.current++
      }
      setTimeout(() => toggleAnim(false), 1000)
    }
  }, 1000)

  const scrollDown = _.throttle(() => {
    if (!transRef.current && animRef.current) {
      if(projCountRef.current - 1 < 0) {
        setProj(projectInfo.length - 1)
        projCountRef.current = 2
      } else {
        setProj(projCountRef.current - 1)
        projCountRef.current--
      }
      setTimeout(() => toggleAnim(false), 1000)
    }
  }, 1000)

  const handleNavigation = useCallback(e => {
    if(!animRef.current) {
      if(e.deltaY > 20) {
        toggleAnim(true)
        scrollUp()
      } else if(e.deltaY < -20) {
        toggleAnim(true)
        scrollDown()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.addEventListener('wheel', handleNavigation);
    return () => window.removeEventListener('wheel', handleNavigation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <></>
  )
}

export default ScrollDetect
