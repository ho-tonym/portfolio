import React, { useEffect, useState } from 'react';
import styles from '../FixedUI.module.css'
import Svg from './svgNumber'
import { useStateValue } from "../../../MyProvider"
import { numSvgAnimTime } from "../../utils"
import { svgData } from './svgData'

const Number = ({ color }) => {
  const { currentProj } = useStateValue();
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
    }, numSvgAnimTime)
    return () => clearTimeout(t1)
  }, [currentProj])

  return(
    <>
      <svg className={styles.numberSVG} width="55.2" height="51.148" viewBox="0 0 55.2 51.148">
        <text transform="matrix(-4.371139e-08 1 -1 -4.371139e-08 4.3921 1.0864)" fill="none" stroke={color} strokeWidth="2" fontSize="65" fontFamily="DINCondensed-Bold, DIN Condensed" fontWeight="700">
          <tspan x="0" y="0">00</tspan>
        </text>
      </svg>
      <Svg
        color={color}
        stroke={svgValues.stroke}
        d={svgValues.d}
      />
    </>
  )
}

export default Number
