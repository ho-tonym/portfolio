import React, {useState, useCallback, useEffect, useRef} from 'react';
import styles from '../FixedUI.module.css'
import { numConfig, myConfig, numSvgAnimTime2 } from "../../utils"
import { useSpring, animated, config, useTransition } from 'react-spring'
// \
import { useStateValue } from "../../../MyProvider"
const Svg = ({ color, show, stroke, d}) => {
	useEffect(() => {
		set(['1'])
	}, [])
  const ref = useRef([])
	const isInitialMount = useRef(true);
  const { currentProj, setProj } = useStateValue();
	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			svgAnim()
		}
	}, [currentProj]);
	const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    config: numConfig,
    from: { strokeDashoffset: stroke},
    enter: { strokeDashoffset: 0 },
    leave: { strokeDashoffset: stroke }//diff animations to play before exiting
  })

	const svgAnim = useCallback(() => {//function gets called multiple times
		ref.current.map(clearTimeout)
		ref.current = []
		set([])//leave
		ref.current.push(setTimeout(() => set(['1']), numSvgAnimTime2))
		//brings it back- (delay)when to bring it back
		//has to be a bit after numSvgAnimTime
	}, [])

	return (
		<svg id="changingNumberSVG" className={styles.changingNumberSVG}
			x="0" y="0"	width="55.2" height="25.574" viewBox="0 0 55.2 25.574">
			{transitions.map(({ item, props: { strokeDashoffset, ...rest }, key }) => (
				<animated.path  key={key} style={{ strokeDashoffset }}
					fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10"
					d={d}
					strokeDasharray={stroke}
				/>
			))}
		</svg>
	)
}
							// strokeDashoffset={show ? 0 : stroke}
				// strokeDasharray={stroke}
export default Svg

// Svg.defaultProps = {
// 	showNumber: true
// }
