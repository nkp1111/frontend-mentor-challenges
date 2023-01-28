import React from 'react'
import { dashboardCurrentInfo, upIcon, downIcon } from '../assets/data'

function OverallStat() {
  return (
    <div className='overall-stat'>
      <div className='row'>
        {dashboardCurrentInfo.map(item => {
          return (
            <div className='col-md-3' key={item.id}>
              <article className={`article-${item.socialPlatform}`} >
                <div className='inner-article row'>

                  {/* article content  */}
                  <div className='author'>
                    {/* author  */}
                    <h2>{item.author}</h2>
                    <img src={item.icon}
                      alt={`${item.socialPlatform}`}></img>
                  </div>

                  <div className='follower'>
                    {/* follower  */}
                    <span>{item.count}</span>
                    <p>
                      {item.id === 3 ? "Subscribers" : "Followers"}
                    </p>
                  </div>

                  <div
                    className={`activity ${item.action === "+" ? "up" : "down"}`}>
                    {/* activity  */}
                    {item.action === "+"
                      ? <img src={upIcon} alt="arrow up" />
                      : <img src={downIcon} alt="arrow down" />
                    } {item.countOfToday} Today
                  </div>
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OverallStat
