import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [days, setDays] = useState(14)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [start, setStart] = useState(false)

  if (minutes <= 0 && start) {
    setMinutes(59)
    setHours(hours - 1)
  }

  if (hours < 0) {
    setHours(23)
    setDays(days - 1)
  }

  const format = (num) => {
    return num < 10 ? '0' + num : num
  }

  useEffect(() => {
    const secondChangeInterval = setInterval(() => {
      if (seconds === 0) {
        setSeconds(59)
        setMinutes(minutes - 1)
        setStart(true)
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
        days,
        format,
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext