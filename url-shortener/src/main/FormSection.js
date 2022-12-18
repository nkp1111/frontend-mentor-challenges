import React from 'react'

function FormSection() {
  return (
    <section>
      <h2 className='hidden-heading'>Form to shorten links</h2>
      {/* Form section */}
      <form>
        <input
          type="text"
          placeholder='Shorten a link here...'

        />
        <button>Shorten It!</button>
      </form>
    </section>
  )
}

export default FormSection
