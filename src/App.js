import React, { Component } from 'react';
import Pilettidata from './components/pilettidata';
import Uusipiletti from './components/uusipiletti';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="apinNimi">
            <h1>PILETTI</h1>
          </div>  
            <div className="ekat">
              <Pilettidata />
            </div>
          <Uusipiletti />
      </div>
    );
  }
}

export default App;