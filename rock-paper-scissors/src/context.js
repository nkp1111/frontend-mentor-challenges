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
    /* For modal */
    if (modalOpen) {
      document.getElementById('root').classList.add('active')
    } else {
      document.getElementById('root').classList.remove('active')
    }
  }, [modalOpen])

  useEffect(() => {
    /* For computer to make random choice */
    let computerChoiceTimeout = setTimeout(() => {
      if (playerChoice) {
        const numOfChoice = 3
        const ind = Math.floor(Math.random() * numOfChoice)
        setComputerChoice(data[ind])
      }
    }, 500)

    return () => clearTimeout(computerChoiceTimeout)

  }, [playerChoice])

  useEffect(() => {
    /* For finding winner */
    let winnerDecideTimeout = setTimeout(() => {
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
    }, 100)

    return () => clearTimeout(winnerDecideTimeout)

  }, [playerChoice, computerChoice])

  useEffect(() => {
    /* For updating score */
    if (winner === 'player') {
      setScore(score + 1)
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