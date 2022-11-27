import React from 'react'
import useGlobalContext from '../context'
import { FiCheck } from 'react-icons/fi'

function Circle({ id }) {
  const { state: { completed } } = useGlobalContext()

  return (
    <span className='circle'>
      {completed.includes(id) ? <FiCheck /> : null}
    </span>
  )
}

export default Circle
