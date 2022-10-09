import React, { useContext, useEffect, useState } from 'react'
import data from './assets/data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [modalOpen, setModalOpen] = useState(true)
  const [playerChoice, setPlayerChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [winner, setWinner] = useState('')
  const [startGame, setStartGame] = useState(false)
  const [score, setScore] = useState(0)
  const [resultViewChange, setResultViewChange] = useState(false)

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
  }, [playerChoice, computerChoice])

  useEffect(() => {
    if (winner === 'player') {
      setScore(score + 1)
    }
  }, [winner])

  useEffect(() => {
    if (startGame) {
      setTimeout(() => {
        setStartGame(false)
        setPlayerChoice('')
        setComputerChoice('')
        setWinner('')
      }, 50)
    }
  }, [startGame, score])

  const handleResultView = (width) => {
    if (width < 405) {
      setResultViewChange(false)
    }
    else if (width < 650) {
      setResultViewChange(true)
    }
    else {
      setResultViewChange(false)
    }
  }

  useEffect(() => {
    let width = window.innerWidth
    handleResultView(width)
    window.addEventListener('resize', () => {
      width = window.innerWidth
      handleResultView(width)
    })
  }, [])

  // console.log(playerChoice.name, computerChoice.name, winner, resultViewChange);

  return (
    <AppContext.Provider
      value={{
        modalOpen,
        playerChoice,
        computerChoice,
        winner,
        startGame,
        score,
        resultViewChange,
        setModalOpen,
        setPlayerChoice,
        setStartGame
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider }
export default useGlobalContext