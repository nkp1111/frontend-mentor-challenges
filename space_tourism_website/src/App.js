import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Destination from './Destination'

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
