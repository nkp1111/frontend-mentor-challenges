import React from 'react'
import { imageDevices } from '../../assets/data'

function AccessInfoSection() {
  return (
    <section className='access-info-section'>
      <h2 className="section-heading">Access Clipboard anywhere</h2>
      <p>
        Whether you’re on the go, or at your computer, you can access all your Clipboard
        snippets in a few simple clicks.
      </p>
      <img src={imageDevices} alt="devices" />
    </section>
  )
}

export default AccessInfoSection
