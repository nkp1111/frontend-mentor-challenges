import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [destination, setDestination] = useState('Moon')
  const [crew, setCrew] = useState('')
  const [technology, setTechnology] = useState('')

  return (
    <AppContext.Provider
      value={{
        destination,
        crew,
        technology
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
