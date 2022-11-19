import React, { useContext, useEffect, useState } from 'react'
import data from './assets/data.json'

const AppContext = React.createContext(null)

const AppProvider = ({ children }) => {

  const [commentData, setCommentData] = useState("")
  const [userData, setUserData] = useState("")
  const [replyData, setReplyData] = useState("")
  const [replyMap, setReplyMap] = useState({})
  const [scores, setScores] = useState({})
  const [addReplyText, setAddReplyText] = useState(0)
  const [text, setText] = useState("")

  const handleData = (data) => {
    /* Set current user data and whole comments */
    setCommentData(data.comments)
    setUserData(data.currentUser)
  }

  const addScore = (data, id, action) => {
    /* Define scores separately and to increase and decrease */
    let tempScore = {}
    data.comments.forEach(d => {
      tempScore[d.id] = d.score
      if (d.replies) {
        d.replies.forEach(e => {
          tempScore[e.id] = e.score
        });
      }
    })

    /* Manipulating scores */
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
    /* To keep track of replies and their connection to comments */
    let tempReply = {}
    let rep = []
    let tempReplyData = []
    data.comments.forEach(d => {
      if (d.replies) {
        d.replies.forEach(e => {
          if (id !== e.id) {
            rep.push(e.id)
            tempReplyData.push(e)
          }
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
        replyMap,
        replyDataMapping,
        addReplyText,
        setAddReplyText,
        text,
        setText
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }