import React, {useEffect, useState} from 'react'
import _ from 'lodash'
import { useSpring, animated, useTrail } from 'react-spring'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import styles from './overlayNav.module.css'
import emailImg from '../../assets/images/email.png'
import useMeasure from './useMeasure'
import { useStateValue } from "../../MyProvider"
import CloseBtn from '../shared/CloseBtn'
import { myConfig, overLayAnim } from '../utils'

const OverlayNav = () => {
  const { animValue, setAnimValue, isOverlayTextShowing, overlayTextShowing } = useStateValue();
  const [bind, { height }] = useMeasure()
  const animProps = useSpring({ height: animValue.overlay ? "100%" : "0%" })

  const list = (props, index) => {
    const array = [
        <animated.h1 className="black" key="0" style={{ ...props }}>
          Hi my name is
          <span className="white"> Tony Ho</span>
          , a full stack web developer + graphic designer working in New York.
        </animated.h1>
      ,
      <animated.p key="1" style={{ ...props }}>Interested in working together? Feel free to contact me for any project or collaboration.</animated.p>
      ,
        <animated.div key="2" id={styles.contact} style={{ ...props }}>
          <img alt="email icon" src={emailImg} />
          <CopyToClipboard text="ho.tonym@gmail.com">
            <p>ho.tonym@gmail.com</p>
          </CopyToClipboard>
        </animated.div>
      ,
    ]
    return(array[index])
  }

  const trail = useTrail(3, {
    config: myConfig,
    opacity: overlayTextShowing ? 1 : 0,
    transform: overlayTextShowing ? "translate3d(0px, 0%, 0px)" : "translate3d(0px, 25%, 0px)",
  })

  return (
    <>
      <animated.div {...bind} className={styles.overlay} style={animProps}>
        <CloseBtn
          animFunc={() => {
            isOverlayTextShowing(false)
            setTimeout(() => setAnimValue({ ...animValue, overlay: false }), overLayAnim.closeOverlayDelay)
          }}
          color="#000"
        />
        <button type="button" className={styles.projects}>Projects</button>

        <div className={styles.overlayContent}>
          {trail.map((props, index) => list(props, index))}
        </div>
      </animated.div>
    </>
  )
}

export default OverlayNav
