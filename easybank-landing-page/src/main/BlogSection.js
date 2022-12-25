import React from 'react'
import { blogArticleData } from '../assets/data'

function BlogSection() {
  return (
    <section className='blog-section'>
      <h2>Latest Articles</h2>
      <div className='row'>
        {blogArticleData.map(item => {
          return (
            <article
              className='col-md-3 row blog-section-article' key={item.id}>
              <div className='col-12 
              order-2 
              row 
              blog-section-info'>
                <div className='col-12 order-2'>
                  <h3>{item.heading}</h3>
                  <p>{item.description}</p>
                </div>

                <div className='col-12 order-1'>
                  <p className='blog-author'>{item.author}</p>
                </div>
              </div>

              <div className='col-12 order-1 blog-section-image'>
                <img src={item.image} alt="article"
                ></img>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default BlogSection
