import React, { useContext, useEffect, useState } from 'react'
import data from './assets/data.json'

const AppContext = React.createContext(null)

const AppProvider = ({ children }) => {

  const [commentData, setCommentData] = useState("")
  const [userData, setUserData] = useState("")
  const [replyData, setReplyData] = useState("")

  const handleData = (data) => {
    setCommentData(data.comments)
    setUserData(data.currentUser)
    setReplyData(data.comments[1].replies)
  }

  useEffect(() => {
    handleData(data)
  })

  return (
    <AppContext.Provider
      value={{
        replyData,
        userData,
        commentData
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }