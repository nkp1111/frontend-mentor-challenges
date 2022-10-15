import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header/Header'
import Home from './Home/Home'
import Destination from './Destination/Destination'
import Crew from './Crew/Crew'
import Technology from './Technology/Technology'
import Error from './Error'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route path='/home' element={<Home />}>
          </Route>
          <Route path='/destination' element={<Destination />}>
          </Route>
          <Route path='/crew' element={<Crew />}>
          </Route>
          <Route path='/technology' element={<Technology />}>
          </Route>
          <Route path='/*' element={<Error />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
