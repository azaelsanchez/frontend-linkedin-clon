import React, { Component } from "react";
import { connect } from "react-redux";

import { showOfferWorks } from "../redux/actions/dataActions";

class OfferDetails extends Component {
  componentDidMount() {
    showOfferWorks();
  }

  render() {
    return (
      <div className="container-details">
        {this.props.offer?.map(offer => {
          return (
            <div className="offer-container" key={offer?.id}>
              <h1>{offer.title_offer}</h1>
              <p> Fecha: {offer.created_at}</p>
              <p> {offer.company_name} </p>
              <h4> Descripción del puesto </h4>
              <p> {offer.description} </p>
              <h4> Nivel de experiencia </h4>
              <p> {offer.experience_level} </p>
              <h4> Tipo de jornada </h4>
              <p> {offer.working_day} </p>
              <h4> Habilidades requeridas </h4>
              <p> {offer.required_skills} </p>
            </div>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    offer: state.data.offer
  };
}

export default connect(mapStateToProps)(OfferDetails);
