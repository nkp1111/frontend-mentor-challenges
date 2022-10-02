import React from 'react'

function TechnologyImg({ particularTech }) {
  return (
    <div>
      {particularTech.map(item => {
        return (<img
          key={item.name}
          src={`${item.images.portrait}`}
          alt={item.name}
        ></img>)
      })}
    </div>
  )
}

export default TechnologyImg
