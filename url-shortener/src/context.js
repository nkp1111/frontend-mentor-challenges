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
        .then(data => setShortUrl(data.result))
    }

  }

  console.log(shortUrl);
  return (
    <AppContext.Provider
      value={{
        fullUrl,
        setFullUrl,
        shortUrl,
        setShortUrl,
        startUrlShortener,

      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }