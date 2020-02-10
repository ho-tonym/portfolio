import React, {useEffect, useState} from 'react'
import projectInfo from '../../assets/data/projectInfo'
import styles from './projectPage.module.css'
import { useStateValue } from "../../MyProvider"
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import CloseBtn from '../shared/CloseBtn'
import CustomScrollBar from './CustomScrollBar'

const EachProjectPage = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, [])

  const { currentProj, setAnimValue, animValue, setSvgNumber } = useStateValue();
  const { backgroundColor, alt, src, nameArray,
    colorsArray, description,
    githubLink, hostLink,
    firstImages, secondImages,
  } = projectInfo[currentProj]
  const { projectPage, zero, one,
    second, third, backgroundSection,
    websiteImages, colors,
  } = styles

  // const nextProj = () => {
  //   if(currentProj + 1 > projectInfo.length - 1) {
  //     setProj(0)
  //     return `/${projectInfo[0].link}`
  //   }
  //   else {
  //     setProj(currentProj + 1)
  //     return `/${projectInfo[currentProj + 1].link}`
  //   }
  // }

  return (
    <>
    <CustomScrollBar />
    <div className={projectPage}>
      <Link to="/">
        <CloseBtn
          color="#000"
          myStyle={{
            position: "fixed",
            top: "1rem",
            left: "48%",
            zIndex: 100
          }}
          animFunc={() => {
            setAnimValue({ ...animValue, rLinks: true })
            setSvgNumber(["1"])
          }}
        />
      </Link>
        <section className={zero}>
          <img alt={alt} src={src} />
          <div>
            {nameArray.map(n => (
              <animated.h1 key={n}>{n}</animated.h1>
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
        <section className={backgroundSection} style={{ backgroundColor }} />
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
            {colorsArray.map(c => (
              <span key={c} className={colors} style={{ backgroundColor: c }}>
                <p>{c}</p>
              </span>
            ))}
          </div>
        </section>
        <section className={websiteImages}>
          <div>
            {secondImages.map(i => (
              <img key={i.alt} alt={i.alt} src={i.pic} />
            ))}
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
          <Link to={'/projects/donuts'}>
            <h1>NEXT PROJECT</h1>
          </Link>
        </section>
    </div>
    </>
  )
}

export default EachProjectPage
