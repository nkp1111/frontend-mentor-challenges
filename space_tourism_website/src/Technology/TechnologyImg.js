import React from 'react'
import useGlobalContext from '../context'

function TechnologyImg({ particularTech }) {

  const { imageMode } = useGlobalContext()
  return (
    <div>
      {particularTech.map(item => {
        return (<img
          key={item.name}
          src={imageMode ? `${item.images.landscape}` : `${item.images.portrait}`}
          alt={item.name}
        ></img>)
      })}
    </div>
  )
}

export default TechnologyImg
