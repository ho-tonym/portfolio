import React from 'react';
import { Link } from 'react-router-dom'
import styles from './page404.module.css'

const Page404 = () => (
  <div className={styles.page404}>
    <p>Sorry, the page you are looking for is not here :(</p>
    <Link to="/">
      <button type="button" className={styles.back}>Back Home!</button>
    </Link>
  </div>
)

export default Page404
