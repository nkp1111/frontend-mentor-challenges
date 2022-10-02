import React from 'react'

function DestinationInfo({ particularDes }) {
  return (
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
  )
}

export default DestinationInfo
