import React, { useState, useEffect } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'
import { useLocation } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useStateValue } from '../../MyProvider'
import { myConfig, overLayAnim, copyAnimTime } from '../utils'
import styles from './FixedUI.module.css'
import Number from './svgNumbers/number'
import CopiedDiv from './copiedDiv'
import pdf from '../../assets/resume.pdf'

const FixedUI = () => {
  const location = useLocation();
  const [borderColor, setTextColor] = useState('white')
  const { currentProj, animValue, setAnimValue, lineHeight, setLineHeight, isOverlayTextShowing, setCopied } = useStateValue();

  const rLinkStyle = useSpring({
    right: animValue.rLinks ? '0rem' : '-2.5rem',
    config: myConfig,
  })

  const trail = useTrail(4, {
    config: myConfig,
    from: { transform: 'translate3d(0px, 100%, 0px)' },
    transform: animValue.rLinks ? 'translate3d(0px, 0%, 0px)' : 'translate3d(0px, 100%, 0px)',
  })

  const indicatorStyle = useSpring({
    left: currentProj === 0 ? '-0.6rem'
            : currentProj === 1 ? '1.4rem'
              : currentProj === 2 ? '3.6rem' : '-0.6rem',
    config: myConfig,
  })

  const copyAnim = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), copyAnimTime)
  }

  const list = (props, index) => {
    const array = [
      <animated.div key={index} className={styles.currentIndicator} style={{ ...props }}>
        <span />
        <span />
        <span />
        <animated.span className={styles.currentSelected} style={indicatorStyle} />
      </animated.div>,
      <animated.a href="https://github.com/ho-tonym" key={index} style={{ ...props }}>
        <div>
          <p>
            github
          </p>
        </div>
      </animated.a>,
      <animated.a href="https://www.linkedin.com/in/tony-ho-9984b971/" key={index} style={{ ...props }}>
        <div>
          <p>
            linkedin
          </p>
        </div>
      </animated.a>,
      <animated.div style={{ ...props }} key={index} onClick={copyAnim}>

        <CopyToClipboard
          style={{
            cursor: 'pointer',
            color: 'white',
          }}
          text="ho.tonym@gmail.com"
        >
          <p>email</p>
        </CopyToClipboard>
      </animated.div>,
    ]
    return(array[index])
  }

  useEffect(() => {
    if (location.pathname === '/') {
      setTextColor('white')
      setLineHeight(5)
    }else{
      setTextColor('black')
    }
  }, [location.pathname])


  return (
    <>
      <CopiedDiv />
      <section>
        <Number />
        <animated.span className={styles.about}
          onClick={() => {
            setAnimValue({ ...animValue, overlay: true })
            setTimeout(() => isOverlayTextShowing(true), overLayAnim.showTextDelay)
          }}
          style={rLinkStyle}
        >
          <p>about</p>
        </animated.span>
        <animated.span style={rLinkStyle} className={styles.resume}><a href={pdf} rel="noreferrer noopener" target="_blank"><p>resume</p></a></animated.span>
        <span className={styles.line} style={{ borderColor, height: `${lineHeight}rem` }} />
        <span className={styles.line} style={{ borderColor: '#b3b3b3', zIndex: 100 }} />
      </section>
      <animated.section className={styles.botLinks}>
        {trail.map((props, index) => list(props, index))}
      </animated.section>
    </>
  )
}

export default FixedUI
