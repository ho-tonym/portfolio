import React from 'react';
import styles from './page404.module.css'
import { Link } from 'react-router-dom'


const Page404 = () => (
  <div className={styles.page404}>
    <p>Sorry, the page you are looking for is not here :(</p>
    <Link to='/'>
      <button className={styles.back}>Back Home!</button>
    </Link>
  </div>
)

export default Page404

// import './components/threeContainer'
// <ThreeContainer />
