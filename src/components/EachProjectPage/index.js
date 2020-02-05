import React, {useEffect, useState} from 'react'
import projectInfo from '../../assets/data/projectInfo'
import styles from './projectPage.module.css'
import { useStateValue } from "../../MyProvider"
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

const EachProjectPage = (props) => {
  useEffect(() => {
    document.body.style.overflow = "auto";
    toggle(true)
    return () => document.body.style.overflow = "hidden";
  }, [])
  const [open, toggle] = useState(false)
  //uWu
  // const animProps = useSpring({
  //   opacity: open ? 1 : 0,
  //   // x: open ? 0 : 20,
  //   height: open ? "8.4rem" : "0rem",
  // })
                // style={animProps}
  const {currentProj, setProj} = useStateValue();
  const {backgroundColor, alt, src, nameArray,
    colorsArray, description,
    githubLink, hostLink,
    firstImages, secondImages
  } = projectInfo[currentProj]
  const {projectPage, zero, one, second, third, backgroundSection, websiteImages, colors, xButton} = styles


  const nextProj = () => {
    if(currentProj + 1 > projectInfo.length - 1) {
      setProj(0)
      return `/${projectInfo[0].link}`
    }
    else {
      setProj(currentProj + 1)
      return `/${projectInfo[currentProj + 1].link}`
    }
  }

  return (
    <div className={projectPage}>
      <Link to='/'>
        <button className={xButton}>&times;</button>
      </Link>
        <section className={zero}>
          <img alt={alt} src={src} />
          <div>
            {nameArray.map(n => (
              <animated.h1
                key={n}>{n}</animated.h1>
            ))}
            <p>website</p>
          </div>
        </section>
        <section className={one}>
          <div>
            <h1>01</h1>
            <h2>CONCEPT</h2>
          </div>
          <p>{description}</p>
        </section>
        <section className={backgroundSection} style={{backgroundColor}}></section>
        <section className={websiteImages}>
          <div>
            {firstImages.map(i => <img key={i.alt} alt={i.alt} src={i.pic} />)}
          </div>
        </section>
        <section className={second}>
          <div>
            <h1>02</h1>
            <h2>COLORS</h2>
          </div>
          <div>
            {colorsArray.map(c => <span key={c}className={colors} style={{backgroundColor : c}}><p>{c}</p></span>)}
          </div>
        </section>
        <section className={websiteImages}>
          <div>
            {secondImages.map(i => <img key={i.alt} alt={i.alt} src={i.pic} />)}
          </div>
        </section>
        <section className={third}>
          <div>
            <h1>03</h1>
            <h2>OVERVIEW</h2>
          </div>
          <div>
            <span>
              <h3>ROLE</h3>
              <p>Full Stack Web Developer</p>
            </span>
            <hr />
            <span>
              <h3>DATE</h3>
              <p>10.2017</p>
            </span>
            <hr />
            <a href={hostLink}>
              <span>
                <h3>WEBSITE</h3>
                <p>Link to website</p>
            </span>
            </a>
              <hr />
            <a href={githubLink}>
              <span>
                <h3>GITHUB</h3>
                <p>Link to repo</p>
              </span>
            </a>
          </div>
        </section>
        <section className={styles.nextProject}>
          <Link to={'/projects/donuts'}><h1>NEXT PROJECT</h1></Link>
        </section>
    </div>
  )
}
//if scrolldetect isnt mounted, we are on project page then overflow: auto
export default EachProjectPage
