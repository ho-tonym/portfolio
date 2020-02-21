import React from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './transitionOverlay.module.css'
import useMeasure from '../overlayNav/useMeasure'
import { useStateValue } from '../../MyProvider'
import projectInfo from '../../assets/data/projectInfo'

const TransitionOverlay = () => {
  const { currentProj, transOverlay } = useStateValue();
  const { backgroundColor,
  } = projectInfo[currentProj]

  const [bind] = useMeasure()
  const animProps = useSpring({ height: transOverlay ? '100%' : '0%' })
  return (
    <animated.div {...bind}
      style={{ ...animProps, backgroundColor }}
      className={styles.transitionOverlay}
    />
  )
}

export default TransitionOverlay
