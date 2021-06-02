import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import { useSpring, animated, useTransition } from 'react-spring'
import styles from './project.module.css'
import projectInfo from '../../../assets/data/projectInfo'
import { useStateValue } from '../../../MyProvider'
import { myConfig, titleAnimTime, homeToProjectAnim } from '../../utils'

function Project() {
  const history = useHistory()
  const { currentProj, animValue, setAnimValue, setSvgNumber, toggleTransition, weAreTransitioning } = useStateValue();
  const { backgroundColor, alt, src, name, link } = projectInfo[currentProj]
  const isInitialMount = useRef(true);
  const ref = useRef([])
  const nameRef = useRef(name);
  nameRef.current = name;

  const [imageIsSmol, setImageIsSmol] = useState(true)
  // const imageProps = useSpring({
  //   width: imageIsSmol ? '80%' : '100vw',
  //   height: imageIsSmol ? '50%' : '100vh',
  //   maxWidth: imageIsSmol ? '60%' : '100vw',
  //   top: imageIsSmol ? '42vh' : '50%',
  //   config: homeToProjectAnim.imageConfig,
  // })

  const imageProps = useSpring({
    width: imageIsSmol ? '80vw' : '100vw',
    height: imageIsSmol ? '50vh' : '100vh',
    maxWidth: imageIsSmol ? '60vw' : '100vw',
    top: imageIsSmol ? '42vh' : '50%',
    config: homeToProjectAnim.imageConfig,
  })

  const transitions = useTransition(animValue.title, null, {
    config: myConfig,
    from: { transform: 'translate3d(0px, 50%, 0px)' },
    enter: { transform: 'translate3d(0px, -55%, 0px)' },
    leave: { transform: 'translate3d(0px, -140%, 0px)' }, // diff animations to play before exiting
  })

  const [isImageOn, toggleImage] = useState(false)
  const imageMoveProps = useSpring({
    transform: isImageOn ? 'translateY(0%)' : 'translateY(100%)',
    config: myConfig,
  })

  function delayedRedirect() {
    if (!weAreTransitioning) {
      toggleTransition(true)
      setSvgNumber([])
      ref.current.map(clearTimeout)
      ref.current = []
      setAnimValue({ ...animValue, title: [], rLinks: false })// leave
      setTimeout(() => setImageIsSmol(false), homeToProjectAnim.imageDelay)
      setTimeout(() => history.push(link), homeToProjectAnim.doneDelay)
      setTimeout(() => toggleTransition(false), homeToProjectAnim.doneDelay)// prevent project from changing when scrolling and we already picked one
    }
  }

  useEffect(() => {
    const titleAnimation = () => { // function gets called multiple times
      ref.current.map(clearTimeout)
      ref.current = []
      setAnimValue({ ...animValue, title: [] })// leave
      ref.current.push(setTimeout(() => setAnimValue({ ...animValue, title: [nameRef.current] }), titleAnimTime))// brings it back- (delay)when to bring it back
    }
    isInitialMount.current ? isInitialMount.current = false : titleAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProj]);

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setAnimValue({ ...animValue, title: [nameRef.current], rLinks: true })
    toggleImage(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.projects} style={{ backgroundColor }}>
      <animated.span
        className={styles.image}
        style={imageProps}
      >
        <animated.img
          style={imageMoveProps}
          alt={alt}
          src={src}
          onClick={delayedRedirect}
          onKeyDown={delayedRedirect}
        />

      </animated.span>

        {transitions.map(({ item: title, props, key }) => (
          <animated.span className={styles.title} key={key}>
            <animated.h1 style={{ ...props }}
              onClick={delayedRedirect}
            >
              {title}
            </animated.h1>
          </animated.span>
        ))}
    </div>
  )
}

export default Project
