import React, { useContext, useEffect, useState } from 'react'
import data from './assets/data.json'

const AppContext = React.createContext(null)

const AppProvider = ({ children }) => {

  const [commentData, setCommentData] = useState("")
  const [userData, setUserData] = useState("")
  const [replyData, setReplyData] = useState("")
  const [scores, setScores] = useState({})

  const handleData = (data) => {
    setCommentData(data.comments)
    setUserData(data.currentUser)
    setReplyData(data.comments[1].replies)
  }

  const addScore = (data, id, action) => {
    let tempScore = {}
    data.comments.forEach(d => {
      tempScore[d.id] = d.score
      if (d.replies) {
        d.replies.forEach(e => {
          tempScore[e.id] = e.score
        });
      }
    })

    if (id) {
      tempScore = { ...scores }
      if (action === 'add') {
        tempScore[id] += 1
        setScores(tempScore)
      } else if (action === 'minus') {
        tempScore[id] -= 1
        setScores(tempScore)
      }
    } else {
      setScores(tempScore)
    }
  }

  useEffect(() => {
    handleData(data)
  })

  useEffect(() => {
    addScore(data)
  }, [])


  return (
    <AppContext.Provider
      value={{
        replyData,
        userData,
        commentData,
        scores,
        addScore,
        data
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }