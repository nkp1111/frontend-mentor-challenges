import React from 'react'
import BeforeSubmit from './BeforeSubmit'

function FormArea() {

  const [submit, setSubmit] = React.useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(!submit)
  }
  return (
    <div className='mainform
    w-100'>

      <form onSubmit={handleSubmit}>
        <BeforeSubmit prop={{ submit }} />
      </form>

    </div>
  )
}

export default FormArea
