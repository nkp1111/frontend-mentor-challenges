import React from 'react'
import useGlobalContext from '../context'

function FormSection() {

  const { fullUrl, setFullUrl, startUrlShortener } = useGlobalContext()
  return (
    <section id="form-section">
      <h2 className='hidden-heading'>Form to shorten links</h2>
      {/* Form section */}
      <form onSubmit={(e) => {
        e.preventDefault()
        startUrlShortener(fullUrl)
      }}>
        <input
          type="text"
          placeholder='Shorten a link here...'
          value={fullUrl}
          onChange={(e) => {
            setFullUrl(e.target.value)
          }}
        />
        <button className='btn'>Shorten It!</button>
      </form>
    </section>
  )
}

export default FormSection
