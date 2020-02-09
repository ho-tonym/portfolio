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
    let t1
    let t2
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      titleAnimation()
      t2 = setTimeout(() => {
        nameRef.current = name;
      }, 0)
    }
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [currentProj]);

  // const imgProps = useSpring({
  //   height: imageOpen ? "50%" : "0%",
  //   config: imgConfig
  // })

  // const widthImageProps = useSpring({
  //   transform: imageOpen ? "translate3d(0px, 0%, 0px)" : "translate3d(0px, -100%, 0px)",
  //   config: myConfig
  // })

  useEffect(() => {
    setAnimValue({ ...animValue, rLinks: true })
    set(['1'])
    nameRef.current = name;
  }, [])

  const ref = useRef([])
  const nameRef = useRef(name)
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    config: myConfig,
    from: { transform: "translate3d(0px, 50%, 0px)" },
    enter: { transform: "translate3d(0px, -45%, 0px)" },
    leave: { transform: "translate3d(0px, -130%, 0px)" }// diff animations to play before exiting
  })

  const titleAnimation = useCallback(() => {// function gets called multiple times
    ref.current.map(clearTimeout)
    ref.current = []
    set([])// leave
    ref.current.push(setTimeout(() => set(['1']), delayAnimTime))// brings it back- (delay)when to bring it back
  }, [])
// style={widthImageProps}

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
// {transitions.map(({ item, props: { transform, ...rest }, key }) => (
//   <animated.span className={styles.title} key={key} style={rest} >
//     <animated.h1 style={{ transform: transform }}
//       onClick={() => {
//         toggleRLinks(false)
//         delayedRedirect()
//       }}>
//       {nameRef.current}
//     </animated.h1>
//   </animated.span>
// ))}
// <span className={styles.image} style={{"z-index": "0"}}>
//   <Link to={link}>
//     <animated.img  alt={alt} src={src} />
//   </Link>
// </span>
//
export default Project
// <img alt={alt} src={src} />
// <animated.img alt={alt} src={src} />
