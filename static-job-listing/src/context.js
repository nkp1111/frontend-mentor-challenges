import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [tags, setTags] = useState([])

  const removeOneTag = (tag) => {
    // remove tags from the list 
    const modifyTags = tags.filter(tagItem => tagItem !== tag)
    setTags(modifyTags)
  }


  useEffect(() => {
    const addTags = (e) => {
      // add tags to the tag list
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
        removeOneTag,
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider }
export default useGlobalContext