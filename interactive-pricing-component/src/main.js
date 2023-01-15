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

        <div className='card-header row'>
          <p className='views col-md-6'>100K Pageviews</p>
          {/* progress bar  */}
          <div className='progress-bar col'>
            <div className='progress-box'>
              <img src={iconSlider} alt="progress moving icon"></img>
            </div>
          </div>
          <p className='price-holder  col-md-6'>
            <span className='price'>$16.00</span> /month</p>
        </div>

        <div className='card-neck'>
          <label htmlFor="month-year">Monthly Billing</label>
          <div className='switch-box'>
            <input name="month-year" id="month-year" type="checkbox" className='d-none' />
            <span className="switch"></span>
          </div>
          <label htmlFor="month-year">Yearly Billing</label>
          <p className='discount'>25% <span className='hid-discount'>discount</span></p>
        </div>

        <hr></hr>

        <div className='card-body'>
          <ul className='d-flex 
          flex-column 
          justify-content-center 
          align-items-center'>
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
