import React from 'react'
import useGlobalContext from '../context'
import FilterBox from './FilterBox'
import JobHolder from './JobHolder'

function Section() {

  const { filters } = useGlobalContext()
  return (
    <div className='section'>
      {filters.length > 0 && <FilterBox filters={filters} />}
      <JobHolder />
    </div>
  )
}

export default Section
