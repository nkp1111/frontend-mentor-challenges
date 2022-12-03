import React from 'react'

function PlanControl() {
  {/* Add active class for current pack  */ }
  return (
    <div className="plan-changer">
      <label htmlFor='pack' className='active'>Monthly</label>
      <label className="switch">
        <input type="checkbox" id="pack" value="monthly" />
        <span className="slider"></span>
      </label>
      <label htmlFor='pack'>Yearly</label>
    </div>
  )
}

export default PlanControl
