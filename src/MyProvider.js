import React, { useState, useContext, createContext } from 'react';

export const MyContext = createContext();
export const MyProvider = (props) => {
  const [currentProj, setProj] = useState(0)
  const [showOverlayNav, toggleOverlayNav] = useState(false)
  const [overlayTextShowing, isOverlayTextShowing] = useState(false)
  const [lineHeight, setLineHeight] = useState(1)
  const [animValue, setAnimValue] = useState({
    overlay: false,
    rLinks: false,
    lineHeight: 1,
    title: [],
  })
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
        isOverlayTextShowing
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export const useStateValue = () => useContext(MyContext)
