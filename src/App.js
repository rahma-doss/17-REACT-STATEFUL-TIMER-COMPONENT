import React from 'react';
import './App.css';
import Chrono from './Chrono';


const ms = 300000


function App() {
  return (
    <div className='card'>
      <header>
        <Chrono millliseconds = {ms}/>
      </header>
      
    </div>
  );
}

export default App;
