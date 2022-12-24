import React from 'react'
import { maindata } from '../assets/data'

function JobHolder() {
  return (
    <div className='job-holder'>
      {maindata.map(job => {
        return (
          <article key={job.id}>
            <div className='article-head'>
              <h2>{job.company}</h2>
              <span className='new-tag'>{job.new && "new"}</span>
              <span className='feature-tag'>{job.featured && "featured"}</span>
            </div>
            <div className='article-body'>
              <h3>{job.position}</h3>
              <span>{job.postedAt}</span>
              <span>{job.contract}</span>
              <span>{job.location}</span>
            </div>
            <div className='article-image'>
              <img src={job.logo}
                alt={`${job.company} logo`} />
            </div>
            <div className='article-tags'>
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
  )
}

export default JobHolder
