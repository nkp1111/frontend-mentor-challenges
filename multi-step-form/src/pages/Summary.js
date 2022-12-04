import React, { useEffect } from 'react'
import SubmitBtn from '../components/SubmitBtn'
import GoBackBtn from '../components/GoBackBtn'
import useGlobalContext from '../context'

function Summary() {

  const { section, setSection, sectionMap, handleSection } = useGlobalContext()

  useEffect(() => {
    handleSection(3)
  })

  return (
    <section id="summary">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <form action="/thankYou" method="GET">
        <ul>
          {/*title */}
          <div>
            <li>
              <span>
                <p>Arcade(Monthly)</p>
                <a>change</a>
              </span>
              <span>$9/mon</span>
            </li>
            <hr />
            <li>
              <span>Service</span>
              <span>+$5/mon</span>
            </li>
            <li>
              <span>Service</span>
              <span>+$5/mon</span>
            </li>
          </div>

          {/*total */}
          <li className='total-amount'>
            <span>
              <p>Total (permonth)</p>
            </span>
            <span>+$9/mon</span>
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
