import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import styles from "./SlowScroll.module.css"

const SlowScroll = (props) => {
  return (
    <canvas className={styles.canvas}></canvas>
  )
}

export default SlowScroll
