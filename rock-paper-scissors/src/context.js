import React, { useContext, useEffect, useState } from 'react'
import data from './assets/data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [modalOpen, setModalOpen] = useState(false)
  const [playerChoice, setPlayerChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [winner, setWinner] = useState('')
  const [startGame, setStartGame] = useState(false)
  const [score, setScore] = useState(0)
  const [resultViewChange, setResultViewChange] = useState(false)
  const [gameMode, setGameMode] = useState('easy')

  useEffect(() => {
    /* For modal */
    if (modalOpen) {
      document.getElementById('root').classList.add('active')
    } else {
      document.getElementById('root').classList.remove('active')
    }
  }, [modalOpen])

  useEffect(() => {
    /* For computer to make random choice */
    if (playerChoice) {
      const numOfChoice = 3
      const ind = Math.floor(Math.random() * numOfChoice)
      setComputerChoice(data[ind])
    }

  }, [playerChoice])

  useEffect(() => {
    /* For finding winner */
    let winnerDecideTimeout = setTimeout(() => {
      let winCondition = { 'paper': ['rock', 'spock'], 'rock': ['scissors', 'lizard'], 'scissors': ['paper', 'lizard'], 'lizard': ['spock', 'paper'], 'spock': ['scissors', 'rock'] }
      if (playerChoice && computerChoice) {
        if (playerChoice.name === computerChoice.name) {
          setWinner('tie')
        } else if (winCondition[playerChoice.name].includes(computerChoice.name)) {
          setWinner('player')
        } else {
          setWinner('computer')
        }
      }
    }, 500)

    return () => clearTimeout(winnerDecideTimeout)

  }, [playerChoice, computerChoice])

  useEffect(() => {
    /* For updating score */
    if (winner === 'player') {
      setScore(score + 1)
    } else if (winner === 'computer') {
      setScore(score - 1)
    }
  }, [winner])

  useEffect(() => {
    /* For restarting the game */
    if (startGame) {
      setTimeout(() => {
        setStartGame(false)
        setPlayerChoice('')
        setComputerChoice('')
        setWinner('')
      }, 50)
    }
  }, [startGame, score])

  /* To adjust grid structure for diff. width */
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

  const handleGameMode = (mode) => {
    if (mode === 'easy') {
      setGameMode('hard')
    } else {
      setGameMode('easy')
    }
  }

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
        gameMode,
        setModalOpen,
        setPlayerChoice,
        setStartGame,
        handleGameMode
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider }
export default useGlobalContext