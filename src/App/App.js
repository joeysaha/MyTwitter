import React from 'react';
import './App.css';
import Login from '../Login/login';
import RightSide from '../RightSide/rightSide';
import LeftSide from '../LeftSide/leftSide'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LeftSide />
        <RightSide />
      </header>
    </div>
  );
}

export default App;
