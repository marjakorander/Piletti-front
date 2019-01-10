import React, { Component } from "react";
import KaikkiPiletitData from './kaikkiPiletitData';
import Linkit from "./linkit";

class kaikkiPiletitEtusivu extends Component {
  render() {
    return (
      <div className="etusivu">
        <div className="hederi">
          <Linkit />
        </div>
        <div className="apinNimi">
          <h1>PILETTI</h1>
        </div>
        <div className="ekat">
          <KaikkiPiletitData />
        </div>
      </div>
    );
  }
}

export default kaikkiPiletitEtusivu;
