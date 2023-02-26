import React from 'react'

function FeatureSection({ featureSectionArticle }) {
  return (
    <section>
      <h2>We’re different</h2>

      <div className="row">
        {featureSectionArticle.map(item => {
          return (
            <div className="col-md-4">
              <article className="card d-flex flex-column">
                <h3 className='article-heading order-2'>{item.title}</h3>
                <p className='order-3'>{item.description}</p>
                <div className="article-img-holder order-1">
                  <img src={item.image} alt="" />
                </div>
              </article>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default FeatureSection
