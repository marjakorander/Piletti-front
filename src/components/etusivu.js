import React, { Component } from "react";
import Linkit from "./linkit";
import KaikkiPiletitData from "./kaikkiPiletitData";

class Etusivu extends Component {
  constructor() {
    super();
    this.state = {filterCategory: ""};
  }

  handleFilterChange = event => {
    event.preventDefault();
    this.setState({ filterCategory: event.target.value }, () => {
      console.log("Handle filter change: " + this.state.filterCategory);
    });
  };

  render() {
    return (
      <div className="etusivu">
        <div className="hederi">
          <Linkit />
        </div>
        <div className="apinNimi">
          <h1>PILETTI</h1>
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
        <div className="ekat">
          <KaikkiPiletitData filterCategory={this.state.filterCategory} />
        </div>
      </div>
    );
  }
}

export default Etusivu;
