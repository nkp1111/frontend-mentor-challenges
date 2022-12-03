import React from 'react'
import checkmark from '../assets/images/icon-checkmark.svg'

function ThankYou() {

  return (
    <section>
      <div>
        <h2> Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun
          using our platform. If you ever need support, please feel free
          to email us at support@loremgaming.com.
        </p>
      </div>
      <div>
        <img src={checkmark} alt="check mark" style={{ width: "50px", height: "50px", background: "black" }}></img>
      </div>
    </section>
  )
}

export default ThankYou
