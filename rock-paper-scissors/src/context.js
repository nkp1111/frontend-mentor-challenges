import React, { useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value='hi'>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider }
export default useGlobalContext