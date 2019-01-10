import React, { Component } from 'react';
import Etusivu from './components/etusivu';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Uusipiletti from './components/uusipiletti';
import KaikkiPiletitEtusivu from './components/kaikkiPiletitEtusivu';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Etusivu}/>
                <Route path="/uusi" component={Uusipiletti}/>
                <Route path="/kaikki" component={KaikkiPiletitEtusivu}/>
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;