import React from 'react'
import { data } from '../assets/data'

function BottomSection() {
  return (
    <section className='col-md-6 score-section'>
      <h2 className='section-heading'>Summary</h2>
      {data.map(item => {
        return (
          <div key={item.category}
            className={`card d-flex flex-row align-items-center cat-${item.category.toLowerCase()}`}>
            <img src={item.icon} alt="icon" />
            <p className='category'>{item.category}</p>
            <p className='score ms-auto'>{item.score}</p>
          </div>
        )
      })}

      <button className='btn w-100'>Continue</button>
    </section>
  )
}

export default BottomSection
