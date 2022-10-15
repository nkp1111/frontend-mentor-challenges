import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [days, setDays] = useState(14)
  const [hours, setHours] = useState(1)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  if (minutes === 0) {
    setMinutes(59)
    setHours(hours - 1)
  }

  if (hours < 0) {
    setHours(23)
    setDays(days - 1)
  }

  useEffect(() => {
    const secondChangeInterval = setInterval(() => {
      if (seconds === 0) {
        setSeconds(59)
        setMinutes(minutes - 1)
      } else {
        setSeconds(seconds - 1)
      }
    }, 1000)
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