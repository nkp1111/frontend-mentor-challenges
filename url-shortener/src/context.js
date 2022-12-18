import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [fullUrl, setFullUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [allUrls, setAllUrls] = useState([])

  const startUrlShortener = (url, action) => {
    // Allows to shorten url and get full url
    let baseUrl = "https://api.shrtco.de/v2/"
    let toset = "shorten?url="
    let toget = "info?code="
    if (action === "get") {
      fetch(baseUrl + toget + url)
        .then(res => res.json())
        .then(data => setShortUrl(data.result))
    } else {
      fetch(baseUrl + toset + url)
        .then(res => res.json())
        .then(data => {
          setShortUrl(data.result.full_short_link)
        })
        .catch(e => {
          console.log(e);
        })
    }
  }

  useEffect(() => {
    if (fullUrl && shortUrl) {
      let newUrlSet = {
        id: new Date().getTime().toString(),
        fullUrl,
        shortUrl
      }

      setAllUrls([...allUrls, newUrlSet])
      setFullUrl("")
      setShortUrl("")
      setUrlToLocalStorage(allUrls)
    }
  }, [fullUrl, shortUrl])

  const setUrlToLocalStorage = (allUrls) => {
    localStorage.setItem("shortenUrls", JSON.stringify(allUrls))
  }

  const getUrlFromLocalStorage = () => {
    let allUrlsData = JSON.parse(localStorage.getItem("shortenUrls"))
    if (allUrlsData) {
      setAllUrls(allUrlsData)
    }
  }

  useEffect(() => {
    getUrlFromLocalStorage()
  }, [])

  return (
    <AppContext.Provider
      value={{
        fullUrl,
        setFullUrl,
        shortUrl,
        setShortUrl,
        startUrlShortener,
        allUrls,

      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }