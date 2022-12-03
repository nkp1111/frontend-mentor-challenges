import React from 'react'
import useGlobalContext from '../context'
import { Link } from 'react-router-dom'

function SubmitBtn() {
  {/* Change Page by clicking Link */ }
  const { sectionMap, setSection, section } = useGlobalContext()
  let newSectionName = sectionMap[section + 1]
  return (
    <Link to={`/${newSectionName}`}
      onClick={() => {
        setSection(section + 1)
      }}>
      <button>
        {section === 3 ? "Confirm" : "Next Step"}
      </button>
    </Link>
  )
}

export default SubmitBtn
