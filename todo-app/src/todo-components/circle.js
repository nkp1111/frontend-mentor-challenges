import React from 'react'
import useGlobalContext from '../context'
import { FiCheck } from 'react-icons/fi'

function Circle({ id }) {
  const { state: { completed } } = useGlobalContext()

  return (
    <span className='circle'
      style={completed.includes(id) ? { background: "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))" } : {}}>
      {completed.includes(id) ? <FiCheck /> : null}
    </span>
  )
}

export default Circle
