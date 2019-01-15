import React, { Component } from "react";

class KaikkiPiletti extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    const Lisatiedot = () => (
        <div className="details">
          <span className="category">{this.props.category}</span>
          <span className="info">{this.props.info}</span>
          <span className="district">{this.props.district}</span>
          <span className="price">{this.props.price} euroa</span>
          <span className="contact">{this.props.contact}</span>
        </div>)

    return (
        <div className="yksiTapahtumaKaikki" key={this.props.id} onClick={this.toggleHidden.bind(this)}>
          <span className="title">{this.props.title}</span>
          <span className="pvm">{this.props.pvm}</span>
          <span className="klo">{this.props.klo}</span>
          {!this.state.isHidden && <Lisatiedot />}
        </div>
    )
  }
}

export default KaikkiPiletti;