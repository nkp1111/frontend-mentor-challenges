import React from 'react'

function FeatureDropdown({ sidebar }) {
  return (
    <div
      style={sidebar !== undefined ? {
        position: 'absolute',
        top: '60',
        left: '320'
      } :
        { backgroundColor: 'white' }}>
      <ul>
        <li>
          <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/7737235509ce74ca8b7e24c14d6a7ecb0c56f751/dropdown-menu/public/images/icon-todo.svg'
            alt='to do list icon' />
          Todo List
        </li>
        <li>
          <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/7737235509ce74ca8b7e24c14d6a7ecb0c56f751/dropdown-menu/public/images/icon-calendar.svg'
            alt='calendar logo' />
          Calendar
        </li>
        <li>
          <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/7737235509ce74ca8b7e24c14d6a7ecb0c56f751/dropdown-menu/public/images/icon-reminders.svg'
            alt='reminder logo' />
          Reminders
        </li>
        <li>
          <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/7737235509ce74ca8b7e24c14d6a7ecb0c56f751/dropdown-menu/public/images/icon-planning.svg'
            alt='planning logo' />
          Planning
        </li>
      </ul>
    </div>
  )
}

export default FeatureDropdown
