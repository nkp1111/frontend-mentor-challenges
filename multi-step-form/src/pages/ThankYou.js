import React, { useEffect } from 'react'
import thankYou from '../assets/images/icon-thank-you.svg'
import useGlobalContext from '../context'

function ThankYou() {

  const { section, setSection, sectionMap, handleSection } = useGlobalContext()

  useEffect(() => {
    handleSection(4)
  })

  return (
    <section id="thankYou">
      <div>
        <h2> Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun
          using our platform. If you ever need support, please feel free
          to email us at support@loremgaming.com.
        </p>
      </div>
      <div>
        <img src={thankYou} alt="check mark"></img>
      </div>
    </section>
  )
}

export default ThankYou
