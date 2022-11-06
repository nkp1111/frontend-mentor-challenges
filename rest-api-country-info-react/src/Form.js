import React, { useRef, useEffect } from 'react'
import useGlobalContext from './context'

function Form() {

  const { countryName, setCountryName, regions, setRegion } = useGlobalContext()

  const arrowRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    navRef.current.addEventListener('click', (e) => {
      if (e.target.classList.contains('active')) {
        e.target.classList.remove('active')
        arrowRef.current.classList.add('fa-chevron-up')
        arrowRef.current.classList.remove('fa-chevron-down')
      } else {
        e.target.classList.add('active')
        arrowRef.current.classList.remove('fa-chevron-up')
        arrowRef.current.classList.add('fa-chevron-down')
      }
    })
  })

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        id="countryName"
        name="name"
        placeholder="           Search for a country..."
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        minLength="1" />
      <nav ref={navRef}>
        Filter by Region
        <i className='fa fa-solid fa-chevron-down'
          ref={arrowRef}></i>
        <div className="nav-bar">
          <ul>
            {regions.map(region => {
              return <li key={region}
                onClick={(e) => {
                  setRegion(e.target.innerText)
                  navRef.current.classList.toggle('active')
                }}>{region}</li>
            })}
          </ul>
        </div>
      </nav>
    </form>
  )
}

export default Form
