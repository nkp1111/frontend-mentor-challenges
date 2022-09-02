import React from 'react'
import BeforeSubmit from './BeforeSubmit'

function FormArea() {

  const [submit, setSubmit] = React.useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(!submit)
  }
  return (
    <div className='mainform'>

      <form onSubmit={handleSubmit}>
        <BeforeSubmit prop={{ submit }} />
      </form>

    </div>
  )
}

export default FormArea
