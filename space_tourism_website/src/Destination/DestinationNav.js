import React from 'react'
import useGlobalContext from '../context'

function DestinationNav({ destinationData }) {

  const { destination, handleDestination } = useGlobalContext()
  return (
    <div className='des-nav-holder'>
      <nav>
        <ul>
          {destinationData.map(item => {
            return <li key={item.name}
              onClick={() => handleDestination(item.name)}
              className={item.name === destination ? 'active' : ""}>
              {item.name}
            </li>
          })}
        </ul>
      </nav>
    </div>
  )
}

export default DestinationNav
