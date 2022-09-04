import React from 'react'
import SVG from './SVG'
import Bottom from './Bottom'

function Main() {
  return (
    <main>
      <h2>Spending - Last 7 days</h2>
      <SVG />
      <div className='underline' />
      <Bottom />
    </main>
  )
}

export default Main
