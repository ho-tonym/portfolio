import React from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './copiedDiv.module.css'
import { useStateValue } from '../../../MyProvider'
import { myConfig } from '../../utils'

const CopiedDiv = () => {
  const { copied } = useStateValue();
  const copiedProps = useSpring({
    transform: copied ? 'translate3d(0px, -20%, 0px)' : 'translate3d(0px, -100%, 0px)',
    config: myConfig,
  })

  return (
    <div className={styles.copiedContainer}>
      <animated.span style={copiedProps}>
        <p>Copied!</p>
      </animated.span>
    </div>
  )
}

export default CopiedDiv
