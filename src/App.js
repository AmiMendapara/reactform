import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registeration';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default App;
