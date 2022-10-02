import React from 'react'
import data from '../assets/data.json'
import useGlobalContext from '../context'
import CrewImg from './CrewImg'
import CrewInfo from './CrewInfo'
import CrewNav from './CrewNav'

function Crew() {
  const { crew } = useGlobalContext()
  let crewData = data.crew
  let newCrew = crew === undefined ? 'Douglas Hurley' : crew

  /* To set a particular crew */
  let particularCrew = crewData.filter(item => {
    return item.name === newCrew ? item : null
  })

  return (
    <section className='crew'>
      <h2><span>02</span> Meet your crew</h2>
      <div className='crew-info'>
        <CrewInfo particularCrew={particularCrew} />
        <CrewNav crewData={crewData} />
      </div>
      <CrewImg particularCrew={particularCrew} />
    </section>
  )
}

export default Crew
