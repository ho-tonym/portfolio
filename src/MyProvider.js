import React, { useState, useContext, createContext } from 'react';

export const MyContext = createContext();
export const MyProvider = (props) => {
  const [currentProj, setProj] = useState(0)
  // const [animIsPlaying, toggleAnim] = useState(false)
  const [showRLinks, toggleRLinks] = useState(true)
  const [showOverlayNav, toggleOverlayNav] = useState(false)
  const [lineHeight, setLineHeight] = useState(1)
  return (
    <MyContext.Provider
      value={{
        currentProj,
        setProj,
        showRLinks,
        toggleRLinks,
        showOverlayNav,
        toggleOverlayNav,
        lineHeight,
        setLineHeight,
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export const useStateValue = () => useContext(MyContext)
