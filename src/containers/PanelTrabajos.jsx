import React, { Component } from "react";

import Navbar from "../components/Navbar";

class PanelTrabajos extends Component {
  render() {
    return (
      <div className="noticias-post">
        <Navbar />
        <div className="container-anuncios">
          <div className="items-anuncio2">
            <h1>Incendio Forestal</h1>
            <p> Fecha:13/02/2020</p>
            <p> @Rosita Gomez </p>
            <h4> Descripción del puesto </h4>
            <p> Incendio en central park </p>
            <h4> Poderes y niveles</h4>
            <p> Poderes acuaticos y nivel 3 en rescate</p>
            <button className="open-modal-btn">Completar Trabajo</button>
            <button className="open-modal-btn">Eliminar Trabajo</button>
          </div>
        </div>
      </div>
    );
  }
}
export default PanelTrabajos;
