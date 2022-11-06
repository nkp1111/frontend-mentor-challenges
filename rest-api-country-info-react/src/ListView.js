import React from 'react'
import useGlobalContext from './context'

function ListView() {

  const { countries, setCountryName, setDetail } = useGlobalContext()
  return (
    <section>
      <h3>Country list view</h3>
      {
        countries && countries.map((country, ind) => {
          return (
            <article key={ind}
              onClick={(e) => {
                setCountryName(country.name.official)
                setDetail(true)
              }}>
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
            </article>
          )
        })
      }
    </section>

  )
}


export default ListView
