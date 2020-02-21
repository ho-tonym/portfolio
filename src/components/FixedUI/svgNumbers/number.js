import React, { useEffect, useState } from 'react';
import { useSpring } from 'react-spring'
import styles from '../FixedUI.module.css'
import Svg from './svg/svgNumber'
import { useStateValue } from '../../../MyProvider'
import { numSvgAnim, myConfig, secondZeroSvgConfig } from '../../utils'
import { svgData } from './data/svgData'
import ZeroSvg from './svg/zeroSvgNumber'

const Number = () => {
  const { currentProj, animValue } = useStateValue();
  const [svgValues, setSvgValues] = useState({
    stroke: svgData[currentProj].stroke,
    d: svgData[currentProj].d,
  })
  const numSvgStyle = useSpring({
    strokeDashoffset: animValue.rLinks ? '0' : '122.28',
    config: myConfig,
  })

  const zeroSvgStyle = useSpring({
    strokeDashoffset: animValue.rLinks ? '0' : '122.28',
    config: secondZeroSvgConfig,
  })
  const mainPageColor = 'white'

  useEffect(() => {
    const t1 = setTimeout(() => {
      setSvgValues({
        stroke: svgData[currentProj].stroke,
        d: svgData[currentProj].d,
      })
    }, numSvgAnim.firstDelay)
    return () => clearTimeout(t1)
  }, [currentProj])

  return(
    <>
      <ZeroSvg classStyle={styles.numberSVG} numSvgStyle={numSvgStyle} top="1.2rem" mainPageColor={mainPageColor} />
      <ZeroSvg classStyle={styles.numberSVG} numSvgStyle={zeroSvgStyle} top="2.7rem" mainPageColor={mainPageColor} />
      <Svg
        mainPageColor={mainPageColor}
        numSvgStyle={numSvgStyle}
        stroke={svgValues.stroke}
        d={svgValues.d}
      />
    </>
  )
}

export default Number
