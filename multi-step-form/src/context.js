import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [section, setSection] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState("arcade")
  const [selectedPack, setSelectedPack] = useState("yearly")
  const [addOns, setAddOns] = useState([])

  const sectionMap = [
    "personalInfo",
    "planSelect",
    "pickAddOns",
    "summary",
    "thankYou",
  ]

  const handleSection = (section) => {
    setSection(section)
  }

  console.log(selectedPack);

  return (
    <AppContext.Provider
      value={{
        section,
        setSection,
        sectionMap,
        handleSection,
        selectedPlan,
        setSelectedPlan,
        selectedPack,
        setSelectedPack,
        addOns,
        setAddOns,
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }