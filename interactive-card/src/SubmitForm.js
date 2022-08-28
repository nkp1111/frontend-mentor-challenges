import React from 'react'
import useGlobalContext from './context'

const SubmitForm = () => {

  // const { handleClick } = useGlobalContext
  return (
    <>
      <NameInput />
      <CardNumber />
      <div className="input-holder">
        <Expiry />
        <CVC />
      </div>
      <button
        type="submit"
        id="submit"
      // onClick={handleClick}
      >Confirm</button>
    </>
  )
}

const NameInput = () => {
  return (
    <>
      <label htmlFor="card-holder">Cardholder Name</label>
      <input type="text"
        name="card-holder"
        id="card-holder"
        placeholder="e.g. Jane Appleseed"
        required />
    </>
  )
}

const CardNumber = () => {
  return (
    <>
      <label htmlFor="card-number">Card Number</label>
      <input type="number"
        name="card-number"
        id="card-number"
        placeholder="e.g. 1234 5678 9123 0000"
        min='0'
        max='99'
        required />
    </>
  )
}
const Expiry = () => {
  return (
    <div className="expiry-input-holder">
      <label>Exp.&nbsp;Date&nbsp;(MM/YY)<br />
        <input
          type="number"
          min="1"
          max="12"
          name="expiry-month"
          id="expiry-month"
          placeholder="MM"
          required />
        <input type="number"
          min="2"
          max="2"
          name="expiry-year"
          id="expiry-year"
          placeholder="YY"
          required />
      </label>
    </div>
  )
}

const CVC = () => {
  return (
    <div>
      <label htmlFor="cvc">CVC
        <input
          type="number"
          placeholder="e.g. 123" />
      </label>
    </div>
  )
}
export default SubmitForm
