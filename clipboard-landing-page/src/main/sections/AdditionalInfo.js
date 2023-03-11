import React from 'react'
import AdditionalInfoArticles from './components/AdditionalInfoArticles'
import ClientIcons from './components/ClientIcons'

function AdditionalInfo() {
  return (
    <section className='additional-info-section'>
      <h2 className='section-heading'>Supercharge your workflow</h2>
      <p>
        We’ve got the tools to boost your productivity.
      </p>

      <div className="container-fluid">
        <AdditionalInfoArticles />
      </div>

      <ClientIcons />

    </section>
  )
}

export default AdditionalInfo
