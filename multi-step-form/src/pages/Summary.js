import React, { useEffect } from 'react'
import SubmitBtn from '../components/SubmitBtn'
import GoBackBtn from '../components/GoBackBtn'
import useGlobalContext from '../context'
import pickAddOnsData from '../assets/data/pickAddOnsData'
import selectPlanData from '../assets/data/selectPlanData'
import { Link } from 'react-router-dom'

function Summary() {

  const { handleSection, selectedPack, selectedPlan, addOns, formatDuration } = useGlobalContext()

  useEffect(() => {
    handleSection(3)
  })

  /* total cost for final cost */
  let finalCost = []



  let newDuration = formatDuration(selectedPack)

  /* Cost for plan */
  let planCost
  selectedPlan && selectPlanData.forEach(plan => {
    if (plan["plan"] === selectedPlan) {
      planCost = plan["cost"][selectedPack]
      finalCost.push(+planCost)
    }
  })

  /* Extra cost for add ons */
  const setAddOnCost = (item) => {
    let cost
    pickAddOnsData.forEach(addOn => {
      if (addOn["type"] === item) {
        cost = addOn["cost"][selectedPack]
      }
    })
    finalCost.push(+cost)
    return cost
  }

  return (
    <section id="summary">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <form action="/thankYou" method="GET">
        <ul>
          {/*title */}
          <div>
            <li>
              <div>
                <p style={{ textTransform: "capitalize" }}>{selectedPlan} ({selectedPack})</p>
                <Link to="/planSelect">change</Link>
              </div>
              <span>${planCost}/{newDuration}</span>
            </li>
            <hr />
            {addOns.map(item => {
              let addOnCost = setAddOnCost(item)
              return (
                <li key={item}>
                  <span>{item}</span>
                  <span>+${addOnCost}/{newDuration}</span>
                </li>
              )
            })}

          </div>
          {/*total */}
          <li className='total-amount'>
            <div>
              <p>Total {selectedPack === "monthly" ? "(per month)" : "(per year)"}</p>
            </div>
            <span>+${finalCost.reduce((fin, acc) => fin + acc, 0)}/ {selectedPack === "monthly" ? "mo" : "yr"}</span>
          </li>
        </ul>
        <div className='btn-holder'>
          <GoBackBtn />
          <SubmitBtn />
        </div>
      </form>
    </section>
  )
}

export default Summary
