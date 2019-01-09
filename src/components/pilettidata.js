import React, { Component } from "react";
import Piletti from './piletti';

class Pilettidata extends Component {
  constructor() {
    super();
    this.state = { 
      data: []}
  }

  componentDidMount() {
    console.log("Toimii");
    this.haePiletti();
  }

  haePiletti = () => {
    fetch("/sortatutViisi")
      .then(response => response.json())
      .then(data => this.setState({ data }));
    console.log("Matsku saatu");
  }

  render() {
    const tapahtumalista = this.state.data.map(function(data) {
      // päivä millisekunneiksi ja siitä päivämääräksi
      var paivays = new Date(data.paivays);
      var millisekunnit = paivays.getTime();
      var mikaPaiva = new Date(millisekunnit).toLocaleDateString("fi");

      var kellonaika = data.klo;
      var mihinAikaan = kellonaika.substr(0,5);

        return (
          <Piletti title={data.title} pvm={mikaPaiva} klo={mihinAikaan} 
          category={data.category} info={data.info} district={data.district} price={data.price} 
          contact={data.contact} key={data.id}></Piletti>
    );
  });
      return (
          <div>{tapahtumalista}</div>
      );
  }
}

export default Pilettidata;