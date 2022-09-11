import React from 'react'

function LoginBtn() {
  return (
    <div
      className='d-flex
      justify-content-end
      align-items-center
      '>
      <button
        className='my-auto btn'
        style={{ cursor: "pointer", border: 'none' }}
      >
        Login</button>
      <button
      >Register</button>
    </div>
  )
}

export default LoginBtn
