import React, {useState, useEffect, useRef, useCallback} from 'react';
import styles from './project.module.css'
import projectInfo from '../../../assets/data/projectInfo'
import { useStateValue } from "../../../MyProvider"
import { Link } from 'react-router-dom'
import { useSpring, animated, config, useTransition } from 'react-spring'
import { myConfig, delayAnimTime, imageAnimTime } from "../../utils"

function Project() {
  const {currentProj, toggleRLinks} = useStateValue();
  const {backgroundColor, alt, src, name, link} = projectInfo[currentProj]
  const isInitialMount = useRef(true);
  const [imageOpen, toggleImage] = useState(false)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      toggleImage(false)
      titleAnimation()
      setTimeout(() => toggleImage(true), imageAnimTime)
      setTimeout(() => {
        nameRef.current = name;
      }, 0)
    }
  }, [currentProj]);

  // const imgProps = useSpring({
  //   height: imageOpen ? "50%" : "0%",
  //   config: imgConfig
  // })

  const widthImageProps = useSpring({
    transform: imageOpen ? "translate3d(0px, 0%, 0px)" : "translate3d(0px, -100%, 0px)",
    config: myConfig
  })


  //from, to? in useSpring
  useEffect(() => {
    toggleRLinks(true)
    set(['1'])
    nameRef.current = name;
    toggleImage(true)
  },[])
  const ref = useRef([])
  const nameRef = useRef(name)
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    config: myConfig,
    from: { transform: "translate3d(0px, 50%, 0px)"},
    enter: { transform: "translate3d(0px, -45%, 0px)" },
    leave: { transform: "translate3d(0px, -130%, 0px)" }//diff animations to play before exiting
  })

  const titleAnimation = useCallback(() => {//function gets called multiple times
    ref.current.map(clearTimeout)
    ref.current = []
    set([])//leave
    ref.current.push(setTimeout(() => set(['1']), delayAnimTime))//brings it back- (delay)when to bring it back
  }, [])
// style={widthImageProps}
  return (
    <div className={styles.projects} style={{backgroundColor: backgroundColor}}>
        <span className={styles.image} style={{zIndex: "1"}}>
          <Link to={link}>
            <animated.img onClick={() => toggleRLinks(false)} alt={alt} src={src} />
          </Link>
        </span>

        {transitions.map(({ item, props: { transform, ...rest }, key }) => (
          <animated.span className={styles.title} key={key} style={rest} >
            <animated.h1 style={{ transform: transform }}>
              <Link onClick={() => toggleRLinks(false)} to={link}>{nameRef.current}</Link>
            </animated.h1>
          </animated.span>
        ))}
    </div>
  )
}
// <span className={styles.image} style={{"z-index": "0"}}>
//   <Link to={link}>
//     <animated.img  alt={alt} src={src} />
//   </Link>
// </span>
//
export default Project
// <img alt={alt} src={src} />
// <animated.img alt={alt} src={src} />
