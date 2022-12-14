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

  const { handleSection, selectedPlan, selectedPack, formatDuration } = useGlobalContext()

  useEffect(() => {
    handleSection(1)
  })

  let newDuration = formatDuration(selectedPack)

  return (
    <section id="planSelect">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <form action="/pickAddOns" method="GET">
        <div>
          <div>
            {selectPlanData.map(item => {
              return (
                <label htmlFor={`plan-${item.plan}`}
                  key={item.id}
                  className={item.plan === selectedPlan
                    ? "plan-label active"
                    : "plan-label"}>
                  <img src={images[item.id - 1]} alt={`${item.plan}`} />
                  <div>
                    <p className='plan-name'>{item.plan}</p>
                    <p>${item.cost[selectedPack]} / {newDuration}</p>
                  </div>

                  {selectedPack === "yearly" && <p> 2 months free</p>}
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
