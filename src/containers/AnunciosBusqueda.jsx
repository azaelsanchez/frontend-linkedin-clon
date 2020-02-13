import React, { Component } from "react";

import Navbar from "../components/Navbar";
import PanelUser from "../components/Panel-user";

import "./Noticias.css";

class AnunciosBusqueda extends Component {
    render(){
        return(
            <div className="noticias-post">
        <Navbar />

        <div className="container-noticias">
          <PanelUser />
          <div className="container-anuncios">
                
                  <div className="items-anuncio">
                    <h1>New York te necesita</h1>
                    <p>Rosita Gomez </p>
                    <h4>Atraco en el banco central</h4>
                    <p>Experiencia minima nivel 3</p>
                    <p>Tipo de jornada: Cuando los detengas </p>
                    <p>Sector: Versatil </p>
                    <p>Habilidades requeridas: Inmovilizar,super fuerza y resistencia a las balas o similar. </p>
                    <button >
                      Más información
                    </button>
                  </div>
          
          </div>
        </div>
      </div>
    );
  }
}

export default AnunciosBusqueda;


