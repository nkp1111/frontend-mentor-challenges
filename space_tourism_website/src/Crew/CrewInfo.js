import React from 'react'

function CrewInfo({ particularCrew }) {
  return (
    <div>
      {particularCrew.map(item => {
        return (<article key={item.name}>
          <h3>{item.role}</h3>
          <h4>{item.name}</h4>
          <p>{item.bio}</p>
        </article>)
      })}
    </div>
  )
}

export default CrewInfo
