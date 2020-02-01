import React, { Component } from "react";

import PanelUser from "../components/Panel-user";

import "./Noticias.css";

class Noticias extends Component {
  render() {
    return (
      <div className="noticias-post">
        <form className="form-group">
          <input
            type="text"
            placeholder="Buscar gente"
            className="input-gente"
          />
          <input
            type="text"
            placeholder="Buscar empleo"
            className="input-empleo"
          />
        </form>
        <div className="container-noticias">
          <PanelUser />
          <h1>Contanido noticias</h1>
        </div>
      </div>
    );
  }
}

export default Noticias;
