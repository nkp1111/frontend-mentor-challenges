import React from 'react'

function CrewImg({ particularCrew }) {
  return (
    <div className='crew-img'>
      {particularCrew.map(item => {
        return <img key={item.name}
          src={`${item.images.http}`}
          alt={item.name}
        />
      })}
    </div>
  )
}

export default CrewImg
