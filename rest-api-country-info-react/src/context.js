import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [countries, setCountries] = useState('')
  let regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  const url = 'https://restcountries.com/v3.1'
  const [countryName, setCountryName] = useState('')
  const [region, setRegion] = useState('')
  const [detail, setDetail] = useState(false)
  const [darkmode, setDarkmode] = useState(true)

  const getCountries = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (countryName !== '') {
      getCountries(url + `/name/${countryName}`)
    } else if (region) {
      getCountries(url + `/region/${region.toLowerCase()}`)
    } else {
      getCountries(url + `/name/a`)
    }
  }, [countryName, region])

  return (
    <AppContext.Provider value={{
      countries,
      regions,
      setCountryName,
      setRegion,
      setDetail,
      detail,
      countryName,
      darkmode,
      setDarkmode
    }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext