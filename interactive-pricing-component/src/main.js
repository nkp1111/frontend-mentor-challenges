import React from 'react'
import { featureData, iconCheck, patternCircles, iconSlider } from './assets/data'

function main() {
  return (
    <main>
      <h1>Simple, traffic-based pricing</h1>
      <p>
        Sign-up for our 30-day trial. No credit card required.
      </p>
      <img src={patternCircles}
        alt="pattern circles"
        aria-hidden="true"
        className='bg-pattern-circle' />

      <div className='card-holder'>

        <div className='card-header'>
          <p className='views'>100K Pageviews</p>
          {/* progress bar  */}
          <div className='progress-bar'>
            <div className='progress-box'>
              <img src={iconSlider} alt="progress moving icon"></img>
            </div>
          </div>
          <p>
            <span className='price'>$16.00</span> /month</p>
        </div>

        <div className='card-neck'>
          <label for="month-year">Monthly Billing</label>
          <div className='switch-box'>
            <input name="month-year" id="month-year" type="checkbox"></input>
            <span className="switch"></span>
          </div>
          <label for="month-year">Yearly Billing</label>
          <span className='discount'>25% discount</span>
        </div>

        <hr></hr>

        <div className='card-body'>
          <ul>
            {featureData.map(item => {
              return (
                <li key={item}>
                  <img src={iconCheck} alt="checkmark icon" />
                  {item}
                </li>
              )
            })}
          </ul>
          <button className='btn'>Start my trial </button>
        </div>
      </div>
    </main>
  )
}

export default main
