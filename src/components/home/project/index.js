import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useSpring, animated, useTransition } from 'react-spring'
import styles from './project.module.css'
import projectInfo from '../../../assets/data/projectInfo'
import { useStateValue } from "../../../MyProvider"
import { myConfig, titleAnimTime, homeToProjectAnim, imageConfig } from "../../utils"

function Project() {
  const history = useHistory()
  const { currentProj, animValue, setAnimValue, setSvgNumber } = useStateValue();
  const { backgroundColor, alt, src, name, link } = projectInfo[currentProj]
  const isInitialMount = useRef(true);
  const ref = useRef([])
  const nameRef = useRef(name);
  nameRef.current = name;

  const [imageIsSmol, setImageIsSmol] = useState(true)
  const imageProps = useSpring({
    width: imageIsSmol ? '80%' : '100%',
    height: imageIsSmol ? '50%' : '100%',
    maxWidth: imageIsSmol ? "34.375rem" : '100%',
    top: imageIsSmol ? "42vh" : "50%",
    config: homeToProjectAnim.imageConfig
  })

  const transitions = useTransition(animValue.title, null, {
    config: myConfig,
    from: { transform: "translate3d(0px, 50%, 0px)" },
    enter: { transform: "translate3d(0px, -45%, 0px)" },
    leave: { transform: "translate3d(0px, -130%, 0px)" }// diff animations to play before exiting
  })

  const titleAnimation = useCallback(() => {// function gets called multiple times
    ref.current.map(clearTimeout)
    ref.current = []
    setAnimValue({ ...animValue, title: [] })// leave
    ref.current.push(setTimeout(() => setAnimValue({ ...animValue, title: [nameRef.current] }), titleAnimTime))// brings it back- (delay)when to bring it back
  }, [])

  function delayedRedirect() {
    setSvgNumber([])
    ref.current.map(clearTimeout)
    ref.current = []
    setAnimValue({ ...animValue, title: [], rLinks: false })// leave
    setTimeout(() => setImageIsSmol(false), homeToProjectAnim.imageDelay)
    setTimeout(() => history.push(link), homeToProjectAnim.doneDelay)
  }

  useEffect(() => {
    isInitialMount.current ? isInitialMount.current = false : titleAnimation()
  }, [currentProj]);

  useEffect(() => {
    document.body.style.overflow = "hidden"
    setAnimValue({ ...animValue, title: [nameRef.current], rLinks: true })
  }, [])

  return (
    <div className={styles.projects} style={{ backgroundColor }}>
        <animated.span
          className={styles.image}
          style={imageProps}
        >
          <img
            alt={alt}
            src={src}
            onClick={() => {
              delayedRedirect()
            }}
          />
      </animated.span>

        {transitions.map(({ item: title, props, key }) => (
          <animated.span className={styles.title} key={key}>
            <animated.h1 style={{ ...props }}
              onClick={() => {
                delayedRedirect()
              }}
            >
              {title}
            </animated.h1>
          </animated.span>
        ))}
    </div>
  )
}

export default Project
