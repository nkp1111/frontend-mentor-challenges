import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [modalOpen, setModalOpen] = useState(true)

  useEffect(() => {
    document.getElementById('root').classList.add('active')
  })

  return (
    <AppContext.Provider
      value={{
        modalOpen,
        setModalOpen
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider }
export default useGlobalContext