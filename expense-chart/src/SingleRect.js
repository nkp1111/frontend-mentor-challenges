import React from "react";
import useGlobalContext from "./context";

const SingleRect = ({ prop }) => {
  const { yScale, height, xScale, highestVal, margin } = useGlobalContext()

  let softRed = `hsl(10, 79%, 65%)`
  let cyan = `hsl(186, 34%, 60%)`

  const { item, index } = prop
  return (
    <>
      <rect
        key={item.day}
        width={xScale.bandwidth() - 9}
        height={yScale(item.amount)}
        x={xScale.bandwidth() * index + 5}
        y={height - margin.bottom - yScale(item.amount)}
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

          /* Tooltip */
          const tooltip = document.getElementById('tooltip')
          tooltip.style.top = top - 50 + 'px'
          tooltip.style.left = left - 7 + 'px'
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
      <text x={xScale.bandwidth() * (index + 0.5)}
        y={height}
      >{item.day}</text>
    </>
  )
}

export default SingleRect