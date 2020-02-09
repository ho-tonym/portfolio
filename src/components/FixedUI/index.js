import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'
import { useLocation } from "react-router-dom";
import _ from 'lodash'
import { useStateValue } from "../../MyProvider"
import projectInfo from "../../assets/data/projectInfo"
// import

import { myConfig, overLayConfig } from "../utils"
import styles from './FixedUI.module.css'
import Number from './svgNumbers/number'
// import CloseBtn from '../shared/xButton'
import Email from '../shared/email'

const FixedUI = () => {
  const location = useLocation();
  const [textColor, setTextColor] = useState("white")
  const { animValue, setAnimValue, lineHeight, setLineHeight } = useStateValue();

  useEffect(() => {
    if (location.pathname === '/') {
      setTextColor("white")
      setLineHeight(5)
    }else{
      setTextColor("black")
    }
  }, [location.pathname])

  // useEffect(() => {
  //   toggleRLinks(false)
  // },[])

  const bLinkStyle = useSpring({
    bottom: animValue.rLinks ? "0rem" : "-2.5rem",
    config: overLayConfig,
    // delay: 100,
  })
  const rLinkStyle = useSpring({
    right: animValue.rLinks ? "0rem" : "-2.5rem",
    config: overLayConfig,
  })
  return (
    <>
      <section className={styles.rightLinks}>
        {location.pathname === '/'
          ? <Number color={textColor} />
          : null}
        <animated.div style={rLinkStyle}>
          <span className={styles.about} style={{ color: textColor }}
            onClick={() => setAnimValue({...animValue, overlay: true})}>
            <p>about</p></span>
          <span className={styles.work} style={{ color: textColor }}><p>work</p></span>
        </animated.div>
        <span className={styles.line} style={{ borderColor: textColor, height: `${lineHeight}rem` }} />
        <span className={styles.line} style={{ borderColor: "#b3b3b3", zIndex: 100 }} />
      </section>

      <animated.section className={styles.botLinks} style={bLinkStyle}>
        <a href="https://github.com/ho-tonym" style={{ color: textColor }}>
          <div>
            <p>
              github
            </p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/tony-ho-9984b971/" style={{ color: textColor }}>
          <div>
            <p>
              linkedin
            </p>
          </div>
        </a>
        <Email color={textColor} />
      </animated.section>
    </>
  )
}

export default FixedUI
