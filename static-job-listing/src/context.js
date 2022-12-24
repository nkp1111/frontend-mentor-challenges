import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [tags, setTags] = useState([])

  useEffect(() => {

    const addTags = (e) => {
      e.stopPropagation()
      let newTag = [...tags, e.target.innerText]
      newTag = newTag.filter((tag, ind) => newTag.indexOf(tag) === ind)
      setTags(newTag)
    }

    const tagEl = document.querySelectorAll(".job-tags li")
    tagEl.forEach(tag => {
      tag.addEventListener("click", (e) => addTags(e))
    })

    return () => {
      tagEl.forEach(tag => {
        tag.removeEventListener("click", (e) => addTags(e))
      })
    }
  }, [tags])

  return (
    <AppContext.Provider
      value={{
        tags,
        setTags,
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider }
export default useGlobalContext