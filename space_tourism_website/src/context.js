import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [currentPage, setCurrentPage] = useState('home')
  const [destination, setDestination] = useState('Moon')
  const [crew, setCrew] = useState('Douglas Hurley')
  const [technology, setTechnology] = useState('Launch vehicle')
  const [imageMode, setImageMode] = useState(false)
  const [navbar, setNavbar] = useState(true)
  const [sidebar, setSidebar] = useState(false)

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
    if (width <= 660) {
      setImageMode(true)
    } else {
      setImageMode(false)
    }
  }

  const handleNavbar = (width) => {
    if (width <= 800) {
      setNavbar(false)
    } else {
      setNavbar(true)
    }
  }

  const handleSidebar = (sidebar) => {
    setSidebar(!sidebar)
  }

  useEffect(() => {
    let width = window.innerWidth
    handleimageMode(width)
    window.addEventListener('resize', (e) => {
      width = window.innerWidth
      handleimageMode(width)
    })
  }, [])

  useEffect(() => {
    let width = window.innerWidth
    handleNavbar(width)
    window.addEventListener('resize', () => {
      width = window.innerWidth
      handleNavbar(width)
    })
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
        imageMode,
        navbar,
        sidebar,
        handleSidebar
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
