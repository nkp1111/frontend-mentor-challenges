import React from 'react'
import useGlobalContext from '../context'
import { Link } from 'react-router-dom'

function GoBackBtn() {
  {/* Change Page by clicking Link */ }
  const { sectionMap, setSection, section } = useGlobalContext()
  let newSectionName = sectionMap[section - 1]
  return (
    <Link to={`/${newSectionName}`}
      onClick={() => {
        setSection(section - 1)
      }}>
      <button>
        Go Back
      </button>
    </Link>

  )
}

export default GoBackBtn
