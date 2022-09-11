import React from 'react'
import ComapnyDropdown from './ComapnyDropdown'
import FeatureDropdown from './FeatureDropdown'

function Dropdown({ dropdownName }) {
  const top = 50
  let left
  if (dropdownName === 'feature') {
    left = 140
  }
  else {
    left = 320
  }

  return (
    <section id='dropdown'
      style={{ top, left }}>
      {dropdownName === 'feature'
        ? <FeatureDropdown />
        : <ComapnyDropdown />}
    </section>
  )
}

export default Dropdown
