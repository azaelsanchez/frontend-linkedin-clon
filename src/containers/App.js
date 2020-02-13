import React, { Fragment } from "react";

import Navbar from "../components/NavbarHome";
import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="App">
        <div className="container-flex1">
          <h1> Te damos la bienvenida a tu cominidad de héroes</h1>
          <h3>
            Ciudadano si estás en apuros no dudes en buscar a tu héroe favorito.
            Ahora es más fácil que nunca.
          </h3>

          <div className="container-form">
            <Link className="link" to="/user/register">
              Soy un Héroe
            </Link>
          </div>
        </div>
        <div className="container-flex2">
          <img
            src="/assets/img/superHero.png"
            alt="superHero"
            className="superHero-home"
          />
        </div>
      </div>
      <div className="App">
        <div className="container-flex2">
          <img
            src="/assets/img/anuncio.jpg"
            alt="superHero"
            className="superHero-notify"
          />
        </div>
        <div className="container-flex1">
          <h1> Te damos la bienvenida a tu cominidad de héroes</h1>
          <h3>
            Eres el héroe que estamos buscando, anuncia tus servicios y sube en
            popularidad para salvar a más gente.
          </h3>

          <div className="container-form">
            <Link className="link" to="/company/register">
              Soy un Ciudadano
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
