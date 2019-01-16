import React, { Component } from "react";
import KaikkiPiletitData from "./kaikkiPiletitData";
import Linkit from "./linkit";

class kaikkiPiletitEtusivu extends Component {
  constructor() {
    super();
    this.state = {
      filterCategory: "",
    };
  }

  handleFilterChange = event => {
    event.preventDefault();
      this.setState({ filterCategory: event.target.value}, () => {
        console.log("Handle filter change: " + this.state.filterCategory);
      })};      

  render() {
    return (
      <div className="etusivu">
        <div className="hederi">
          <Linkit />
        </div>
        <div className="apinNimiPieni">
          <h2>PILETTI</h2>
        </div>
        <div>
          <form className="filtteri">
            <label htmlFor="filter">Valitse kategoria:</label>
            <select
              name="category"
              id="category"
              onChange={this.handleFilterChange}
            >
              <option value="sortatutTulevat">Näytä kaikki</option>
              <option value="musiikki">Musiikki</option>
              <option value="urheilu">Urheilu</option>
              <option value="kulttuuri">Kulttuuri</option>
              <option value="muu">Muu</option>
            </select>
          </form>
        </div>
        <div className="kaikki">
          <KaikkiPiletitData
            filterCategory={this.state.filterCategory}
          />
        </div>
      </div>
    );
  }
}

export default kaikkiPiletitEtusivu;
