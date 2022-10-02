import React from 'react'

function DestinationImg({ particularDes }) {
  return (
    <div>
      {particularDes.map(item => {
        return (<img
          key={item.name}
          src={`${item.images.http}`}
          alt={item.name}></img>)
      })}
    </div>
  )
}

export default DestinationImg
