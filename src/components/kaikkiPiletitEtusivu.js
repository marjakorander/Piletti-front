import React, { Component } from "react";
import KaikkiPiletitData from "./kaikkiPiletitData";
import Linkit from "./linkit";

class kaikkiPiletitEtusivu extends Component {
  constructor() {
    super();
    this.state = {
      filterCategory: "Musiikki",
      isFiltered: false
    };
  }

  handleFilterChange = event => {
    this.setState({ filterCategory: event.target.value }, () => {
      console.log("Etusivu:" + this.state.filterCategory);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isFiltered: true}, () => {
      console.log("Etusivu:" + this.state.isFiltered);
    });
  }

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
          <form className="filtteri" onSubmit={this.handleSubmit}>
            <label htmlFor="filter">
              Valitse kategoria:
            </label>  
              <select
                name="category"
                id="category"
                onChange={this.handleFilterChange}
                >
                <option value="musiikki">Musiikki</option>
                <option value="urheilu">Urheilu</option>
                <option value="kulttuuri">Kulttuuri</option>
                <option value="muu">Muu</option>
              </select>
              <button className="tallennusnappi" type="submit">Hae</button>
          </form>
        </div>
        <div className="kaikki">
          <KaikkiPiletitData isFiltered={this.state.isFiltered} filterCategory={this.state.filterCategory} />
        </div>
      </div>
    );
  }
}

export default kaikkiPiletitEtusivu;
