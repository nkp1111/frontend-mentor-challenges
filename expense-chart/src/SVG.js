import React from 'react'
import Rect from './Rect'
import useGlobalContext from './context'
import Loading from './Loading'

function SVG() {

  const { width, data, margin, height } = useGlobalContext()

  console.log(data, margin, width);
  return (
    <svg width={width}
      height={height}
    >
      {data
        ? <Rect />
        : <Loading />}
    </svg>
  )
}

export default SVG
