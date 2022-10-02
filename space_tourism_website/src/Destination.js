import React from 'react'
import data from './assets/data.json'
import useGlobalContext from './context'

function Destination() {
  const { destination, handleDestination } = useGlobalContext()
  let destinationData = data.destinations
  let particularDes = destinationData.filter(item => {
    return item.name === destination ? item : null
  })
  console.log(destinationData, destination, particularDes);
  return (
    <section className='destination'>
      <h2><span>01</span> Pick your destination</h2>
      <div>
        <img src='https://github.com/nkp1111/frontend-mentor-challenges/blob/main/space_tourism_website/src/assets/destination/image-moon.png?raw=true' alt='moon_image'></img>
      </div>
      <div className='des-info'>
        <div className='des-nav-holder'>
          <nav>
            <ul>
              {data.destinations.map(item => {
                return <li key={item.name}
                  onClick={() => handleDestination(item.name)}>
                  {item.name}
                </li>
              })}
            </ul>
          </nav>
        </div>
        <div>
          {particularDes.map(item => {
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
      </div>
    </section>
  )
}

export default Destination
