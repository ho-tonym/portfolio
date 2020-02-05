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
import { myConfig } from "../utils"
import Email from '../shared/email'

const OverlayNav = () => {
  let location = useLocation();
  const [open, toggle] = useState(false)
  const [bind, { height }] = useMeasure()
  const animProps = useSpring({ height: open ? "100%" : "0%" })
  const [textColor, setTextColor] = useState("white")
  const { setProj, isShowRLinks } = useStateValue();

  useEffect(() => {
    if (location.pathname === '/'){
      setTextColor("white")
    }else{
      setTextColor("black")
    }

    /// probably will make a page for each one. rather than this.
    // projectInfo.map((proj, index) => {
    //   if (location.pathname === `/${proj.link}`){
    //     setProj(index)
    //   }
    // })

  }, [location.pathname])

  // const textContent = ['Hi my name is ']
  // const config = { mass: 5, tension: 2000, friction: 200 }

  // const [text, set] = useState(true)
  // const trail = useTrail(textContent.length, {
  //   config,
  //   opacity: text ? 1 : 0,
  //   x: text ? 0 : 20,
  //   height: text ? 80 : 0,
  //   from: { opacity: 0, x: 20, height: 0 },
  // })
  const rLinkStyle = useSpring({
    right: isShowRLinks ? "0rem" : "-10rem",
    config: myConfig
  })

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

        <button type="button" className={styles.closeBtn} onClick={() => toggle(false)}>&times;</button>
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

      <animated.section className={styles.rightLinks} style={{color: textColor, rLinkStyle}}>
        {location.pathname === '/'
          ? <Number color={textColor}/>
          : null}
        <span className={styles.about} onClick={() => toggle(true)}><p>about</p></span>
        <span className={styles.line} style={{borderColor: textColor}}/>
        <span className={styles.work}><p>work</p></span>
      </animated.section>
      <section className={styles.botLinks}>
        <p>
          <a href="https://github.com/ho-tonym" style={{color: textColor}}>
            github
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/tony-ho-9984b971/" style={{color: textColor}}>
            linkedin
          </a>
        </p>
        <Email color={textColor}/>
      </section>
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
