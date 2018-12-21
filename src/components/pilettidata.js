import React, { Component } from "react";

class Pilettidata extends Component {
  constructor() {
    super();
    this.state = { 
      data: [],
      isHidden: true};
  }

  componentDidMount() {
    console.log("Toimii");
    this.haePiletti();
  }

  haePiletti = () => {
    fetch("/sortattu")
      .then(response => response.json())
      .then(data => this.setState({ data }));
    console.log("Matsku saatu");
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    const tapahtumalista = this.state.data.map(data => {
      // päivä millisekunneiksi ja siitä päivämääräksi
      var paivays = new Date(data.paivays);
      var millisekunnit = paivays.getTime();
      var mikaPaiva = new Date(millisekunnit).toLocaleDateString("fi");

      var kellonaika = data.klo;
      var mihinAikaan = kellonaika.substr(0,5);

      const Lisatiedot = () => (
        <div className="details">
          <span className="category">{data.category}</span>
          <span className="info">{data.info}</span>
          <span className="district">{data.district}</span>
          <span className="price">{data.price} euroa</span>
          <span className="contact">{data.contact}</span>
        </div>
      )

      return (
        <div className="yksiTapahtuma" onClick={this.toggleHidden.bind(this)}>
          <span className="title">{data.title}</span>
          <span className="pvm">{mikaPaiva}</span>
          <span className="klo">{mihinAikaan}</span>
          {!this.state.isHidden && <Lisatiedot />}
        </div>
      );
    });
    return <div> {tapahtumalista} </div>;
  }
}

export default Pilettidata;