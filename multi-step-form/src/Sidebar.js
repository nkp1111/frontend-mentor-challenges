import React from 'react'
import SidebarData from './assets/data/sidebarData'

function Sidebar() {
  return (
    <div id="sidebar">
      <ul>
        {SidebarData.map(item => {
          return (
            <li key={item.id}>
              <span className='step-num'>{item.id}</span>
              <span>
                <p>Step {item.id}</p>
                <p>{item.type}</p>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
