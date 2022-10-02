import React from 'react'
import data from './assets/data.json'
import useGlobalContext from './context'

function Crew() {
  const { crew, handleCrew } = useGlobalContext()
  let crewData = data.crews
  let newCrew = crew === undefined ? 'Douglas Hurley' : crew

  /* To set a particular crew */
  // let particularDes = crewData.filter(item => {
  //   return item.name === newCrew ? item : null
  // })
  // console.log(crewData, crew, particularDes);
  return (
    <section className='crew'>
      {/* <h2><span>02</span> Meet your crew</h2>
      <div>
        <img src='https://github.com/nkp1111/frontend-mentor-challenges/blob/main/space_tourism_website/src/assets/crew/image-moon.png?raw=true' alt='moon_image'></img>
      </div>
      <div className='des-info'>
        <div className='des-nav-holder'>
          <nav>
            <ul>
              {data.crews.map(item => {
                return <li key={item.name}
                  onClick={() => handleCrew(item.name)}>
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
      </div> */}
    </section>
  )
}

export default Crew
