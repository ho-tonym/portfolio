import React from 'react'
import { useSpring, animated, useTrail } from 'react-spring'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './overlayNav.module.css'
import emailImg from '../../assets/images/email.png'
import useMeasure from './useMeasure'
import { useStateValue } from '../../MyProvider'
import CloseBtn from '../shared/CloseBtn'
import { myConfig, overLayAnim, copyAnimTime } from '../utils'

const OverlayNav = () => {
  const { animValue, setAnimValue, isOverlayTextShowing, overlayTextShowing, setCopied } = useStateValue();
  const [bind] = useMeasure()
  const animProps = useSpring({ height: animValue.overlay ? '100%' : '0%' })

  const copyAnim = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), copyAnimTime)
  }
  const list = (props, index) => {
    const array = [
      <animated.div key="0" className={styles.overflowHidden}>
        <animated.h1 className={`black ${styles.header}`} style={{ ...props }}>
          Hi my name is
          <span className="white"> Tony Ho</span>
          , a full stack web developer + designer working in New York.
        </animated.h1>
      </animated.div>,
      <animated.div key="1" className={styles.overflowHidden}>
        <animated.p style={{ ...props }}>
          The main area of my expertise is front and back end development using HTML, CSS, JS, to build responsive web apps.
          Interested in the web development space and working on ambitious projects.
          Religious league of legends / path of exile player, loves gummy candy, and able to plug in USB on first try.
        </animated.p>
      </animated.div>,
      <animated.div key="2" className={styles.overflowHidden}>
        <animated.p style={{ ...props }}>
          If any points above sounds appealing, don’t hesitate to contact me at my email:
        </animated.p>
      </animated.div>,
      <animated.div key="3" className={styles.overflowHidden} onClick={copyAnim}>
        <animated.div id={styles.contact} style={{ ...props }}>
          <img alt="email icon" src={emailImg} />
          <CopyToClipboard text="ho.tonym@gmail.com">
            <p>ho.tonym@gmail.com</p>
          </CopyToClipboard>
        </animated.div>
      </animated.div>,
    ]
    return(array[index])
  }

  const trail = useTrail(4, {
    config: myConfig,
    opacity: overlayTextShowing ? 1 : 0,
    transform: overlayTextShowing ? 'translate3d(0px, 0%, 0px)' : 'translate3d(0px, 100%, 0px)',
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
      {/* <button type="button" className={styles.projects}>Projects</button> */}
        <div className={styles.overlayContent}>
          {trail.map((props, index) => list(props, index))}
        </div>
      </animated.div>
    </>
  )
}

export default OverlayNav
