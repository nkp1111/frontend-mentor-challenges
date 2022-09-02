export const Expirydate = () => {
  return (
    <div className='col'>
      <label>
        Exp. Date (MM/YY)<br />
      </label>
      <div className='d-flex' id='expiry-holder'>
        <input type='number'
          placeholder='MM'
          min='0'
          max='12'
          id='month'
          name='expiry-month'
          required />
        <input type='number'
          placeholder='YY'
          id='year'
          name='expiry-year'
          min='2020'
          max='2050'
          required />
      </div>
    </div>
  )
}