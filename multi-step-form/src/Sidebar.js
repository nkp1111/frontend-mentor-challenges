import React from 'react'
import SidebarData from './assets/data/sidebarData'
import useGlobalContext from './context'

function Sidebar() {

  const { section } = useGlobalContext()
  return (
    <div id="sidebar">
      <ul>
        {SidebarData.map(item => {
          return (
            <li key={item.id}>
              <span className={section === item.id - 1
                ? "step-num active"
                : section > 3 && item.id === 4
                  ? "step-num active"
                  : "step-num"}>{item.id}</span>
              <span className='step-info'>
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
