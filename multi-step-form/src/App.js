import React from 'react'
import Sidebar from './Sidebar';
import PersonalInfo from './pages/PersonalInfo'
import SelectPlan from './pages/SelectPlan'

function App() {
  return (
    <main className="App">
      <h1>Multi Step Form</h1>
      {/* <Sidebar /> */}
      {/* <PersonalInfo /> */}
      <SelectPlan />
    </main>
  );
}

export default App;
