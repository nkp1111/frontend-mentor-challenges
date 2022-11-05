import React from 'react'
import useGlobalContext from './context'

function ListView() {

  const { countries } = useGlobalContext()
  return (
    <>
      <h3>Country list view</h3>
      {
        countries && countries.map((country, ind) => {
          return (<article>
            <h4>
              {country.name.official}
            </h4>
            <div className="flag">
              <img src={`${country.flags.png}`} alt={`${country.name.official}flag`} />
            </div>
            <p><span>Population: </span>
              {country.population.toLocaleString("en-US")}
            </p>
            <p><span>Region: </span>
              {country.region}
            </p>
            <p><span>Capital: </span>
              {country.capital}
            </p>
          </article>)
        })
      }
    </>

  )
}


export default ListView
