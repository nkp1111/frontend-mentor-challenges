import React, { useContext, useState, useEffect } from 'react'

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

  /* section 1 */
  const showMessage = () => {
    /* To show custom message on leaving a field empty */
    let submitBtn = document.querySelector("#personalInfo .submit-btn")
    let inputs = document.querySelectorAll("#personalInfo form input")
    submitBtn && submitBtn.addEventListener("click", () => {
      inputs.forEach(input => {
        if (!input.value) {
          input.parentElement.classList.add("empty")
        } else {
          input.parentElement.classList.remove("empty")
        }
      })
    })
  }

  const removeMessage = () => {
    /* remove message with input */
    let inputs = document.querySelectorAll("#personalInfo form input")
    inputs.forEach(input => {
      input.addEventListener("input", (e) => {
        input.parentElement.classList.remove("empty")
      })
    })
  }

  useEffect(() => {
    showMessage()
    removeMessage()
  }, [])


  /* section 2 */
  useEffect(() => {
    /* To set active plan */
    let radios = document.querySelectorAll("#planSelect form input[type='radio']")
    radios && radios.forEach(radio => {
      radio.addEventListener("change", (e) => {
        if (radio.checked) {
          setSelectedPlan(radio.value)
        }
      })
    })
  })

  /* section 4 */
  const formatDuration = (pack) => {
    /* Format duration: month as mo and year as yr*/
    return pack === "monthly" ? "mo" : "yr"
  }

  /* localStorage */
  const setLocalStorage = () => {
    /* Every submit button click will save info in localstorage */
    let values = {
      plan: selectedPlan,
      pack: selectedPack,
      addOn: addOns
    }
    localStorage.setItem("multi-step-form", JSON.stringify(values))
  }

  const setValuesToState = () => {
    /* To keep state values from changing after page change */
    let newValues = JSON.parse(localStorage.getItem("multi-step-form"))
    if (newValues) {
      setAddOns(newValues.addOn)
      setSelectedPack(newValues.pack)
      setSelectedPlan(newValues.plan)
    }
  }

  useEffect(() => {
    setValuesToState()
  }, [section])

  console.log(selectedPlan, selectedPack, addOns);
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
        setLocalStorage,
        formatDuration,
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }