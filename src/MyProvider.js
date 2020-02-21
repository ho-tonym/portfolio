import React, { useState, useContext, createContext } from 'react';

export const MyContext = createContext();
export const MyProvider = (props) => {
  const [currentProj, setProj] = useState(0)
  const [showOverlayNav, toggleOverlayNav] = useState(false)
  const [overlayTextShowing, isOverlayTextShowing] = useState(false)
  const [lineHeight, setLineHeight] = useState(1)
  const [transOverlay, setTrans] = useState(true)
  const [copied, setCopied] = useState(false)
  const [animValue, setAnimValue] = useState({
    overlay: false,
    rLinks: false,
    lineHeight: 1,
    title: [],
    mainImg: true,
    lineColor: 'white'
  })
	const [svgNumber, setSvgNumber] = useState([])
  const [weAreTransitioning, toggleTransition] = useState(false)
  return (
    <MyContext.Provider
      value={{
        currentProj,
        setProj,
        showOverlayNav,
        toggleOverlayNav,
        lineHeight,
        setLineHeight,
        animValue,
        setAnimValue,
        overlayTextShowing,
        isOverlayTextShowing,
        svgNumber,
        setSvgNumber,
        transOverlay,
        setTrans,
        weAreTransitioning,
        toggleTransition,
        copied,
        setCopied
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export const useStateValue = () => useContext(MyContext)
