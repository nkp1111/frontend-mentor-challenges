import React from 'react'
import useGlobalContext from './context'
import ListView from './ListView'
import Error from './Error'
import DetailView from './DetailView'
import Form from './Form'

function Main() {

  const { countries, detail } = useGlobalContext()

  return (
    <main className={detail ? 'detail' : ''}>
      <h2>Country Data View</h2>
      {!detail && <Form />}

      {countries && Array.isArray(countries) && detail
        ? <DetailView country={countries[0]} />
        : countries && Array.isArray(countries)
          ? <ListView />
          : <Error />}

    </main>

  )
}

export default Main
