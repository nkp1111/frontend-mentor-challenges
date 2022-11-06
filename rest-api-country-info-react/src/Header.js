import React, { useEffect } from 'react'
import useGlobalContext from './context'

function Header() {

  const { darkmode, setDarkmode } = useGlobalContext()

  useEffect(() => {
    if (!darkmode) {
      document.querySelector('body').classList.add('light')
    } else {
      document.querySelector('body').classList.remove('light')
    }
  })
  return (
    <header>
      <h1>Where in the world?</h1>
      <div className="mode"
        onClick={() => {
          if (darkmode) {
            setDarkmode(false)
          } else {
            setDarkmode(true)
          }
        }}>
        <i className={darkmode ? "fa fa-duotone fa-moon" : "fas fa-duotone fa-sun"}></i>
        <span>{darkmode ? 'Dark mode' : 'Light mode'}</span>
      </div>
    </header>
  )
}

export default Header