import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [modalOpen, setModalOpen] = useState(true)
  const [playerChoice, setPlayerChoice] = useState('')

  if (modalOpen) {
    document.getElementById('root').classList.add('active')
  } else {
    document.getElementById('root').classList.remove('active')
  }

  return (
    <AppContext.Provider
      value={{
        modalOpen,
        playerChoice,
        setModalOpen,
        setPlayerChoice
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider }
export default useGlobalContext