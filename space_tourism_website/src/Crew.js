import React from 'react'
import data from './assets/data.json'
import useGlobalContext from './context'

function Crew() {
  const { crew, handleCrew } = useGlobalContext()
  let crewData = data.crew
  let newCrew = crew === undefined ? 'Douglas Hurley' : crew

  /* To set a particular crew */
  let particularCrew = crewData.filter(item => {
    return item.name === newCrew ? item : null
  })
  // console.log(crewData, crew, newCrew, particularCrew);
  return (
    <section className='crew'>
      <h2><span>02</span> Meet your crew</h2>
      <div className='crew-info'>
        <div>
          {particularCrew.map(item => {
            return (<article key={item.name}>
              <h3>{item.name}</h3>
              <h4>{item.role}</h4>
              <p>{item.bio}</p>
              <div className='underline'></div>
            </article>)
          })}
        </div>
        <div className='crew-nav-holder'>
          <nav>
            <ul>
              {crewData.map(item => {
                return <li key={item.name}
                  onClick={() => handleCrew(item.name)}>
                  {item.name}
                </li>
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div className='crew-img'>
        <img src='https://github.com/nkp1111/frontend-mentor-challenges/blob/main/space_tourism_website/src/assets/crew/image-douglas-hurley.png?raw=true'
          alt='harley_image'></img>
      </div>
    </section>
  )
}

export default Crew
