import React from 'react'
import { data } from '../assets/data'

function BottomSection() {
  return (
    <section className='col-md-6'>
      <h2>Summary</h2>
      {data.map(item => {
        return (
          <div className='card d-flex'>
            <img src={item.icon} alt="icon" />
            <p className='category'>{item.category}</p>
            <p className='score'>{item.score}</p>
          </div>
        )
      })}
    </section>
  )
}

export default BottomSection
