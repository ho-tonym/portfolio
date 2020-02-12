import React, { useEffect, useState } from 'react';
import styles from '../FixedUI.module.css'
import Svg from './svg/svgNumber'
import { useStateValue } from "../../../MyProvider"
import { numSvgAnim, myConfig, secondZeroSvgConfig } from "../../utils"
import { svgData } from './data/svgData'
import { useSpring, useTrail, animated } from 'react-spring'
import ZeroSvg from './svg/zeroSvgNumber'

const Number = () => {
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
    strokeDashoffset: animValue.rLinks ? "0" : "122.28",
    config: myConfig,
  })

  const zeroSvgStyle = useSpring({
    strokeDashoffset: animValue.rLinks ? "0" : "122.28",
    config: secondZeroSvgConfig,
  })

  return(
    <>
      <ZeroSvg classStyle={styles.numberSVG} numSvgStyle={numSvgStyle} top={"1.2rem"} />
      <ZeroSvg classStyle={styles.numberSVG} numSvgStyle={zeroSvgStyle} top={"2.7rem"}/>
      <Svg
        numSvgStyle={numSvgStyle}
        stroke={svgValues.stroke}
        d={svgValues.d}
      />
    </>
  )
}

export default Number
