export const Name = () => {
  return (
    <>
      <label htmlFor='name'>Cardholder Name</label>
      <input type='text'
        placeholder='e.g. Jane Appleseed'
        name='name'
        id='name'
        required />
    </>
  )
}