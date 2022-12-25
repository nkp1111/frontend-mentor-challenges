import React from 'react'
import { blogArticleData } from '../assets/data'

function BlogSection() {
  return (
    <section>
      <h2>Latest Articles</h2>
      <div className='row'>
        {blogArticleData.map(item => {
          return (
            <article className='col-md-3 row' key={item.id}>
              <div className='col order-2 row'>
                <div className='col-12 order-2'>
                  <h3>{item.heading}</h3>
                  <p>{item.description}</p>
                </div>

                <div className='col-12 order-1'>
                  <p>{item.author}</p>
                </div>
              </div>

              <div className='col order-1'>
                <img src={item.image} alt="article"></img>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default BlogSection
