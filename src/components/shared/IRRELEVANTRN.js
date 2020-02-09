import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import styles from './email.module.css'
import { animated } from 'react-spring'

const Email = ({ myStyle, index }) => (

  <animated.div style={{ ...myStyle }} key={index}>
    <CopyToClipboard
      className={styles.email}
      text={"ho.tonym@gmail.com"}
    >
      <p>email</p>
    </CopyToClipboard>
  </animated.div>
)

export default Email
