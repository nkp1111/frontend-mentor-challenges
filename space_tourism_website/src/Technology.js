import React from 'react'
import data from './assets/data.json'
import useGlobalContext from './context'

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
        <div className='tech-nav-holder'>
          <nav>
            <ul>
              {technologyData.map((item, index) => {
                return <li key={item.name}
                  onClick={() => handleTechnology(item.name)}>
                  {index}
                </li>
              })}
            </ul>
          </nav>
        </div>
        <div>
          {particularTech.map(item => {
            return (<article key={item.name}>
              <h3>The terminology...</h3>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </article>)
          })}
        </div>
      </div>
      <div>
        {particularTech.map(item => {
          return (<img
            key={item.name}
            src={`${item.images.portrait}`}
            alt='moon_image'></img>)
        })}
      </div>
    </section>
  )
}

export default Technology
