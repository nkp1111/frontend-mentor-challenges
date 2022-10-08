import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [modalOpen, setModalOpen] = useState(true)

  const handleModalOpen = (modal) => {
    setModalOpen(!modal)
  }

  return (
    <AppContext.Provider
      value={{
        modalOpen,
        handleModalOpen
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider }
export default useGlobalContext