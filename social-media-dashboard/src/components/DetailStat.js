import React from 'react'
import { detailStat, upIcon, downIcon } from '../assets/data'

function DetailStat() {
  return (
    <section className='detail-stat'>

      <div className='row'>
        <h2>Overview - Today</h2>
        {detailStat.map(item => {
          return (
            <div className='col-md-3' key={item.id}>
              <article className='article' >
                <div className='inner-article row'>
                  <div className='col-12'>
                    {/* article-content  */}
                    <div className='activity-type'>
                      <h3>{item.activity}</h3>
                      <img src={item.icon}
                        alt={`${item.platform}`}></img>
                    </div>

                    <div className='change-stat'>
                      {/* stat change  */}
                      <p>{item.count}</p>
                      <div
                        className={`activity ${item.action === "+" ? "up" : "down"}`}>
                        {/* activity  */}
                        {item.action === "+"
                          ? <img src={upIcon} alt="arrow up" />
                          : <img src={downIcon} alt="arrow down" />
                        } {item.percent}%
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default DetailStat
