import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Destination from './Destination'
import Crew from './Crew'
import Technology from './Technology'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route exact path='/home' element={<Home />}>
          </Route>
          <Route exact path='/destination' element={<Destination />}>
          </Route>
          <Route exact path='/crew' element={<Crew />}>
          </Route>
          <Route exact path='/technology' element={<Technology />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
