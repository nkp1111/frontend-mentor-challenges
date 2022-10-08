import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [modalOpen, setModalOpen] = useState(true)

  if (modalOpen) {
    document.getElementById('root').classList.add('active')
  } else {
    document.getElementById('root').classList.remove('active')
  }


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