import React from 'react'
import useGlobalContext from './context'
import SingleRect from './SingleRect'


function Rect() {

  const { data } = useGlobalContext()

  return (
    <>
      {data.map((item, index) => {
        return (
          <SingleRect prop={{ item, index }}
            key={item.day} />
        )
      })}
    </>
  )
}


export default Rect
