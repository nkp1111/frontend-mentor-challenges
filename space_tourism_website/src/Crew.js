import React from 'react'
import data from './assets/data.json'
import useGlobalContext from './context'

function Crew() {
  const { crew, handleCrew } = useGlobalContext()
  let crewData = data.crew
  let newCrew = crew === undefined ? 'Anousheh Ansari' : crew

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
              <h3>{item.role}</h3>
              <h4>{item.name}</h4>
              <p>{item.bio}</p>
            </article>)
          })}
        </div>
        <div className='crew-nav-holder'>
          <nav>
            <ul>
              {crewData.map(item => {
                return <li key={item.name}
                  onClick={() => handleCrew(item.name)}>
                </li>
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div className='crew-img'>
        {particularCrew.map(item => {
          return <img src={`${item.images.png}`}
            alt='harley_image' />
        })}
      </div>
    </section>
  )
}

export default Crew
