import React, { useEffect } from 'react'
import useGlobalContext from '../context'

function PlanControl() {
  {/* Add active class for current pack  */ }
  const { selectedPack, setSelectedPack } = useGlobalContext()

  useEffect(() => {
    const slider = document.querySelector(".slider")
    if (slider) {
      if (selectedPack === "monthly") {
        slider.style.transform = "translateX(0%)"
      }
      if (selectedPack === "yearly") {
        slider.style.transform = "translateX(140%)"
      }
    }

  })

  return (
    <div className="plan-changer">
      <label htmlFor='pack' className={selectedPack === "monthly" ? "active" : ""}>Monthly</label>
      <label className="switch"
        onClick={(e) => {
          let newSelectedPack = selectedPack === "monthly"
            ? "yearly" : "monthly"
          setSelectedPack(newSelectedPack)
          e.preventDefault()
        }}>
        <input type="checkbox" id="pack" value="monthly" />
        <span className="slider"></span>
      </label>
      <label htmlFor='pack' className={selectedPack === "yearly" ? "active" : ""}>Yearly</label>
    </div>
  )
}

export default PlanControl
