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
      {/* <h2><span>03</span> Space launch 101</h2>
      <div>
        {particularTech.map(item => {
          return (<img src={`${item.images.http}`} alt='moon_image'></img>)
        })}
      </div>
      <div className='tech-info'>
        <div className='tech-nav-holder'>
          <nav>
            <ul>
              {data.technologys.map(item => {
                return <li key={item.name}
                  onClick={() => handleTechnology(item.name)}>
                  {item.name}
                </li>
              })}
            </ul>
          </nav>
        </div>
        <div>
          {particularTech.map(item => {
            return (<article key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className='underline'></div>
              <div>
                <div>Avg. distance</div>
                <div>Est. travel time</div>
                <div>{item.distance}</div>
                <div>{item.travel}</div>
              </div>
            </article>)
          })}
        </div>
      </div> */}
    </section>
  )
}

export default Technology
