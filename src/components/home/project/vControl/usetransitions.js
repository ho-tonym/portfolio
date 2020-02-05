import React, {useState, useEffect, useRef, useCallback} from 'react';
import styles from './project.module.css'
import projectInfo from '../../../assets/data/projectInfo'
import { useStateValue } from "../../../MyProvider"
import { Link } from 'react-router-dom'
import { useSpring, animated, config, useTransition } from 'react-spring'
import { useHistory } from "react-router-dom";
import { titleConfig, imgConfig, delayAnimTime, imageAnimTime } from "../../utils"

function Project() {
  const history = useHistory()
  const {currentProj} = useStateValue();
  const {backgroundColor, alt, src, name, link} = projectInfo[currentProj]
  // const [open, toggle] = useState(false)

  const [homePageInfo, sethomePageInfo] = useState({
    name
  })
  // useEffect(() => {
  //   toggle(true)
  //   toggleImage(true)
  // }, [])

  // const isInitialMount = useRef(true);
  // const nameRef = useRef(name);
  // const [imageOpen, toggleImage] = useState(false)
  // useEffect(() => {
  //   if (isInitialMount.current) {
  //      isInitialMount.current = false;
  //   } else {
  //       toggle(false)
  //       toggleImage(false)
  //       setTimeout(() => {
  //         sethomePageInfo(nameRef.current)
  //         nameRef.current = name;
  //       }, delayAnimTime)
  //       setTimeout(() => toggle(true), delayAnimTime)
  //       setTimeout(() => toggleImage(true), imageAnimTime)
  //   }
  // }, [currentProj]);
    // "translate3d(0px, -130%, 0px)"
  // const titleProps = useSpring({
  //   transform: open? "translate3d(0px, -45%, 0px)" : "translate3d(0px, 50%, 0px)",
  //   config: titleConfig,
  // })

  // height: open ? "6.5rem" : "0rem",
  // transform: open ? "translate(-50%, -50%)" : "translate(-50%, -50%)",

  // const imgProps = useSpring({
  //
  //   height: imageOpen ? "50%" : "0%",
  //   config: imgConfig
  // })
  //from, to? in useSpring
  const ref = useRef([])
  const transitions = useTransition(currentProj, null, {
    from: { transform: "translate3d(0px, 50%, 0px)"},
    enter: [{ transform: "translate3d(0px, -45%, 0px)" }],
    leave: [{ transform: "translate3d(0px, -130%, 0px)" }],
    update: { color: '#fff' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    // ref.current.push(setTimeout(() => set(['Apples', 'Oranges', 'Kiwis']), 2000))
    // ref.current.push(setTimeout(() => set(['Apples', 'Kiwis']), 5000))
    // ref.current.push(setTimeout(() => set(['Apples', 'Bananas', 'Kiwis']), 8000))
  }, [])
  return (
    <div id={styles.projects} style={{backgroundColor: backgroundColor}}>
      <Link to={link}>
        <animated.img alt={alt} src={src} />
      </Link>
        {transitions.map(({ item, props: { transform, ...rest }, key }) => (
          <animated.span className={styles.title} key={key} style={rest} >
            <animated.h1 style={{ overflow: 'hidden', transform: transform }}>
              <Link to={link}>{"donut"}</Link>
            </animated.h1>
          </animated.span>
        ))}
    </div>
  )
}

export default Project
// <img alt={alt} src={src} />
