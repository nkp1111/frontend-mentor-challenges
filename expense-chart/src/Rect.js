import React from 'react'
import useGlobalContext from './context'

function Rect() {

  const { data, yScale, height, xScale } = useGlobalContext()

  return (
    <>
      {data.map((item, index) => {
        return (
          <rect
            width={xScale.bandwidth() - 15}
            height={yScale(item.amount)}
            x={xScale.bandwidth() * index}
            y={height - yScale(item.amount)}
            fill='red'
          ></rect>
        )
      })}
    </>

  )
}

export default Rect
