import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [days, setDays] = useState(14)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const secondChangeInterval = setInterval(() => {
      if (seconds === 0) {
        setSeconds(59)
        setMinutes(minutes - 1)
      } else {
        setSeconds(seconds - 1)
      }
    }, 100)
    return () => clearInterval(secondChangeInterval)
  })

  return (
    <AppContext.Provider
      value={{
        seconds,
        minutes,
        hours,
        days
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext