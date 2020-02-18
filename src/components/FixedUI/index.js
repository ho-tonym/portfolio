import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'
import { useLocation } from "react-router-dom";
import _ from 'lodash'
import { useStateValue } from "../../MyProvider"
import projectInfo from "../../assets/data/projectInfo"
import {CopyToClipboard} from 'react-copy-to-clipboard';

import { myConfig, overLayAnim } from "../utils"
import styles from './FixedUI.module.css'
import Number from './svgNumbers/number'
// import CloseBtn from '../shared/xButton'
// import Email from '../shared/email'

const FixedUI = () => {
  const location = useLocation();
  const [borderColor, setTextColor] = useState("white")
  const { animValue, setAnimValue, lineHeight, setLineHeight, isOverlayTextShowing } = useStateValue();

  useEffect(() => {
    if (location.pathname === '/') {
      setTextColor("white")
      setLineHeight(5)
    }else{
      setTextColor("black")
    }
  }, [location.pathname])

  const rLinkStyle = useSpring({
    right: animValue.rLinks ? "0rem" : "-2.5rem",
    config: myConfig,
  })

  const list = (props, index) => {
    const array = [
      <animated.a href="https://github.com/ho-tonym" key={index} style={{ ...props }}>
        <div>
          <p>
            github
          </p>
        </div>
      </animated.a>,
      <animated.a href="https://www.linkedin.com/in/tony-ho-9984b971/" key={index}style={{ ...props }}>
        <div>
          <p>
            linkedin
          </p>
        </div>
      </animated.a>,
      <animated.div style={{ ...props }} key={index}>
        <CopyToClipboard
          style={{
            cursor: "pointer",
            color: "white"
          }}
          text={"ho.tonym@gmail.com"}
        >
          <p>email</p>
        </CopyToClipboard>
      </animated.div>
    ]
    return(array[index])
  }

  const trail = useTrail(3, {
    config: myConfig,
    from: { transform: "translate3d(0px, 100%, 0px)"},
    transform: animValue.rLinks ? "translate3d(0px, 0%, 0px)" : "translate3d(0px, 100%, 0px)",
  })

  return (
    <>
      <section className={styles.rightLinks}>
        <animated.div style={rLinkStyle}>
          <Number />
          <span className={styles.about}
            onClick={() => {
              setAnimValue({...animValue, overlay: true})
              setTimeout(() => isOverlayTextShowing(true), overLayAnim.showTextDelay)
            }}>
            <p>about</p>
          </span>
          <span className={styles.work}><p>work</p></span>
        </animated.div>
        <span className={styles.line} style={{ borderColor, height: `${lineHeight}rem` }} />
        <span className={styles.line} style={{ borderColor: "#b3b3b3", zIndex: 100 }} />
      </section>

      <animated.section className={styles.botLinks}>
        {trail.map((props, index) => list(props, index))}
      </animated.section>
    </>
  )
}

export default FixedUI

// {location.pathname === '/'
//   ? <Number color={borderColor} />
//   : null}
