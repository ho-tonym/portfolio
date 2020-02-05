import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './transitionOverlay.module.css'
import useMeasure from '../overlayNav/useMeasure'
import { useSpring, useTrail, animated } from 'react-spring'

const TransitionOverlay = (props) => {
  const [open, toggle] = useState(false)
  const [bind, { height }] = useMeasure()
  const animProps = useSpring({ height: open ? "100%" : "100%" })
  return (
    <animated.div {...bind} className={styles.overlay} style={animProps} className={styles.transitionOverlay}>

    </animated.div>
  )
}

export default TransitionOverlay
