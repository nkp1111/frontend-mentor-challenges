import React, { useEffect } from 'react'
import selectPlanData from '../assets/data/selectPlanData'
import PlanControl from '../components/PlanControl'
import SubmitBtn from '../components/SubmitBtn'
import GoBackBtn from '../components/GoBackBtn'
import ArcadeIcon from '../assets/images/icon-arcade.svg'
import AdvacedIcon from '../assets/images/icon-advanced.svg'
import ProIcon from '../assets/images/icon-pro.svg'
import useGlobalContext from '../context'


const images = [ArcadeIcon, AdvacedIcon, ProIcon]

function SelectPlan() {

  const { section, setSection, sectionMap, handleSection } = useGlobalContext()

  useEffect(() => {
    handleSection(1)
  })

  return (
    <section id="planSelect">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <form action="/pickAddOns" method="GET" onSubmit={(e) => {
        let radios = document.querySelectorAll("input[type='radio']")
        let state = false
        radios.forEach(radio => {
          if (radio.checked) {
            state = true
          }
        })
        !state && e.preventDefault()
      }}>
        <div>
          <div>
            {/* add active class to selected plan */}
            {selectPlanData.map(item => {
              return (
                <label htmlFor={`plan-${item.plan}`}
                  key={item.id}
                  className="plan-label">
                  <img src={images[item.id - 1]} alt={`${item.plan}`} />
                  <p className='plan-name'>{item.plan}</p>
                  <p>${item.cost.monthly}/mon</p>
                  <p>2 months free</p>
                  <input type="radio" name="plan" value={item.plan} id={`plan-${item.plan}`} />
                </label>
              )
            })}
          </div>
          <PlanControl />
        </div>
        <div className='btn-holder'>
          <GoBackBtn />
          <SubmitBtn />
        </div>
      </form>
    </section>
  )
}

export default SelectPlan
