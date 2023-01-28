import React from 'react'
import { dashboardCurrentInfo, upIcon, downIcon } from '../assets/data'

function OverallStat() {
  return (
    <div className='overall-stat'>
      <div className='row'>
        {dashboardCurrentInfo.map(item => {
          return (
            <article className='col-md-3 row p-3 article' key={item.id}>
              <div className='col-12'>
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
          )
        })}

      </div>
    </div>
  )
}

export default OverallStat
