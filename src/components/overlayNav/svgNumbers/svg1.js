import React from 'react';
import styles from '../overlayNav.module.css'

const Svg1 = ({color}) => {
	return(
		<svg id="changingNumberSVG" className={styles.changingNumberSVG} x="0" y="0"
			width="55.2" height="25.574" viewBox="0 0 55.2 25.574">
			<path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" d="M4.392,11.162h39.26l-4.875-6.63h7.021l4.875,6.63
				v6.63H4.392V11.162z" strokeDasharray="122.28" strokeDashoffset="122.28" />
		</svg>
	)
}

export default Svg1
