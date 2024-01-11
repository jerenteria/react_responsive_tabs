import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import TabButtonEx from './Components/TabButtonEx';
import Credits from './Components/Credits';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <TabButtonEx />
      {/* <Credits /> */}
    </div>
  );
}

export default App;
