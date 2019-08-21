import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Etusivu from './components/Etusivu';
import Uusipiletti from './components/uusipiletti';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Etusivu}/>
                <Route path="/uusi" component={Uusipiletti}/>
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;