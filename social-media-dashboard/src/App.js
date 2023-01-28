import React from 'react'
import DetailStat from './components/DetailStat';
import FrontInfo from './components/FrontInfo'
import OverallStat from './components/OverallStat';


function App() {
  return (
    <main className="App container-fluid">
      <FrontInfo />
      <OverallStat />
      <DetailStat />
    </main>
  );
}

export default App;
