import React from 'react'
import useGlobalContext from './context'
import { select, append } from 'd3'

function Rect() {

  const { data, yScale, height, xScale, highestVal } = useGlobalContext()

  let softRed = `hsl(10, 79%, 65%)`
  let cyan = `hsl(186, 34%, 60%)`

  return (
    <>
      {data.map((item, index) => {
        return (
          <rect
            key={item.day}
            width={xScale.bandwidth() - 10}
            height={yScale(item.amount)}
            x={xScale.bandwidth() * index + 10}
            y={height - yScale(item.amount)}
            ry='5'
            rx='5'
            fill={item.amount !== highestVal
              ? softRed
              : cyan}
            onMouseOver={(e) => {
              // targeted bar
              const target = e.target.getBoundingClientRect()
              const top = target.top
              const left = target.left

              const tooltip = document.getElementById('tooltip')

              tooltip.style.top = top - 50 + 'px'
              tooltip.style.left = left + 'px'
              tooltip.style.opacity = 0.9
              tooltip.innerText = '$ ' + item.amount
            }}
            onMouseLeave={(e) => {
              const tooltip = document.getElementById('tooltip')
              tooltip.style.opacity = 0
              tooltip.innerText = ''
            }}

          >
          </rect>
        )
      })}
    </>

  )
}

export default Rect
