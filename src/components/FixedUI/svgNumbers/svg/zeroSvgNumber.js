import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useSpring, animated, useTransition } from 'react-spring'
import styles from '../../FixedUI.module.css'
import { numSvgAnim, myConfig } from "../../../utils"
import { useStateValue } from "../../../../MyProvider"

const ZeroSvg = ({ classStyle, numSvgStyle, top}) => {
	return (
		<svg x="0px" y="0px"
			className={classStyle}
			style={{top: top}}
			 width="55.2" height="25.574" viewBox="0 0 55.2 25.574"
		 >
			<animated.path
				style={{ ...numSvgStyle }}
				fill="none"
				stroke="#fff"
				strokeWidth="2"
				strokeMiterlimit="10"
				d="M41.118,3.297c1.56,0,2.945,0.271,4.159,0.812
				c1.213,0.541,2.253,1.268,3.12,2.178c0.866,0.91,1.527,1.96,1.982,3.152c0.455,1.191,0.683,2.438,0.683,3.737
				s-0.228,2.545-0.683,3.737c-0.455,1.191-1.116,2.243-1.982,3.153c-0.867,0.909-1.907,1.635-3.12,2.177
				c-1.214,0.542-2.6,0.812-4.159,0.812h-27.17c-1.56,0-2.948-0.271-4.16-0.812c-1.214-0.542-2.254-1.268-3.12-2.177
				c-0.868-0.91-1.528-1.962-1.982-3.153c-0.455-1.192-0.683-2.438-0.683-3.737s0.228-2.546,0.683-3.737
				c0.454-1.192,1.114-2.242,1.982-3.152c0.866-0.91,1.906-1.637,3.12-2.178c1.212-0.542,2.6-0.812,4.16-0.812H41.118z M13.947,9.927
				c-0.954,0-1.745,0.303-2.373,0.91c-0.629,0.606-0.942,1.387-0.942,2.34s0.313,1.732,0.942,2.34c0.627,0.606,1.419,0.91,2.373,0.91
				h27.17c0.952,0,1.743-0.304,2.372-0.91c0.628-0.607,0.942-1.387,0.942-2.34s-0.314-1.733-0.942-2.34
				c-0.629-0.607-1.42-0.91-2.372-0.91H13.947z"
				strokeDasharray={122.28}
				strokeDashoffset={0}
			/>
		</svg>
	)
}

export default ZeroSvg
