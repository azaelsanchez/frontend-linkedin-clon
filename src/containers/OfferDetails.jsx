import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
class OfferDetails extends Component {
  componentDidMount() {
    // offerDetails();
  }

  renderOfferWorks = item => {
    console.log(item, "algpç");
    return (
      <div {...this.props.detail} className="container-details">
        <div key={item?.id} className="offer-container">
          <h1>{item?.title_offer}</h1>
          <p> Fecha: {item?.created_at}</p>
          <p> {item?.company_name} </p>
          <h4> Descripción del puesto </h4>
          <p> {item?.description} </p>
          <h4> Nivel de experiencia </h4>
          <p> {item?.experience_level} </p>
          <h4> Tipo de jornada </h4>
          <p> {item?.working_day} </p>
          <h4> Habilidades requeridas </h4>
          <p> {item?.required_skills} </p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>{this.props.detail && this.renderOfferWorks(this.props.detail)}</div>
    );
  }
}
function mapStateToProps(state) {
  return {
    detail: state.details.detail
  };
}

export default connect(mapStateToProps)(OfferDetails);
