import React from "react";
import { Link } from "react-router-dom";

import "./css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/img/logo-linkedin-clon.png" alt="logo" />
      </div>
      <div className="input-search">
        <input type="search" placeholder="Buscar..." />
      </div>
      <ul className="menu-principal">
        <li>
          <Link to="/Post">Inicio</Link>
        </li>
        <li>
          <a href="#">Mi red</a>
        </li>
        <li>
          <Link to="/anuncios">Empleo</Link>
        </li>
        <li>
          <a href="#">Mensajes</a>
        </li>
        <li>
          <a href="#">Perfil</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
