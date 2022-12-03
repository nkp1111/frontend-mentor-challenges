import React from 'react'
import SubmitBtn from '../components/SubmitBtn'
import GoBackBtn from '../components/GoBackBtn'

function Summary() {
  return (
    <section>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <form>
        <ul>
          {/*title */}
          <li>
            <span>
              <p>Arcade(Monthly)</p>
              <a>change</a>
            </span>
            <span>$9/mon</span>
          </li>

          <li>
            <span>Service</span>
            <span>$5/mon</span>
          </li>
          <li>
            <span>Service</span>
            <span>$5/mon</span>
          </li>

          {/*total */}
          <li>
            <span>
              <p>Total permonth</p>
            </span>
            <span>$9/mon</span>
          </li>
        </ul>
        <GoBackBtn />
        <SubmitBtn />
      </form>
    </section>
  )
}

export default Summary
