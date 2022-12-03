import React from 'react'
import Sidebar from './Sidebar';
import PersonalInfo from './pages/PersonalInfo'
import SelectPlan from './pages/SelectPlan'
import PickAddOns from './pages/PickAddOns'
import Summary from './pages/Summary'
import ThankYou from './pages/ThankYou'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Footer'

function App() {
  return (
    <>
      <main className="App">
        <h1>Multi Step Form</h1>
        <Router>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<PersonalInfo />}></Route>
            <Route path="/personalInfo" element={<PersonalInfo />} ></Route>
            <Route path="/planSelect" element={<SelectPlan />}></Route>
            <Route path="/pickAddOns" element={<PickAddOns />} ></Route>
            <Route path='/summary' element={<Summary />}></Route>
            <Route path='/thankYou' element={<ThankYou />}></Route>
          </Routes>
          <Footer />
        </Router>
      </main>
    </>

  );
}

export default App;
