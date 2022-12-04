import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const sectionMap = [
    "personalInfo",
    "planSelect",
    "pickAddOns",
    "summary",
    "thankYou",
  ]
  const [section, setSection] = useState(0)

  const handleSection = (section) => {
    setSection(section)
  }

  console.log(section);
  return (
    <AppContext.Provider
      value={{
        section,
        setSection,
        sectionMap,
        handleSection,
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }