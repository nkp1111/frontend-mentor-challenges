import React from 'react'
import useGlobalContext from '../context'

function FormSection() {

  const { fullUrl, setFullUrl, startUrlShortener, allUrls } = useGlobalContext()
  return (
    <section id="form-section">
      <h2 className='hidden-heading'>Form to shorten links</h2>
      {/* Form section */}
      <form onSubmit={(e) => {
        e.preventDefault()
        if (fullUrl) {
          startUrlShortener(fullUrl)
        }
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

      <div className='container-fluid'>
        <ul className='url-holder'>
          {allUrls && allUrls.map(url => {
            return (
              <li key={url.id}
                className="urls row">
                <span className='full-url col-md-6'>
                  {url.fullUrl}
                </span>
                <span className='short-url col-md-4'>
                  {url.shortUrl}
                </span>
                <button className='copy-btn btn col-md-2'
                  onClick={(e) => {
                    const copyBtns = document.querySelectorAll(".copy-btn")
                    copyBtns.forEach(btn => {
                      if (btn.classList.contains("active")) {
                        btn.classList.remove("active")
                        btn.innerText = "Copy"
                      }
                    })

                    e.target.classList.add("active")
                    e.target.innerText = "Copied"
                    navigator.clipboard.writeText(e.target.previousElementSibling.innerText)
                  }}>
                  Copy
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default FormSection
