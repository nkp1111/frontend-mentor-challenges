import React from 'react'
import { FaChevronRight } from '../assets/data'

function SendMessage() {
  return (
    <div className='card-footer'>
      <form action="#">
        <input type="text" name="text" placeholder='Type a message…' />
        <button aria-label='button' type="submit">
          <FaChevronRight />
        </button>
      </form>
    </div>
  )
}

export default SendMessage
