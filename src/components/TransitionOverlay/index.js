import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './transitionOverlay.module.css'
import useMeasure from '../overlayNav/useMeasure'
import { useSpring, useTrail, animated } from 'react-spring'
import { useStateValue } from "../../MyProvider"
import projectInfo from '../../assets/data/projectInfo'

const TransitionOverlay = () => {
  const { currentProj, transOverlay, setTrans } = useStateValue();
  const { backgroundColor
  } = projectInfo[currentProj]

  const [bind, { height }] = useMeasure()
  const animProps = useSpring({ height: transOverlay ? "100%" : "0%" })
  return (
    <animated.div {...bind} className={styles.overlay} style={{...animProps, backgroundColor}} className={styles.transitionOverlay} />
  )
}

export default TransitionOverlay
