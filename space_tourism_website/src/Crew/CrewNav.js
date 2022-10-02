import React from 'react'
import useGlobalContext from '../context'

function CrewNav({ crewData }) {

  const { crew, handleCrew } = useGlobalContext()
  return (
    <div className='crew-nav-holder'>
      <nav>
        <ul>
          {crewData.map(item => {
            return <li key={item.name}
              onClick={() => handleCrew(item.name)}
              className={crew === item.name ? 'active' : ''}>
            </li>
          })}
        </ul>
      </nav>
    </div>
  )
}

export default CrewNav
