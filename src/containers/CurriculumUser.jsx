import React, { Component } from "react";
import { connect } from "react-redux";

//import axios from "axios";

import PanelUser from "../components/Panel-user";
import Navbar from "../components/Navbar";

import { verCurriculum } from "../redux/actions/dataActions";

import "./App.css";

class Curriculum extends Component {
  componentDidMount() {
    verCurriculum();
  }

  render() {
    return (
      <div className="noticias-post">
        <Navbar />

        <div className="container-noticias">
          <PanelUser />
          <div className="container-anuncios">
            {this.props.verCurriculum?.map(item => (
              <div key={item.id} className="items-anuncio">
                <h4> {item.image} </h4>
                <p>Nivel de experiencia: {item.work_experience} </p>
                <p>Tipo de jornada: {item.education} </p>
                <p>Sector: {item.skills_and_validations} </p>
                <p>Habilidades requeridas: {item.interests} </p>
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
    cv: state.cv.verCurriculum
  };
}

export default connect(mapStateToProps)(Curriculum);
