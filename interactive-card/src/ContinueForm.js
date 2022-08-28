import React from 'react'
import useGlobalContext from './context'

const ContinueForm = () => {

  // const { handleClick } = useGlobalContext
  return (
    <>
      <img src='https://raw.githubusercontent.com/nkp1111/interactive-card/f39d7264a5a04bcd6a2af2c5425a0dcc11ddf860/src/images/icon-complete.svg' alt='correct-sign-logo'
      ></img>
      <p>THANK YOU!</p>
      <p>We've added your card details</p>
      <button
        type='submit'
      // onClick={handleClick}
      >Continue</button>
    </>
  )
}

export default ContinueForm
