import React, { useState, useContext, createContext } from 'react';

export const MyContext = createContext();
export const MyProvider = (props) => {
  const [currentProj, setProj] = useState(0)
  // const [animIsPlaying, toggleAnim] = useState(false)
  const [showRLinks, toggleRLinks] = useState(true)

  return (
    <MyContext.Provider
      value={{
        currentProj,
        setProj,
        showRLinks,
        toggleRLinks
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export const useStateValue = () => useContext(MyContext)
