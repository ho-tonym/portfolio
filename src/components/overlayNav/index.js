import React from 'react'
import _ from 'lodash'
import { useSpring, animated } from 'react-spring'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import styles from './overlayNav.module.css'
import emailImg from '../../assets/images/email.png'
import useMeasure from './useMeasure'
import { useStateValue } from "../../MyProvider"
import CloseBtn from '../shared/CloseBtn'

const OverlayNav = () => {
  const { animValue, setAnimValue } = useStateValue();
  const [bind, { height }] = useMeasure()
  const animProps = useSpring({ height: animValue.overlay ? "100%" : "0%" })

  return (
    <>
      <animated.div {...bind} className={styles.overlay} style={animProps}>
        <CloseBtn
          animValue={animValue}
          animFunc={() => setAnimValue({ ...animValue, overlay: false })}
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
            <CopyToClipboard text="ho.tonym@gmail.com">
              <p>ho.tonym@gmail.com</p>
            </CopyToClipboard>
          </div>
        </div>
      </animated.div>
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
