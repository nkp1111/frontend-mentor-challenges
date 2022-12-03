import React from 'react'

function PlanControl() {
  return (
    <div>
      <span>Monthly</span>
      <label className="switch">
        <input type="checkbox" id="pack" value="monthly" />
        <span className="slider"></span>
      </label>
      <span>Yearly</span>
    </div>
  )
}

export default PlanControl
