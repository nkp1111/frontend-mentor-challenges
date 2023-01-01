import React from 'react'
import { downloadSectionArticle } from '../assets/data'

function DownloadSection() {
  return (
    <section className='download-section'>

      <div className='row'>
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if you’ve
          got a favourite you’d like us to prioritize.
        </p>
      </div>

      {/* article cards */}
      <div className='cover'>
        <div className='row'>
          {downloadSectionArticle.map(item => {
            return (
              <div className='col-md-4 card-holder' key={item.id}>
                <article>
                  {/* article info  */}
                  <div className='col-12'>
                    <h3>Add to {item.title}</h3>
                    <p>Minimum Version {item.version}</p>
                    <button className='btn'>Add & Install Extension</button>
                  </div>
                  {/* article image  */}
                  <div className='col-12'>
                    <img src={item.logo} alt={`${item.title} logo`}></img>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DownloadSection
