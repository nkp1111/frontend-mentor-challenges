import React from 'react'

function FormSection() {
  return (
    <section id="form-section">
      <h2 className='hidden-heading'>Form to shorten links</h2>
      {/* Form section */}
      <form>
        <input
          type="text"
          placeholder='Shorten a link here...'

        />
        <span className='form-btn-holder'>
          <button className='btn'>Shorten It!</button>
        </span>

      </form>
    </section>
  )
}

export default FormSection
