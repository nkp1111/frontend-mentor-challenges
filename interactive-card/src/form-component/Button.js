export const Button = ({ prop }) => {
  const { submit } = prop
  return (
    <>
      {submit
        ? <button type='submit'>Continue</button>
        : <button type='submit'>Confirm</button>
      }
    </>
  )
}