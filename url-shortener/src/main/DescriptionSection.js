import React from 'react'

function DescriptionSection() {
  return (
    <section>
      {/* Description section */}
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our
        advanced statistics dashboard.
      </p>
      <div className='row'>
        <article className='col-md-4'>
          <h3> Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
          <img src="" alt="" />
        </article>
        <article className='col-md-4'>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and where
            people engage with your content helps inform better decisions.
          </p>
          <img src="" alt="" />
        </article>
        <article className='col-md-4'>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through customizable
            links, supercharging audience engagement.
          </p>
          <img src="" alt="" />
        </article>
      </div>
    </section>
  )
}

export default DescriptionSection
