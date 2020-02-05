import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import styles from './email.module.css'

const Email = ({color}) => (
  <CopyToClipboard
    className={styles.email}
    text={"ho.tonym@gmail.com"}
    style={{color: color}}
  >
    <p>email</p>
  </CopyToClipboard>
)

export default Email
