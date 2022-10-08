import React from 'react'
import useGlobalContext from './context'

function Rule() {

  const { setModalOpen } = useGlobalContext()
  return (
    <button onClick={() => setModalOpen(true)}
      className='rules'>Rules</button>
  )
}

export default Rule
