import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section id="error-page">
      <h2>Error 404</h2>
      <p>It's look like you followed a bad link</p><br />
      <Link to="/">
        <button>
          Back to Home
        </button>
      </Link>
    </section>
  )
}

export default Error
