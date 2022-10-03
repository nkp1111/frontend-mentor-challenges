import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [currentPage, setCurrentPage] = useState('home')
  const [destination, setDestination] = useState('Moon')
  const [crew, setCrew] = useState('Douglas Hurley')
  const [technology, setTechnology] = useState('Launch vehicle')
  const [imageMode, setImageMode] = useState(false)

  const handleDestination = (newDestination) => {
    setDestination(newDestination)
  }

  const handleCrew = (newCrew) => {
    setCrew(newCrew)
  }

  const handleTechnology = (newTech) => {
    setTechnology(newTech)
  }

  const handleCurrentPage = (newPage) => {
    setCurrentPage(newPage)
  }

  const handleimageMode = (width) => {
    if (width <= 600) {
      setImageMode(true)
    } else {
      setImageMode(false)
    }
  }

  useEffect(() => {
    let width = window.innerWidth
    window.addEventListener('resize', (e) => {
      width = window.innerWidth
      handleimageMode(width)
    })
    handleimageMode(width)
  }, [])

  return (
    <AppContext.Provider
      value={{
        destination,
        crew,
        technology,
        currentPage,
        handleDestination,
        handleCrew,
        handleTechnology,
        handleCurrentPage,
        imageMode
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
