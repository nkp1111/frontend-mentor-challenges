import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [destination, setDestination] = useState('Moon')
  const [crew, setCrew] = useState('')
  const [technology, setTechnology] = useState('')

  const handleDestination = (newDestination) => {
    setDestination(newDestination)
  }

  useEffect(() => {
    handleDestination()
  })

  return (
    <AppContext.Provider
      value={{
        destination,
        crew,
        technology,
        handleDestination
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
