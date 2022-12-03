import React from 'react'
import SubmitBtn from '../components/SubmitBtn'
import GoBackBtn from '../components/GoBackBtn'
import pickAddOnsData from '../assets/data/pickAddOnsData'

function PickAddOns() {
  return (
    <section>
      <h2> Pick add-ons</h2>
      <p>  Add-ons help enhance your gaming experience.</p>
      <form>
        {pickAddOnsData.map(item => {
          return (
            <div key={item.id}>
              <label for={item.type}>
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

        <SubmitBtn />
        <GoBackBtn />
      </form>
    </section>
  )
}

export default PickAddOns
