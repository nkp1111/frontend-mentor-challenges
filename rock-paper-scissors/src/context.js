import React, { useContext, useEffect, useState } from 'react'
import data from './assets/data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [modalOpen, setModalOpen] = useState(true)
  const [playerChoice, setPlayerChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [winner, setWinner] = useState('')

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

  useEffect(() => {
    let winCondition = { 'paper': 'rock', 'rock': 'scissors', 'scissors': 'paper' }
    if (playerChoice && computerChoice) {
      if (playerChoice.name === computerChoice.name) {
        setWinner('tie')
      } else if (winCondition[playerChoice.name] === computerChoice.name) {
        setWinner('player')
      } else {
        setWinner('computer')
      }
    }
  })

  console.log(playerChoice.name, computerChoice.name, winner);

  return (
    <AppContext.Provider
      value={{
        modalOpen,
        playerChoice,
        computerChoice,
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