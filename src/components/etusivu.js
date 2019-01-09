import React, { Component } from "react";
import Pilettidata from './pilettidata';
import Linkit from './linkit';

class Etusivu extends Component {
  render() {
    return (
        <div className="etusivu">
            <div className="hederi">
                <Linkit/>
            </div>
            <div className="apinNimi">
                <h1>PILETTI</h1>
            </div>
            <div className="ekat">
                <Pilettidata />
            </div>
        </div>
    );
  }
}

export default Etusivu;
