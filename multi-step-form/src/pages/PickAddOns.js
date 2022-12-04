import React, { useEffect } from 'react'
import SubmitBtn from '../components/SubmitBtn'
import GoBackBtn from '../components/GoBackBtn'
import pickAddOnsData from '../assets/data/pickAddOnsData'
import useGlobalContext from '../context'

function PickAddOns() {

  const { handleSection, selectedPack, setAddOns } = useGlobalContext()

  useEffect(() => {
    handleSection(2)
  })

  useEffect(() => {
    const checkboxes = document.querySelectorAll("#pickAddOns form input")
    let newAddOns = []
    checkboxes && checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          newAddOns.push(checkbox.id)
        } else {
          console.log(newAddOns);
          newAddOns = newAddOns.filter(item => item !== checkbox.id)
          console.log(newAddOns);
        }
      })
    })
    setAddOns(newAddOns)
  }, [setAddOns])

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
