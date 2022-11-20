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
  const [edit, setEdit] = useState(0)
  const [media, setMedia] = useState(false)

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

  const createReply = (cData, commentId, comment) => {

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

      let newData = [...cData, newComment]

      setCommentData(newData)
      addScore(newData, id, 'new')

    } else if (commentId) {

      let newData = cData.map(comment => {
        comment.replies.map(reply => {
          if (reply.id === commentId) {
            reply.content = text
          }
          return reply
        })
        return comment
      })

      setCommentData(newData)
      setEdit(0)
    }
    else {
      let reply = {
        id: new Date().getTime(),
        content: comment && comment.split(" ").slice(1).join(" "),
        createdAt: "Now",
        score: 0,
        replyingTo: '',
        user: userData
      }

      let newData = cData.map(d => {
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

  console.log(commentData);

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
    commentData && createReply(commentData)
  }, [])

  useEffect(() => {
    commentData && deleteComment()
  }, [])


  const handleMedia = (width) => {
    if (width <= 600) {
      setMedia(true)
    } else {
      setMedia(false)
    }
  }

  useEffect(() => {
    let width = window.innerWidth
    handleMedia(width)
  })

  console.log(media);

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
        edit,
        setEdit,
        media
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }