import React from 'react'
import useGlobalContext from './context'
import ListView from './ListView'

function Main() {

  return (
    <main>
      <h2>Country Data View</h2>
      <form action="/country" method="post">
        <input type="search" id="countryName" name="name" placeholder="           Search for a country..." />
        <select name="region" id="region">
        </select>
      </form>
      <section>
        <ListView />
      </section>
    </main>

  )
}

export default Main
