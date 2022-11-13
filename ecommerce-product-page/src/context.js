import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [activeImg, setActiveImg] = useState(0)

  return (
    <AppContext.Provider
      value={{
        activeImg,
        setActiveImg
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext