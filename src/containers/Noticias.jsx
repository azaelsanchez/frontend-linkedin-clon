import React, { Component } from "react";
import { connect } from "react-redux";

//import axios from "axios";

import PanelUser from "../components/Panel-user";
import Navbar from "../components/Navbar";

import { showOfferWorks } from "../redux/actions/dataActions";
import "./Noticias.css";

class Noticias extends Component {
  componentDidMount() {
    showOfferWorks();
  }

  getNoticiasBySearch = search => {};

  render() {
    return (
      <div className="noticias-post">
        <Navbar />

        <div className="container-noticias">
          <PanelUser />
          <div className="container-anuncios">
            {this.props.offer?.map(item => (
              <div key={item.id} className="items-anuncio">
                <h1>{item.title_offer}</h1>
                <p>{item.company_name} </p>
                <h4>Descripción: {item.description} </h4>
                <p>Nivel de experiencia: {item.experience_level} </p>
                <p>Tipo de jornada: {item.working_day} </p>
                <p>Sector: {item.sector} </p>
                <p>Habilidades requeridas: {item.required_skills} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    offer: state.data.offer
  };
}

export default connect(mapStateToProps)(Noticias);
