import React, { useRef, useCallback, useState, useEffect } from 'react'
import { animated, useTransition } from 'react-spring'
import { useLocation } from 'react-router-dom'
import styles from './Preloader.module.css'
import { myConfig, homeToProjectAnim } from '../../utils'
import projectInfo from '../../../assets/data/projectInfo'
import { useStateValue } from '../../../MyProvider'


const Preloader = () => {
  const location = useLocation();
  useEffect(() => {
    titleAnimation()
    return () => {
      if (location.pathname === '/') {
        setSvgNumber(['1'])
      }
    }
  }, [])
  const { currentProj, setSvgNumber } = useStateValue();
  const { backgroundColor } = projectInfo[currentProj]
  const [currentTitle, setTitle] = useState("")
  const [isBlack, setColor] = useState(true)
  const ref = useRef([])
  const transitions = useTransition(currentTitle, null, {
    config: homeToProjectAnim.imageConfig,
    from: { transform: "translate3d(0px, 100%, 0px)" },
    enter: { transform: "translate3d(0px, 0%, 0px)" },
    leave: { transform: "translate3d(0px, -100%, 0px)" }
  })

  const titleAnimation = useCallback(() => {// function gets called multiple times
    ref.current.map(clearTimeout)
    ref.current = []
    ref.current.push(setTimeout(() => setTitle("TONY HO"), 500))// brings it back- (delay)when to bring it back
    ref.current.push(setTimeout(() => setTitle(""), 2700))// brings it back- (delay)when to bring it back
    setTimeout(() => setColor(false), 2700)
  }, [])

  return(
    <div className={styles.preloader} style={isBlack ? { backgroundColor: "#000" } : { backgroundColor }}>
      <span>
        {transitions.map(({ item: title, props, key }) => (
          <animated.h1 style={{ ...props }} key={key}>
            {title}
          </animated.h1>
        ))}
      </span>
    </div>
  )
}

export default Preloader
