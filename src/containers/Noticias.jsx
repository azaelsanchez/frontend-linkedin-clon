import React, { Component } from "react";
import { connect } from "react-redux";

//import axios from "axios";

import PanelUser from "../components/Panel-user";
import Navbar from "../components/Navbar";

import { showOfferWorks, offerDetails } from "../redux/actions/dataActions";

import "./App.css";

class Noticias extends Component {
  componentDidMount() {
    showOfferWorks();
  }

  goToOfferDetails = item => {
    this.props.history.push(`/oferta/${item?.id}`);
    offerDetails(item);
  };

  render() {
    return (
      <div className="noticias-post">
        <Navbar />

        <div className="container-noticias">
          <PanelUser />
          <div className="container-anuncios">
            {this.props.offer
              ?.sort((a, b) => a - b)
              .map(item => {
                return (
                  <div key={item.id} className="items-anuncio">
                    <h1>{item.title_offer}</h1>
                    <p>{item.company} </p>
                    <h4>Descripción: {item.description} </h4>
                    <p>Nivel de experiencia: {item.experience_level} </p>
                    <p>Tipo de jornada: {item.working_day} </p>
                    <p>Sector: {item.sector} </p>
                    <p>Habilidades requeridas: {item.required_skills} </p>
                    <button
                      className="open-modal-btn"
                      onClick={this.goToOfferDetails.bind(this, item)}
                    >
                      Más información
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    offer: state.data.offer,
    detail: state.details.detail
  };
}

export default connect(mapStateToProps)(Noticias);
