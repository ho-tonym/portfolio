import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useSpring, animated, useTransition } from 'react-spring'
import styles from '../FixedUI.module.css'
import { numSvgAnim, myConfig } from "../../utils"
import { useStateValue } from "../../../MyProvider"

const Svg = ({ color, stroke, d, numSvgStyle }) => {
	const { currentProj, animValue } = useStateValue();
	const ref = useRef([])
	const isInitialMount = useRef(true);
	const [items, set] = useState([])

  useEffect(() => set(['1']), [])
	useEffect(() => {
		isInitialMount.current ? isInitialMount.current = false : svgAnim()
	}, [currentProj]);

  const transitions = useTransition(items, null, {
    config: numSvgAnim.numConfig,
    from: { strokeDashoffset: stroke },
    enter: { strokeDashoffset: 0 },
    leave: { strokeDashoffset: stroke },
  })

	const svgAnim = useCallback(() => {
		ref.current.map(clearTimeout)
		ref.current = []
		set([])
		ref.current.push(setTimeout(() => set(['1']), numSvgAnim.secondDelay))
	}, [])

	return (
		<animated.svg id="changingNumberSVG"
			className={styles.changingNumberSVG}
			style={{ ...numSvgStyle }}
			x="0"
			y="0"
			width="55.2"
			height="25.574"
			viewBox="0 0 55.2 25.574"
		>
			{transitions.map(({ props, key }) => (
				<animated.path
					key={key}
					fill="none"
					strokeWidth="2"
					strokeMiterlimit="10"
					stroke={color}
					d={d}
					style={{ ...props }}
					strokeDasharray={stroke}
				/>
			))}
		</animated.svg>
	)
}

export default Svg
