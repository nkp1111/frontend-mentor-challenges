import React from 'react'
import useGlobalContext from '../context'

function TechnologyNav({ technologyData }) {

  const { technology, handleTechnology } = useGlobalContext()
  return (
    <div className='tech-nav-holder'>
      <nav>
        <ul>
          {technologyData.map((item, index) => {
            return <li key={item.name}
              onClick={() => handleTechnology(item.name)}
              className={item.name === technology ? 'active' : ''}>
              {index}
            </li>
          })}
        </ul>
      </nav>
    </div>
  )
}

export default TechnologyNav
