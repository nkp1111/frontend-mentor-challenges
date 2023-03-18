import React from 'react'
import { illustration2, iconArrow } from '../assets/data'
import SectionTwoArticle from './SectionTwoArticle'

function SectionTwo() {
  return (
    <section className='section-two row'>
      <div className="col-md-6">
        {/* section content  */}
        <h2 className="section-heading">
          Stay productive, wherever you are
        </h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues for
          live collaboration. No email attachments required!
        </p>
        <FlyoLink />
        <SectionTwoArticle />
      </div>
      <div className="col-md-6">
        {/* section image  */}
        <img src={illustration2} alt="illustration" />
      </div>
    </section>
  )
}

const FlyoLink = () => {
  return (
    <div className='fylo-link d-flex align-items-center'>
      <a href="#">See how Fylo works</a>
      <div className='ms-1 mt-1'>
        <img src={iconArrow} alt="forward arrow" />
      </div>
    </div>
  )
}

export default SectionTwo
