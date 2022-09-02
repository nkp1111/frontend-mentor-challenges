export const CardNumber = () => {
  return (
    <>
      <label htmlFor='cardNumber'>Card Number</label>
      <input
        type='number'
        name='cardNumber'
        id='cardNumber'
        min='1000000000000000'
        max='9999999999999999'
        required
      />
    </>
  )
}