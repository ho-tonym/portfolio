import React, { useEffect, useState } from 'react';
import styles from '../FixedUI.module.css'
import Svg from './svgNumber'
import { useStateValue } from "../../../MyProvider"
import { numSvgAnim, myConfig } from "../../utils"
import { svgData } from './svgData'
import { useSpring, useTrail, animated } from 'react-spring'

const Number = ({ color }) => {
  const { currentProj, animValue } = useStateValue();
  const [svgValues, setSvgValues] = useState({
    stroke: svgData[currentProj].stroke,
    d: svgData[currentProj].d,
  })

  useEffect(() => {
    const t1 = setTimeout(() => {
      setSvgValues({
        stroke: svgData[currentProj].stroke,
        d: svgData[currentProj].d,
      })
    }, numSvgAnim.firstDelay)
    return () => clearTimeout(t1)
  }, [currentProj])

  const numSvgStyle = useSpring({
    right: animValue.rLinks ? "1.2rem" : "-4.5rem",
    config: myConfig,
  })

  return(
    <>
      <animated.svg className={styles.numberSVG}
        style={numSvgStyle}
        width="55.2" height="51.148" viewBox="0 0 55.2 51.148">
        <text transform="matrix(-4.371139e-08 1 -1 -4.371139e-08 4.3921 1.0864)" fill="none" stroke={color} strokeWidth="2" fontSize="65" fontFamily="DINCondensed-Bold, DIN Condensed" fontWeight="700">
          <tspan x="0" y="0">00</tspan>
        </text>
      </animated.svg>
      <Svg
        numSvgStyle={numSvgStyle}
        color={color}
        stroke={svgValues.stroke}
        d={svgValues.d}
      />
    </>
  )
}

export default Number
