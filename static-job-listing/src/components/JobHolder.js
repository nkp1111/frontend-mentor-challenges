import React from 'react'
import { maindata } from '../assets/data'
import useGlobalContext from '../context'

function JobHolder() {

  const { tags } = useGlobalContext()

  let filteredData
  if (tags.length === 0) {
    filteredData = maindata
  } else {
    filteredData = maindata.filter(tagEl => {
      let dataTags = [tagEl.role, tagEl.level, ...tagEl.languages, ...tagEl.tools]
      let isTagPresent = true

      tags.forEach(tag => {
        if (!dataTags.includes(tag)) {
          isTagPresent = false
        }
      })

      if (isTagPresent) {
        return tagEl
      }
    })
  }

  return (
    <div className='job-holder'>
      <div className='container-fluid'>
        {filteredData.map(job => {
          return (
            // article 
            <article key={job.id}
              className={`job-article row ${job.featured && "featured"}`}>

              {/* article content  */}
              <div className='job-content col-md-5'>
                {/* article head  */}
                <div className='job-head'>
                  <h2>{job.company}</h2>
                  <span
                    className={`'new-span' ${!job.new && "d-none"}`}>
                    {job.new && "new"}</span>
                  <span
                    className={`feature-span ${!job.featured && "d-none"}`}>
                    {job.featured && "featured"}</span>
                </div>

                {/* article body  */}
                <div className='job-info'>
                  <h3>{job.position}</h3>
                  <span>{job.postedAt}</span>
                  .
                  <span>{job.contract}</span>
                  .
                  <span>{job.location}</span>
                </div>
              </div>

              {/* article image  */}
              <div className='job-image col-md-2'>
                <img src={job.logo}
                  alt={`${job.company} logo`} />
              </div>

              <div className='divider'></div>

              {/* article tags  */}
              <div className='job-tags col-md-5'>
                <ul>
                  <li>{job.role}</li>
                  <li>{job.level}</li>
                  {job.languages.map(lang => {
                    return (
                      <li key={lang}>
                        {lang}
                      </li>
                    )
                  })}
                  {job.tools.map(tool => {
                    return (
                      <li key={tool}>
                        {tool}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default JobHolder
