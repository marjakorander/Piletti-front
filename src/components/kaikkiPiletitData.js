import React, { Component } from "react";
import Piletti from "./piletti";

class KaikkiPiletitData extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log("Toimii");
    this.haePiletti();
  }

  // getting all the pilettis
  haePiletti = () => {
    fetch("/sortatutTulevat")
      .then(response => response.json())
      .then(data => this.setState({ data }));
    console.log("Matsku saatu");
  };

  // make child component rerender when state in parent changes
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.filterCategory !== prevProps.filterCategory) {
      console.log("New filter:" + this.props.filterCategory)
    }
  }

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
          <Piletti
            title={data.title}
            pvm={mikaPaiva}
            klo={mihinAikaan}
            category={data.category}
            info={data.info}
            district={data.district}
            price={data.price}
            contact={data.contact}
            code={data.code}
          />
        </div>
      );
    });
    return (
      <div>
        {tapahtumalista}
      </div>
    );
  }
}
export default KaikkiPiletitData;
