import React, { useContext, useEffect, useState } from 'react'
import data from './assets/data.json'

const AppContext = React.createContext(null)

const AppProvider = ({ children }) => {

  const [commentData, setCommentData] = useState("")
  const [userData, setUserData] = useState("")
  const [replyData, setReplyData] = useState("")
  const [replyMap, setReplyMap] = useState({})
  const [scores, setScores] = useState({})

  const handleData = (data) => {
    setCommentData(data.comments)
    setUserData(data.currentUser)
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

  const replyDataMapping = (data, id, action) => {
    let tempReply = {}
    let rep = []
    let tempReplyData = []
    data.comments.forEach(d => {
      if (d.replies) {
        tempReplyData.push(...d.replies)
        d.replies.forEach(e => {
          rep.push(e.id)
        });
        tempReply[d.id] = rep
        rep = []
      }
    })

    setReplyMap(tempReply)
    setReplyData(tempReplyData)
  }

  useEffect(() => {
    handleData(data)
  })

  useEffect(() => {
    addScore(data)
  }, [])

  useEffect(() => {
    replyDataMapping(data)
  }, [])

  console.log(replyData, replyMap)
  return (
    <AppContext.Provider
      value={{
        replyData,
        userData,
        commentData,
        scores,
        addScore,
        data,
        replyMap
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }