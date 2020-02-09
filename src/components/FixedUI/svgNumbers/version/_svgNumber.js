import React from 'react';
import styles from '../FixedUI.module.css'
import { myConfig, overLayConfig } from "../../utils"
import { useSpring, animated, config, useTransition } from 'react-spring'

const Svg = ({ color, show, stroke, d }) => {
	const numberProps = useSpring({
		strokeDashoffset: show ? 0 : stroke,
		config: overLayConfig
	})

	return (
		<svg id="changingNumberSVG" className={styles.changingNumberSVG}
			x="0" y="0"	width="55.2" height="25.574" viewBox="0 0 55.2 25.574">
			<animated.path
				style={numberProps}
				fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10"
				d={d}
				strokeDasharray={stroke}
				strokeDashoffset={stroke}
			/>
		</svg>
	)
}

export default Svg

// Svg.defaultProps = {
// 	showNumber: true
// }
