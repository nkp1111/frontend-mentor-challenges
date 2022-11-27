import React, { useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const val = "hello"
  return (
    <AppContext.Provider
      value={{
        val
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }