import React, { useEffect } from 'react'
import useGlobalContext from '../context'

function PlanControl() {
  {/* Add active class for current pack  */ }
  const { selectedPack, setSelectedPack, } = useGlobalContext()

  const changePack = (pack) => {
    if (pack === "monthly") {
      setSelectedPack("yearly")
    } else {
      setSelectedPack("monthly")
    }
  }

  useEffect(() => {
    const slider = document.querySelector(".slider")
    if (selectedPack === "monthly") {
      slider.style.transform = "translateX(0%)"
    }
    if (selectedPack === "yearly") {
      slider.style.transform = "translateX(200%)"
    }
  })

  return (
    <div className="plan-changer">
      <label htmlFor='pack' className={selectedPack === "monthly" ? "active" : ""}>Monthly</label>
      <label className="switch" onClick={(e) => {
        changePack(selectedPack)
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
