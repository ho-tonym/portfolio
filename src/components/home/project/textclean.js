import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useSpring, animated, useTransition } from 'react-spring'
import styles from './project.module.css'
import projectInfo from '../../../assets/data/projectInfo'
import { useStateValue } from "../../../MyProvider"
import { myConfig, delayAnimTime, imageAnimTime } from "../../utils"

function Project() {
  const history = useHistory()
  const { currentProj, animValue, setAnimValue } = useStateValue();
  const { backgroundColor, alt, src, name, link } = projectInfo[currentProj]
  const isInitialMount = useRef(true);

  useEffect(() => {
    let t2
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setTitleShowing(!titleShowing)
      // setTimeout(() => setTitleShowing(!titleShowing), delayAnimTime)

      t2 = setTimeout(() => { nameRef.current = name }, 0)
    }
    return () => clearTimeout(t2)
  }, [currentProj]);

  useEffect(() => {
    setAnimValue({ ...animValue, rLinks: true })
    nameRef.current = name;
    // setTitleShowing(!titleShowing)
  }, [])

  const nameRef = useRef(name)
  const [titleShowing, setTitleShowing] = useState(false)
  const transitions = useTransition(titleShowing, null, {
    config: myConfig,
    from: { transform: "translate3d(0px, 50%, 0px)" },
    enter: { transform: "translate3d(0px, -45%, 0px)" },
    leave: [{ transform: "translate3d(0px, -130%, 0px)" }],// diff animations to play before exiting

    // diff animations to play before exiting
  })

  function delayedRedirect() {
    history.push(link)
  }

  return (
    <div className={styles.projects} style={{ backgroundColor }}>
        <span className={styles.image} style={{ zIndex: "1" }}>
          <animated.img
            alt={alt}
            src={src}
            onClick={() => {
              setAnimValue({ ...animValue, rLinks: false })
              delayedRedirect()
            }}
          />
        </span>

        {transitions.map(({ item, props, key }) => (
          <animated.span className={styles.title} key={key}>
            <animated.h1 style={{ ...props }}
              onClick={() => {
                setAnimValue({ ...animValue, rLinks: false })
                delayedRedirect()
              }}
            >
              {nameRef.current}
            </animated.h1>
          </animated.span>
        ))}
    </div>
  )
}

export default Project
