import React from 'react'
import Home from './Home'
import Header from './Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
