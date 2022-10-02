import React from 'react'

function TechnologyInfo({ particularTech }) {
  return (
    <div>
      {particularTech.map(item => {
        return (<article key={item.name}>
          <h3>The terminology...</h3>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </article>)
      })}
    </div>
  )
}

export default TechnologyInfo
