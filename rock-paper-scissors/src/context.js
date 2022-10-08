import React, { useContext, useEffect, useState } from 'react'
import data from './assets/data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [modalOpen, setModalOpen] = useState(true)
  const [playerChoice, setPlayerChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')

  useEffect(() => {
    if (modalOpen) {
      document.getElementById('root').classList.add('active')
    } else {
      document.getElementById('root').classList.remove('active')
    }
  }, [modalOpen])

  useEffect(() => {
    if (playerChoice) {
      const numOfChoice = 3
      const ind = Math.floor(Math.random() * numOfChoice)
      setComputerChoice(data[ind])
    }
  }, [playerChoice])

  console.log(playerChoice.name, computerChoice.name);

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