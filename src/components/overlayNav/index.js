import React, { useState, useEffect }  from 'react'
// import PropTypes from 'prop-types'
import styles from './overlayNav.module.css'
import emailImg from '../../assets/images/email.png'
import { useSpring, useTrail, animated } from 'react-spring'
import useMeasure from './useMeasure'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Number from './svgNumbers/number'
import { useLocation } from "react-router-dom";
import projectInfo from "../../assets/data/projectInfo"
import { useStateValue } from "../../MyProvider"
import { myConfig, overLayConfig } from "../utils"
import Email from '../shared/email'
import _ from 'lodash'
import CloseBtn from './xButton'

const OverlayNav = () => {
  let location = useLocation();
  const [open, toggle] = useState(false)
  const [bind, { height }] = useMeasure()
  const animProps = useSpring({ height: open ? "100%" : "0%" })
  const [textColor, setTextColor] = useState("white")
  const { setProj, showRLinks, toggleRLinks } = useStateValue();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    toggleRLinks(false)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])

  const [lineHeight, setLineHeight] = useState(1)
  const body = document.body;
  const html = document.documentElement;
  const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
  const handleScroll = _.throttle(() => {
     const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
     const windowBottom = windowHeight + window.pageYOffset;
     // console.log(windowBottom/docHeight)
     // if (windowBottom >= docHeight) {
     //    console.log("bot")
     // } else {
     //   console.log("not bot")
     // }
     setLineHeight(5 * windowBottom/docHeight)
     // windowBottom/docHeight
     // console.log(windowBottom/docHeight);
   },200)

  useEffect(() => {
    if (location.pathname === '/'){
      setTextColor("white")
      setLineHeight(5)
    }else{
      setTextColor("black")
      handleScroll()
    }
  }, [location.pathname])

  const rLinkStyle = useSpring({
    right: showRLinks ? "0rem" : "-2.5rem",
    config: overLayConfig,
  })
  // const rLinkStyle = useSpring({
  //   transform: showRLinks ? "translate3d(0px, 0%, 0px)" : "translate3d(0px, -50%, 0px)",
  //   config: overLayConfig,
  // })

  const bLinkStyle = useSpring({
    bottom: showRLinks ? "0rem" : "-2.5rem",
    config: overLayConfig,
    // delay: 100,
    //if delay is not commented out, it doesnt move the bottom
    //bottomLink when i load botlink first
  })
// style={{bottom: "-2.5rem"}}

    // color: textColor

  // const [items, set] = useState([])
  //
  // const transitions = useTransition(items, null, {
  //   config: myConfig,
  //   from: { transform: "translate3d(0px, 50%, 0px)"},
  //   enter: { transform: "translate3d(0px, -45%, 0px)" },
  //   leave: { transform: "translate3d(0px, -130%, 0px)" }//diff animations to play before exiting
  // })
  //
// {color: textColor}

  return (
    <>
      <animated.div {...bind} className={styles.overlay} style={animProps}>
        {/*        <div className="trails-main" onClick={() => set(state => !state)}>
          <div>
            {trail.map(({ x, height, ...rest }, index) => (
              <animated.div
                key={textContent[index]}
                className="trails-text"
                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                <animated.div style={{ height }}>{textContent[index]}</animated.div>
              </animated.div>
            ))}
          </div>
        </div>*/}

        <CloseBtn
          toggle={toggle}
          color="#000"
          />
        <button type="button" className={styles.projects}>Projects</button>

        <div className={styles.overlayContent}>

          <h1 className="black">
            Hi my name is
            <span className="white"> Tony Ho</span>
            , a full stack web developer + graphic designer working in New York.
          </h1>
          <p>
            Interested in working together? Feel free to contact me for any project or collaboration.
          </p>
          <div id={styles.contact}>
            <img alt="email icon" src={emailImg} />
              <CopyToClipboard text={"ho.tonym@gmail.com"}>
                <p>ho.tonym@gmail.com</p>
              </CopyToClipboard>
          </div>
        </div>
      </animated.div>

      <section className={styles.rightLinks}>
        {location.pathname === '/'
          ? <Number color={textColor}/>
          : null}
        <animated.div style={rLinkStyle}>
          <span className={styles.about} style={{color: textColor}} onClick={() => toggle(true)}><p>about</p></span>
          <span className={styles.work} style={{color: textColor}}><p>work</p></span>
        </animated.div>
        <span className={styles.line} style={{borderColor: textColor, height: `${lineHeight}rem`}}/>
        <span className={styles.line} style={{borderColor: "#b3b3b3", zIndex: 100}}/>
      </section>

      <animated.section className={styles.botLinks} style={bLinkStyle}>
        <a href="https://github.com/ho-tonym" style={{color: textColor}}>
          <div>
            <p>
              github
            </p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/tony-ho-9984b971/" style={{color: textColor}}>
          <div>
            <p>
              linkedin
            </p>
          </div>
        </a>
        <Email color={textColor}/>
      </animated.section>
    </>
  )
}

export default OverlayNav

// <div className="trails-main" onClick={() => set(state => !state)}>
//   <div>
//     {trail.map(({ x, height, ...rest }, index) => {(
//       <animated.h1
//         key={textContent[index]}
//         className="trails-text"
//         style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
//         <animated.h1 style={{ height }}>{textContent[index]}</animated.h1>
//       </animated.h1>
//     )})}
//   </div>
// </div>
