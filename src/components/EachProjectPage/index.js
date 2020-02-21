import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useHistory, useLocation } from 'react-router-dom';
import styles from './projectPage.module.css'
import projectInfo from '../../assets/data/projectInfo'
import { useStateValue } from '../../MyProvider'
import CloseBtn from '../shared/CloseBtn'
import CustomScrollBar from './CustomScrollBar'
import { myConfig } from '../utils'

const EachProjectPage = () => {
  const location = useLocation()
  const history = useHistory()
  const { currentProj, setAnimValue, animValue, setSvgNumber, setTrans, setProj } = useStateValue();
  const { backgroundColor, alt, src, nameArray,
    colorsArray, description,
    githubLink, hostLink,
    firstImages, secondImages,
  } = projectInfo[currentProj]
  const { projectPage, zero, one,
    second, third, backgroundSection,
    websiteImages,
  } = styles

  const [titleShowing, set] = useState(false)
  const h1Props = useSpring({
    transform: titleShowing ? 'translate3d(0px, 0%, 0px)' : 'translate3d(0px, 100%, 0px)',
    config: myConfig,
  })
  const [xButton, setXButton] = useState(false)
  const closeBtnProps = useSpring({
    transform: xButton ? 'translate3d(0px, 0%, 0px)' : 'translate3d(0px, -150%, 0px)',
    config: myConfig,
  })

  useEffect(() => {
    document.body.style.overflow = 'auto';
    set(true)
    setXButton(true)

    projectInfo.forEach((p, index) => {
      if (`/${p.link}` === location.pathname) {
        setProj(index)
      }
    })

    return () => {
      setTrans(false)
      setAnimValue({ ...animValue, lineColor: 'white' })
    }
  }, [])

  function delayedRedirect() {
    document.body.style.overflow = 'hidden';
    setAnimValue({ ...animValue, rLinks: true })
    setSvgNumber(['1'])
    setXButton(false)
    setTrans(true)
    setTimeout(() => history.push('/'), 1000)
  }

  return (
    <>
    <CustomScrollBar />
    <div className={projectPage}>
      <CloseBtn
        color="#000"
        spring={closeBtnProps}
        myStyle={{
          position: 'fixed',
          top: '1rem',
          left: '48%',
          zIndex: 100,
        }}
        animFunc={() => delayedRedirect()}
      />
      <section className={zero}>
        <img alt={alt} src={src} />
        <div>
          {nameArray.map(n => (
            <span key={n}>
              <animated.h1 style={h1Props}>{n}</animated.h1>
            </span>
          ))}
          {/*<p>website</p>*/}
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
      {firstImages.length > 0 && (
        <section className={websiteImages}>
          <div>
            {firstImages.map(i => <img key={i.alt} alt={i.alt} src={i.pic} />)}
          </div>
        </section>
      )}
      <section className={second}>
        <div>
          <h1>02</h1>
          <h2>COLORS</h2>
        </div>
          {colorsArray.map((element, i) => (
            <div className={styles.colorSection} key={i}>
              {element.map(c => (
                <span
                  key={c}
                  style={{ backgroundColor: c }}
                >
                  <p>{c}</p>
                </span>
              ))}
            </div>
          ))}
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

            <span>
              <h3>WEBSITE</h3>
              <a href={hostLink} className={styles.linkContainer}>
                <p>Link to website</p>
                <p className={styles.arrow}> &#8594;</p>
              </a>
            </span>
            <hr />
            <span>
              <h3>GITHUB</h3>
              <a href={githubLink} className={styles.linkContainer}>
                <p>Link to repo</p>
                <p className={styles.arrow}> &#8594;</p>
              </a>
            </span>
        </div>
      </section>
    </div>
    </>
  )
}

export default EachProjectPage
