import React from 'react'
import SubmitBtn from '../components/SubmitBtn'
import GoBackBtn from '../components/GoBackBtn'
import pickAddOnsData from '../assets/data/pickAddOnsData'

function PickAddOns() {
  return (
    <section id="pickAddOns">
      <h2> Pick add-ons</h2>
      <p>  Add-ons help enhance your gaming experience.</p>
      <form>
        {pickAddOnsData.map(item => {
          return (
            <div key={item.id}>
              <label htmlFor={item.type}>
                <input name={item.type} type="checkbox" placeholder="e.g. Stephen King" />
                <span>
                  <span>
                    <p>{item.type}</p>
                    <p>{item.desc}</p>
                  </span>
                  <span>{item.cost.monthly}</span>
                </span>
              </label>
            </div>
          )
        })}

        <GoBackBtn />
        <SubmitBtn />
      </form>
    </section>
  )
}

export default PickAddOns
