import React from 'react'
import data from '../assets/data.json'
import useGlobalContext from '../context'
import TechnologyImg from './TechnologyImg'
import TechnologyInfo from './TechnologyInfo'
import TechnologyNav from './TechnologyNav'

function Technology() {

  const { technology, handleTechnology } = useGlobalContext()
  let technologyData = data.technology
  let newTechnology = technology === undefined ? 'Launch vehicle' : technology

  /* To set a particular technology */
  let particularTech = technologyData.filter(item => {
    return item.name === newTechnology ? item : null
  })
  console.log(technologyData, technology, particularTech);
  return (
    <section className='technology'>
      <h2><span>03</span> Space launch 101</h2>
      <div className='tech-info'>
        <TechnologyNav technologyData={technologyData} />
        <TechnologyInfo particularTech={particularTech} />
      </div>
      <TechnologyImg particularTech={particularTech} />
    </section>
  )
}

export default Technology
