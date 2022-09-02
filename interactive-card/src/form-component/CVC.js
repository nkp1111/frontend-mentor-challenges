export const CVC = () => {
  return (
    <div className='col'>
      <label htmlFor='cvc'>CVC</label>
      <input type='text'
        placeholder='e.g. 123'
        minLength='3'
        maxLength='3'
        pattern='\d{3}'
        required />
    </div>
  )
}