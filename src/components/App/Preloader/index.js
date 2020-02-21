import React, { useRef, useCallback, useState, useEffect } from 'react'
import { animated, useTransition } from 'react-spring'
import { useLocation } from 'react-router-dom'
import styles from './Preloader.module.css'
import { homeToProjectAnim } from '../../utils'
import projectInfo from '../../../assets/data/projectInfo'
import { useStateValue } from '../../../MyProvider'


const Preloader = () => {
  const location = useLocation();
  const { currentProj, setSvgNumber, setTrans } = useStateValue();
  const { backgroundColor } = projectInfo[currentProj]
  const [currentTitle, setTitle] = useState('')
  const ref = useRef([])
  const [isBlack, setColor] = useState(true)
  const colorStyle = { backgroundColor: isBlack ? '#000' : backgroundColor }

  const titleAnimation = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    ref.current.push(setTimeout(() => setTitle('TONY HO'), 500))// brings it back- (delay)when to bring it back
    ref.current.push(setTimeout(() => setTitle(''), 2700))// brings it back- (delay)when to bring it back
    setTimeout(() => setColor(false), 2700) // 4000 total
  }, [])

  useEffect(() => {
    titleAnimation()
    return () => {
      if (location.pathname === '/') {
        setSvgNumber(['1'])
      }
      setTrans(false)
    }
  }, [])


  const transitions = useTransition(currentTitle, null, {
    config: homeToProjectAnim.imageConfig,
    from: { transform: 'translate3d(0px, 100%, 0px)' },
    enter: { transform: 'translate3d(0px, 0%, 0px)' },
    leave: { transform: 'translate3d(0px, -100%, 0px)' },
  })

  return(
    <div className={styles.preloader} style={colorStyle}>
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
