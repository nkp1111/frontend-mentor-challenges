import React from 'react'
import data from '../assets/data.json'
import useGlobalContext from '../context'
import DestinationImg from './DestinationImg'
import DestinationInfo from './DestinationInfo'
import DestinationNav from './DestinationNav'

function Destination() {
  const { destination } = useGlobalContext()
  let destinationData = data.destinations
  let newDestination = destination === undefined ? 'Moon' : destination

  /* To set a particular destination */
  let particularDes = destinationData.filter(item => {
    return item.name === newDestination ? item : null
  })

  return (
    <section className='destination'>
      <h2><span>01</span> Pick your destination</h2>
      <DestinationImg particularDes={particularDes} />
      <div className='des-info'>
        <DestinationNav destinationData={destinationData} />
        <DestinationInfo particularDes={particularDes} />
      </div>
    </section>
  )
}

export default Destination
