import React from 'react'
import selectPlanData from '../assets/data/selectPlanData'
import PlanControl from '../components/PlanControl'
import SubmitBtn from '../components/SubmitBtn'
import GoBackBtn from '../components/GoBackBtn'

function SelectPlan() {
  return (
    <section>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <form>
        <div>
          <span>
            {selectPlanData.map(item => {
              return (
                <div key={item.id}>
                  <label htmlFor={`plan-${item.plan}`}> {item.plan}</label>
                  <input type="radio" name="plan" value={item.plan} id={`plan-${item.plan}`} />
                </div>
              )
            })}
          </span>
          <PlanControl />
        </div>
        <GoBackBtn />
        <SubmitBtn />
      </form>
    </section>
  )
}

export default SelectPlan
