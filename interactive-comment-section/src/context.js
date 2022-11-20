import React, { useContext, useEffect, useState } from 'react'
import rawdata from './assets/data.json'

const AppContext = React.createContext(null)

const AppProvider = ({ children }) => {

  const [data, setData] = useState(rawdata)
  const [commentData, setCommentData] = useState("")
  const [userData, setUserData] = useState("")
  const [replyData, setReplyData] = useState("")
  const [replyMap, setReplyMap] = useState({})
  const [scores, setScores] = useState({})
  const [addReplyText, setAddReplyText] = useState(0)
  const [text, setText] = useState("")
  const [deleteModal, setDeleteModal] = useState(false)
  const [modifyId, setModifyId] = useState(0)

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
        d.replies.forEach((e, i) => {
          if (id !== e.id) {
            rep.push(e.id)
            tempReplyData.push(e)
          } else {
            d.replies.splice(i, 1)
          }
        });
        tempReply[d.id] = rep
        rep = []
      }
    })

    setReplyMap(tempReply)
    setReplyData(tempReplyData)
  }

  const createReply = (data, commentId, comment) => {

    let reply = {
      id: new Date().getTime(),
      content: comment && comment.split(" ").slice(1).join(" "),
      createdAt: "Now",
      score: 0,
      replyingTo: '',
      user: userData
    }

    let newData = data.comments.map(d => {
      if (d.id === commentId) {
        reply["replyingTo"] = d.user.username
        d.replies.push(reply)
      }
      return d
    })

    setCommentData(newData)
  }

  useEffect(() => {
    handleData(data)
  }, [data])

  useEffect(() => {
    addScore(data)
  }, [])

  useEffect(() => {
    replyDataMapping(data)
  }, [data, commentData])

  useEffect(() => {
    createReply(data)
  }, [])

  // console.log(data)
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
        setText,
        deleteModal,
        setDeleteModal,
        modifyId,
        setModifyId,
        createReply,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }