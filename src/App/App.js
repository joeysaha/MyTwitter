import React from 'react';
import './App.css';
import RightSide from '../RightSide/rightSide';
import LeftSide from '../LeftSide/leftSide'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="sides">
          <div className="left" >
            <LeftSide />
          </div>
          <div className="right">
            <RightSide />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
