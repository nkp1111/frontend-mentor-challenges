import React from 'react'
import useGlobalContext from '../context'
import FilterBox from './FilterBox'
import JobHolder from './JobHolder'

function Section() {

  const { tags } = useGlobalContext()

  return (
    <div className='section'>
      {tags.length > 0 && <FilterBox tags={tags} />}
      <JobHolder />
    </div>
  )
}

export default Section
