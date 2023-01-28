import React, { useEffect, useState } from 'react'
import DetailStat from './components/DetailStat';
import FrontInfo from './components/FrontInfo'
import OverallStat from './components/OverallStat';


function App() {

  const [mode, setMode] = useState("dark")
  useEffect(() => {
    const body = document.querySelector("body")
    if (mode) {
      body.classList.add("light")
    } else {
      body.classList.remove("light")
    }
  })

  return (
    <main className="App container-fluid">
      <FrontInfo mode={mode} setMode={setMode} />
      <OverallStat />
      <DetailStat />
    </main>
  );
}

export default App;
