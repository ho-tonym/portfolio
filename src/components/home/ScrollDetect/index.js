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
// Since handler doesn't have access to component function scope this way, things that can be done there are very limited. A more conventional way is to make useEffect callback be executed only once (a counterpart to componentDidMount) and return a function from useEffect (a counterpart to componentWillUnmount). Since same handler is used in the scope of useEffect function, the problem disappears, but another problem is that handler cannot be used together with useState because handler that is used in useEffect is a function that was defined during initial render and isChecked will be always false in its scope. useRef can be used for this purpose instead (a demo):
