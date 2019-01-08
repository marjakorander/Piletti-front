import React, { Component } from "react";

class uusipiletti extends Component {
  state = {
    category: "Musiikki",
    contact: "",
    district: "",
    info: "",
    price: "",
    title: "",
    paivays: "",
    klo: ""
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
  };

  handlePriceChange = event => {
    this.setState({ price: event.target.value });
  };

  handleInfoChange = event => {
    this.setState({ info: event.target.value });
  };

  handlePvmChange = event => {
    this.setState({ paivays: event.target.value });
  };

  handleKloChange = event => {
    this.setState({ klo: event.target.value });
  };

  handleContactChange = event => {
    this.setState({ contact: event.target.value });
  };

  handleDistrictChange = event => {
    this.setState({ district: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const uusiPiletti = {
      category: this.state.category,
      contact: this.state.contact,
      district: this.state.district,
      info: this.state.info,
      price: this.state.price,
      title: this.state.title,
      paivays: this.state.paivays,
      klo: this.state.klo + ":00",
    };

    fetch('http://localhost:8080/uusi/', {
      method: "POST",
      body: JSON.stringify(uusiPiletti),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(res => {
      res.json().then(data => {
        console.log("Got new ticket!");
      })
    })
  }

  render() {
    return (
      <div className={"uusiPiletti"}>
        <form className="upiletti" onSubmit={this.handleSubmit}>
          <header>Laita pilettisi myyntiin!</header>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="title">Otsikko</label>
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
                  <label htmlFor="category">Kategoria</label>
                </td>
                <td>
                  {" "}
                  <select
                    name="category"
                    id="category"
                    onChange={this.handleCategoryChange}
                  >
                    <option value="musiikki">Musiikki</option>
                    <option value="urheilu">Urheilu</option>
                    <option value="kulttuuri">Kulttuuri</option>
                    <option value="muu">Muu</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="price">Hinta</label>
                  <input
                    name="price"
                    id="price"
                    type="numeral"
                    onChange={this.handlePriceChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="info">Info</label>
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
                  <label htmlFor="paivays">Päivämäärä</label>
                  <input
                    name="paivays"
                    id="paivays"
                    type="date"
                    onChange={this.handlePvmChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="klo">Kellonaika</label>
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
                  <label htmlFor="contact">Yhteystiedot</label>
                  <input
                    name="contact"
                    id="contact"
                    type="text"
                    onChange={this.handleContactChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="district">Lipun sijainti (kaupunginosa)</label>
                  <input
                    name="district"
                    id="district"
                    type="text"
                    onChange={this.handleDistrictChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
            <button type="submit">Tallenna myynti-ilmoitus</button>
        </form>
      </div>
    );
  }
}

export default uusipiletti;