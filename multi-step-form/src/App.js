import React from 'react'
import Sidebar from './Sidebar';
import PersonalInfo from './pages/PersonalInfo'
import SelectPlan from './pages/SelectPlan'
import PickAddOns from './pages/PickAddOns'
import Summary from './pages/Summary'

function App() {
  return (
    <main className="App">
      <h1>Multi Step Form</h1>
      {/* <Sidebar /> */}
      {/* <PersonalInfo /> */}
      {/* <SelectPlan /> */}
      {/* <PickAddOns /> */}
      <Summary />
    </main>
  );
}

export default App;
