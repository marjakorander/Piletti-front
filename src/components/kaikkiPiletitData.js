import React, { Component } from "react";
import KaikkiPiletti from "./kaikkiPiletti";

class KaikkiPiletitData extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log("Toimii");
    console.log("Data " + this.props.filterCategory);
    console.log("Data " + this.props.isFiltered);
    this.haePiletti();
  }

  componentWillReceiveProps(){
    this.filtteroi();
  }

  haePiletti = () => {
    fetch("/sortatutTulevat")
      .then(response => response.json())
      .then(data => this.setState({ data }));
    console.log("Matsku saatu");
  };

  filtteroi = () => {
    fetch("/kategoria/" + this.props.filterCategory.charAt(0).toUpperCase() + this.props.filterCategory.slice(1))
      .then(response => response.json())
      .then(data => this.setState({ data }));
    console.log("Filtteröity");  
  };

  render() {
    const tapahtumalista = this.state.data.map(function(data) {
      // päivä millisekunneiksi ja siitä päivämääräksi
      var paivays = new Date(data.paivays);
      var millisekunnit = paivays.getTime();
      var mikaPaiva = new Date(millisekunnit).toLocaleDateString("fi");

      var kellonaika = data.klo;
      var mihinAikaan = kellonaika.substr(0, 5);

      return (
        <div>
          <KaikkiPiletti
            title={data.title}
            pvm={mikaPaiva}
            klo={mihinAikaan}
            category={data.category}
            info={data.info}
            district={data.district}
            price={data.price}
            contact={data.contact}
            key={data.id}
          />
        </div>
      );
    });
    return <div>{tapahtumalista}</div>;
  }
}
export default KaikkiPiletitData;
