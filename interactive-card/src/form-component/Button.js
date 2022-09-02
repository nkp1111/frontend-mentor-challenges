export const Button = ({ prop }) => {
  const { submit } = prop
  return (
    <>
      {submit
        ? <button type='submit'>Confirm</button>
        : <button type='submit'>Continue</button>
      }
    </>
  )
}