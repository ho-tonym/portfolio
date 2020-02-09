import React, { useState, useContext, createContext } from 'react';

export const MyContext = createContext();
export const MyProvider = (props) => {
  const [currentProj, setProj] = useState(0)
  const [showOverlayNav, toggleOverlayNav] = useState(false)
  const [lineHeight, setLineHeight] = useState(1)
  const [animValue, setAnimValue] = useState({
    overlay: false,
    rLinks: true,
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
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export const useStateValue = () => useContext(MyContext)
