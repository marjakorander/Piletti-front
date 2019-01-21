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
    console.log("Data, filtterin kategoria: " + this.props.filterCategory);
    this.haePiletti();
  }

  // checking the situation in props and select what data is fetched
  componentDidUpdate(prevProps) {
    if (this.props.filterCategory !== prevProps.filterCategory && this.props.filterCategory !== "sortatutTulevat") {
      console.log("Filtteröinti")
      this.filtteroi();
    } 
    if (this.props.filterCategory !== prevProps.filterCategory && this.props.filterCategory === "sortatutTulevat") {
      console.log("Näytetään kaikki kategoriat")
      this.haePiletti();
    }
  }

  // refactor so that you get all pilettis, then filter  
  // getting all pilettis
  haePiletti = () => {
    fetch("/kategoria/sortatutTulevat")
      .then(response => response.json())
      .then(data => this.setState({ data }));
    console.log("Matsku saatu");
  };

  // getting only filtered pilettis
  filtteroi = () => {
    fetch("/kategoria/" + this.props.filterCategory)
      .then(response => response.json())
      .then(data => this.setState({ data }));
    console.log("Filtteröity");
  };

  render() {
    const tapahtumalista = this.state.data.map(function(data) {
      // date to milliseconds and then back to date
      var paivays = new Date(data.paivays);
      var millisekunnit = paivays.getTime();
      var mikaPaiva = new Date(millisekunnit).toLocaleDateString("fi");

      var kellonaika = data.klo;
      var mihinAikaan = kellonaika.substr(0, 5);

      return (
        <div key={data.id}>
          <KaikkiPiletti
            title={data.title}
            pvm={mikaPaiva}
            klo={mihinAikaan}
            category={data.category}
            info={data.info}
            district={data.district}
            price={data.price}
            contact={data.contact}
          />
        </div>
      );
    });
    return <div>{tapahtumalista}</div>;
  }
}
export default KaikkiPiletitData;
