import React, {useEffect, useState} from 'react'
import _ from 'lodash'
import { useSpring, animated, useTrail } from 'react-spring'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import styles from './overlayNav.module.css'
import emailImg from '../../assets/images/email.png'
import useMeasure from './useMeasure'
import { useStateValue } from "../../MyProvider"
import CloseBtn from '../shared/CloseBtn'

const OverlayNav = () => {
  const { animValue, setAnimValue, isOverlayTextShowing, overlayTextShowing } = useStateValue();
  const [bind, { height }] = useMeasure()
  const animProps = useSpring({ height: animValue.overlay ? "100%" : "0%" })

  const list = ({ ...props }, index) => {
    const array = [
      <animated.h1 className="black" key={"1"} style={{ ...props }}>
        Hi my name is
        <span className="white"> Tony Ho</span>
        , a full stack web developer + graphic designer working in New York.
      </animated.h1>
    ,
    <animated.p key={"2"} style={{ ...props }}>Interested in working together? Feel free to contact me for any project or collaboration.</animated.p>,
      <animated.div key={"3"} id={styles.contact} style={{ ...props }}>
        <img alt="email icon" src={emailImg} />
        <CopyToClipboard text="ho.tonym@gmail.com">
          <p>ho.tonym@gmail.com</p>
        </CopyToClipboard>
      </animated.div>
    ,
  ]
  return(array[index])
}
  //
  // {cards.map((card, index) => (
  // 	<RatingsCard key={index} {...card} />
  // ))}

  const trail = useTrail(3, {
    opacity: overlayTextShowing ? 1 : 0,
    transform: overlayTextShowing ? "translate3d(0px, -45%, 0px)" : "translate3d(0px, 50%, 0px)",
    // from: { transform: "translate3d(0px, 50%, 0px)" }
  })
  // {list.map(item => <Spring from={{...}} to={{...}} render={item} />)}
  // return

  return (
    <>
      <animated.div {...bind} className={styles.overlay} style={animProps}>
        <CloseBtn
          animValue={animValue}
          animFunc={() => {
            setAnimValue({ ...animValue, overlay: false })
            isOverlayTextShowing(false)
          }}
          color="#000"
        />
        <button type="button" className={styles.projects}>Projects</button>

        <div className={styles.overlayContent}>
          {trail.map(({ ...props }, index) => list({ ...props }, index))}
        </div>
      </animated.div>
    </>
  )
}
// list({...rest }))}
export default OverlayNav

// <animated.div {...bind} className={styles.overlay} style={animProps}>
//   <CloseBtn
//     animValue={animValue}
//     animFunc={() => setAnimValue({ ...animValue, overlay: false })}
//     color="#000"
//   />
//   <button type="button" className={styles.projects}>Projects</button>
//
//   <div className={styles.overlayContent}>
//
//     <h1 className="black">
//       Hi my name is
//       <span className="white"> Tony Ho</span>
//       , a full stack web developer + graphic designer working in New York.
//     </h1>
//     <p>
//       Interested in working together? Feel free to contact me for any project or collaboration.
//     </p>
//     <div id={styles.contact}>
//       <img alt="email icon" src={emailImg} />
//       <CopyToClipboard text="ho.tonym@gmail.com">
//         <p>ho.tonym@gmail.com</p>
//       </CopyToClipboard>
//     </div>
//   </div>
// </animated.div>


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
