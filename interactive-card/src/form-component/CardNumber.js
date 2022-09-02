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
        placeholder='e.g. 9591 6489 6389 1012'
        required
      />
    </>
  )
}