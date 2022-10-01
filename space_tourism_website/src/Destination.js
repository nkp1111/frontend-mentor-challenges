import React from 'react'
import data from './assets/data.json'

function Destination() {
  console.log(data.destinations);
  return (
    <section className='destination'>
      <h2><span>01</span> Pick your destination</h2>
      <div>
        <img src='https://github.com/nkp1111/frontend-mentor-challenges/blob/main/space_tourism_website/src/assets/destination/image-moon.png?raw=true' alt='moon_image'></img>
      </div>
      <div>
        <nav>
          <ul>
            {data.destinations.map(item => {
              return <li key={item.name}>
                {item.name}
              </li>
            })}
          </ul>
        </nav>
        <h3>Moon</h3>
      </div>
    </section>
  )
}

export default Destination
