import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [showNav, setShowNav] = useState(false)
  // useEffect(() => {
  //   let width = window.innerWidth
  // })
  return (
    <AppContext.Provider
      value={{
        showNav, setShowNav
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }