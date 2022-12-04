import React, { useEffect } from 'react'
import SubmitBtn from '../components/SubmitBtn'
import GoBackBtn from '../components/GoBackBtn'
import pickAddOnsData from '../assets/data/pickAddOnsData'
import useGlobalContext from '../context'

function PickAddOns() {

  const { handleSection, selectedPack } = useGlobalContext()

  useEffect(() => {
    handleSection(2)
  })

  return (
    <section id="pickAddOns">
      <h2> Pick add-ons</h2>
      <p>  Add-ons help enhance your gaming experience.</p>
      <form action="/summary" method="GET">
        {pickAddOnsData.map(item => {
          return (
            <div key={item.id} className="add-ons-holder">
              <label htmlFor={item.type}>
                <input name={item.type} type="checkbox" id={item.type} />
                <span>
                  <p>{item.type}</p>
                  <p>{item.desc}</p>
                </span>
                <span>+${item.cost.monthly}/{selectedPack === "monthly" ? "mo" : "yr"}</span>
              </label>
            </div>
          )
        })}
        <div className='btn-holder'>
          <GoBackBtn />
          <SubmitBtn />
        </div>
      </form>
    </section>
  )
}

export default PickAddOns
