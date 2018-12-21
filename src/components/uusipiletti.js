import React, { Component } from "react";

class uusipiletti extends Component {
  state = {
    category: "",
    contact: "",
    district: "",
    info: "",
    price: "",
    title: "",
    paivays: "",
    klo: ""
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  handlePriceChange = e => {
    this.setState({ price: e.target.value });
  };

  handleInfoChange = e => {
    this.setState({ info: e.target.value });
  };

  handlePvmChange = e => {
    this.setState({ pvm: e.target.value });
  };

  handleKloChange = e => {
    this.setState({ klo: e.target.value });
  };

  handleContactChange = e => {
    this.setState({ contact: e.target.value });
  };

  render() {
    return (
      <div className={"uusiPiletti"}>
        <form className="upiletti" onSubmit={this.handleSubmit}>
          <header>Piletin tiedot</header>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="form_uusititle">Otsikko</label>
                  <input
                    name="title"
                    id="title"
                    type="text"
                    onChange={this.handleTitleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="form_kategoria">Kategoria</label>
                </td>
                <td>
                  {" "}
                  <select
                    name="kategoria"
                    id="kategoria"
                    onChange={this.handleKategoriaChange}
                  >
                    <option value="Musiikki">Musiikki</option>
                    <option value="Urheilu">Urheilu</option>
                    <option value="Kulttuuri">Kulttuuri</option>
                    <option value="Muu">Muu</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="form_uusihinta">Hinta</label>
                  <input
                    name="hinta"
                    id="hinta"
                    type="numeral"
                    onChange={this.handlePriceChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="form_uusiinfo">Info</label>
                  <input
                    name="info"
                    id="info"
                    type="text"
                    onChange={this.handleInfoChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="form_uusipvm">Päivämäärä</label>
                  <input
                    name="pvm"
                    id="pvm"
                    type="date"
                    onChange={this.handlePvmChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="form_uusiklo">Kellonaika</label>
                  <input
                    name="klo"
                    id="klo"
                    type="time"
                    onChange={this.handleKloChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="form_uusikontakti">Yhteystiedot</label>
                  <input
                    name="contact"
                    id="contact"
                    type="text"
                    onChange={this.handleContactChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default uusipiletti;