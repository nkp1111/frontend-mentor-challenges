import React, { useEffect, useState } from 'react'
import { articleData } from '../assets/data'

function FeatureSection() {

  const [activeArticle, setActiveArticle] = useState(articleData[0])

  useEffect(() => {
    let tags = document.querySelectorAll(".tag-items")
    tags.forEach(tag => {
      tag.addEventListener("click", (e) => {

        tags.forEach(t => t.classList.remove("active"))
        let text = e.target.innerText
        tag.classList.add("active")

        articleData.forEach(item => {
          if (item.tagline === text) {
            setActiveArticle(item)
          }
        })
      })
    })
  })


  return (
    <section className='feature-section'>
      <div className='container-fluid'>
        <div className='row info-holder'>
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your favourite websites.
            Your bookmarks sync between your devices so you can access them on the go.
          </p>
        </div>

        {/* article holder */}
        <div className='row'>
          {/* articles tag  */}
          <ul className='tag-holder row'>
            {articleData.map((item, ind) => {
              return (
                <li
                  className={`tag-items col-md-3 ${ind === 0 ? "active" : ""}`}
                  key={item.id}>{item.tagline}</li>
              )
            })}
          </ul>

          {/* article data  */}
          {activeArticle &&
            <article>
              <div className='row'>
                {/* article info  */}
                <div className='col-md-6 article-info'>
                  <h3>{activeArticle.heading}</h3>
                  <p>{activeArticle.overview}</p>
                  <button className='btn'>More Info</button>
                </div>
                {/* article image  */}
                <div className='col-md-6 article-img'>
                  <div className='row'>
                    <div className='col-12 bg-illustration-holder'>
                      <div className='bg-illustration'></div>
                      <img src={activeArticle.image} alt="illustration background" />
                    </div>
                  </div>
                </div>
              </div>
            </article>}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
