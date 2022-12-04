import React from 'react'
import useGlobalContext from '../context'

function SubmitBtn() {
  {/* Change Page by clicking Link */ }
  const { sectionMap, setSection, section } = useGlobalContext()

  return (
    <button className="submit-btn">
      {section === 3 ? "Confirm" : "Next Step"}
    </button>
  )
}

export default SubmitBtn
