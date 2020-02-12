import React from 'react'
import PropTypes from 'prop-types'
import styles from './xButton.module.css'
import { useSpring, animated } from 'react-spring'

const CloseBtn = ({ spring, animFunc, color, myStyle }) => {
  // console.log(animFunc, animValue, color, myStyle)
return(
  <animated.button type="button"
    onClick={animFunc}
    className={styles.closeBtn}
    style={{ ...myStyle, ...spring }}
  >
    <svg
      x="0px" y="0px"
      width="55px" height="55px" viewBox="0 0 55 55"
    >
      <line
        fill="none"
        stroke={color}
        strokeWidth="2" strokeMiterlimit="10"
        x1="21.614" y1="22.125" x2="38.562" y2="39.073"
        strokeDasharray="122.28" strokeDashoffset="0"
      />
      <line
        fill="none"
        stroke={color}
        strokeWidth="2" strokeMiterlimit="10"
        x1="38.562" y1="22.125" x2="21.614" y2="39.073"
        strokeDasharray="122.28" strokeDashoffset="0"
      />
    </svg>
  </animated.button>
)
}

CloseBtn.propTypes = {
  color: PropTypes.string,
  myStyle: PropTypes.object,
  animFunc: PropTypes.func,
};

CloseBtn.defaultProps = {
  color: "#fff",
  myStyle: {},
  animFunc: () => {},
}

export default CloseBtn
