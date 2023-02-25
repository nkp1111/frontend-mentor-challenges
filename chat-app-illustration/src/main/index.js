import React from 'react'
import CardIllustration from './CardIllustration'
import "./main.css"

function index() {
  return (
    <main>
      <h1> Simple booking</h1>
      <p>
        Stay in touch with our dog walkers through the chat interface. This makes it easy to
        discuss arrangements and make bookings. Once the walk has been completed you can rate
        your walker and book again all through the chat.
      </p>

      <div className='back-strip'></div>

      <CardIllustration />
    </main>
  )
}

export default index
