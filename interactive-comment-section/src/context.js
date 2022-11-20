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

  const addScore = (cData, id, action) => {
    /* Define scores separately and to increase and decrease */
    let tempScore = {}
    console.log(cData);
    cData.forEach(d => {
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
      } else if (action === 'new') {
        tempScore[id] = 0
      }
    } else {
      setScores(tempScore)
    }
  }

  const replyDataMapping = (cData, id, action) => {
    /* To keep track of replies and their connection to comments */
    let tempReply = {}
    let rep = []
    let tempReplyData = []

    cData.forEach((d, j) => {

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

    if (commentId === 'new') {
      let id = new Date().getTime()

      let newComment = {
        id: id,
        content: comment,
        createdAt: 'Now',
        score: 0,
        user: userData,
        replies: []
      }

      let newData = [...commentData, newComment]

      setCommentData(newData)
      addScore(newData, id, 'new')

    } else {
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

  }

  const deleteComment = (id) => {
    let newCommentData = [...commentData]
    commentData.map((c, i) => {
      if (c.id === id) {
        newCommentData.splice(i, 1)
      }
    })
    setCommentData(newCommentData)
  }

  useEffect(() => {
    handleData(data)
  }, [data])

  useEffect(() => {
    commentData && addScore(commentData)
  }, [commentData])

  useEffect(() => {
    commentData && replyDataMapping(commentData)
  }, [data, commentData])

  useEffect(() => {
    createReply(data)
  }, [])

  useEffect(() => {
    commentData && deleteComment()
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
        deleteComment,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }