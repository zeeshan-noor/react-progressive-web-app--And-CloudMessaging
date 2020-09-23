import React from 'react';
import './App.css';
import {initNotification} from './Service/firebaseService'
function App() {
  return (
    <div className="App">
     <h1>Zeeshan Noor</h1>
     <button onClick={initNotification}>Configuration Message</button>
    </div>
  );
}

export default App;
