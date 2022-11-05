import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [countries, setCountries] = useState('')
  const url = 'https://restcountries.com/v3.1'

  const getCountries = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getCountries(url + '/name/a')
  }, [])

  return (
    <AppContext.Provider value={{
      countries
    }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext