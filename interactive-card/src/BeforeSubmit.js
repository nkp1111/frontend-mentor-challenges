import React from 'react'
import { Name } from './form-component/Name'
import { CardNumber } from './form-component/CardNumber'
import { Expirydate } from './form-component/Expirydate'
import { CVC } from './form-component/CVC'
import { Button } from './form-component/Button'
import { ThankYouForm } from './form-component/ThanYouForm'

function BeforeSubmit({ prop }) {
  const { submit } = prop

  return (
    <>
      {submit
        ? <FillUpForm />
        : <ThankYouForm />}
      <Button prop={{ submit }} />
    </>
  )
}
const FillUpForm = () => {
  return (
    <>
      <Name />
      <CardNumber />
      <div className='row'>
        <Expirydate />
        <CVC />
      </div>
    </>
  )
}

export default BeforeSubmit
