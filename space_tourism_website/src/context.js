import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [destination, setDestination] = useState('Moon')
  const [crew, setCrew] = useState('Douglas Hurley')
  const [technology, setTechnology] = useState('Launch vehicle')

  const handleDestination = (newDestination) => {
    setDestination(newDestination)
  }

  const handleCrew = (newCrew) => {
    setCrew(newCrew)
  }

  const handleTechnology = (newTech) => {
    setTechnology(newTech)
  }

  useEffect(() => {
    handleDestination()
  }, [])

  return (
    <AppContext.Provider
      value={{
        destination,
        crew,
        technology,
        handleDestination,
        handleCrew,
        handleTechnology
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
