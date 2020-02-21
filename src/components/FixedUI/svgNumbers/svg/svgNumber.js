import React, { useCallback, useEffect, useRef } from 'react';
import { animated, useTransition } from 'react-spring'
import { useLocation } from 'react-router-dom';
import styles from '../../FixedUI.module.css'
import { numSvgAnim } from '../../../utils'
import { useStateValue } from '../../../../MyProvider'

const Svg = ({ stroke, d, numSvgStyle, mainPageColor }) => {
	const { currentProj, svgNumber, setSvgNumber, weAreTransitioning } = useStateValue();
	const ref = useRef([])
	const location = useLocation();
	const isInitialMount = useRef(true);

	const transitions = useTransition(svgNumber, null, {
		config: numSvgAnim.numConfig,
		from: { strokeDashoffset: stroke },
		enter: { strokeDashoffset: 0 },
		leave: { strokeDashoffset: stroke },
	})

	const svgAnim = useCallback(() => {
		ref.current.map(clearTimeout)
		ref.current = []
		setSvgNumber([])
		ref.current.push(setTimeout(() => setSvgNumber(['1']), numSvgAnim.secondDelay))
	}, [])

	useEffect(() => {
		if (location.pathname === '/') {
			isInitialMount.current ? isInitialMount.current = false : svgAnim()
		}
	}, [currentProj]);

	useEffect(() => {
		if(weAreTransitioning) {
			ref.current.map(clearTimeout)
			ref.current = []
			setSvgNumber([])
		}
	}, [weAreTransitioning])

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
					stroke={mainPageColor}
					d={d}
					style={{ ...props }}
					strokeDasharray={stroke}
				/>
			))}
		</animated.svg>
	)
}

export default Svg
