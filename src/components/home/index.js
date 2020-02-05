import React, {useRef, useEffect} from 'react';
import styles from './home.module.css'
import Project from './project'
import ScrollDetect from './ScrollDetect'

function Home() {
  return (
    <div className={styles.home}>
      <ScrollDetect/>
      <Project />
    </div>
  )
}

export default Home
// import './components/threeContainer'
// <ThreeContainer />
