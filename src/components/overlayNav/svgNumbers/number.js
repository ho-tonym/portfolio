import React from 'react';
import styles from '../overlayNav.module.css'
import Svg1 from './svg1' //122.2807388305664
import Svg2 from './svg2' //166.91
import Svg3 from './svg3' //176.78428649902344
import { useStateValue } from "../../../MyProvider"

const Number = ({color}) => {
  const {currentProj, setProj} = useStateValue();

  function strokeNumber(){
    switch(currentProj) {
      case 0:
        return <Svg1 color={color}/>
      case 1:
        return <Svg2 color={color}/>
      case 2:
        return <Svg3 color={color}/>
      default:
        return <Svg1 color={color}/>
    }
  }

  return(
    <>
      <svg className={styles.numberSVG} width="55.2" height="51.148" viewBox="0 0 55.2 51.148">
        <text transform="matrix(-4.371139e-08 1 -1 -4.371139e-08 4.3921 1.0864)" fill="none" stroke={color} strokeWidth="2" fontSize="65" fontFamily="DINCondensed-Bold, DIN Condensed" fontWeight="700">
          <tspan x="0" y="0">00</tspan>
        </text>
      </svg>
      {strokeNumber()}
    </>
  )
}


export default Number
