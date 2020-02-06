import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import styles from './xButton.module.css'

const CloseBtn = ({toggle, color}) => {
  return (
    <button type="button" onClick={() => toggle(false)} className={styles.closeBtn}>
      <svg x="0px" y="0px"
      	 width="55px" height="55px" viewBox="0 0 55 55">
      <line fill="none" stroke={color}
        strokeWidth="2" strokeMiterlimit="10"
        strokeDasharray="122.28" strokeDashoffset="0"
        x1="21.614" y1="22.125" x2="38.562" y2="39.073"/>
      <line fill="none" stroke={color}
        strokeWidth="2" strokeMiterlimit="10"
        strokeDasharray="122.28" strokeDashoffset="0"
        x1="38.562" y1="22.125" x2="21.614" y2="39.073"/>
      </svg>
    </button>
  )
}

CloseBtn.propTypes = {
  color: PropTypes.string
};

CloseBtn.defaultProps = {
  color: "#fff"
}
// <button type="button" className={styles.closeBtn}
//   onClick={() => {
//     toggle(false)
//   }}>&times;</button>
//

export default CloseBtn
// <svg x="0px" y="0px" id="mark" className={styles.closeBtn}
//    width="55.2px" height="25.574px" viewBox="0 0 55.2 25.574">
// <line fill="none" stroke="#fff"
//   strokeDasharray="47.94" strokeDashoffset="0"
//   strokeWidth="4" strokeMiterlimit="10"
//   x1="11.413" y1="-2.823" x2="45.309" y2="31.073"/>
// <line fill="none" stroke="#fff"
//   strokeDasharray="47.94" strokeDashoffset="0"
//   strokeWidth="4" strokeMiterlimit="10"
//   x1="45.309" y1="-2.823" x2="11.413" y2="31.073"/>
// </svg>
