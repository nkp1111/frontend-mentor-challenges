import React from 'react'
import { featureData } from './assets/data'

function main() {
  return (
    <main>
      <h1>Simple, traffic-based pricing</h1>
      <p>
        Sign-up for our 30-day trial. No credit card required.
      </p>

      <div className='card-holder'>
        <div className='card-header'>
          <p>100K Pageviews</p>
          <div></div>
          <p>$16.00 /month</p>
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
                  <img src={ } alt="checkmark icon"></img>
                  {item}
                </li>
              )
            })}
          </ul>

        </div>
      </div>
    </main>
  )
}

export default main
