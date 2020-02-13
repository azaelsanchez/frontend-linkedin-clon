import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

import "./css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/img/logo-linkedin-clon.png" alt="logo" />
      </div>
      <Search />
      {/* <div className="input-search">
        <input type="search" placeholder="Buscar..." />
      </div> */}
      <ul className="menu-principal">
        <li>
          <Link to="/Post">Inicio</Link>
        </li>
        <li>
          <Link to="/anuncios">Empleo</Link>
        </li>
        <li>
        <Link to="/paneltrabajos">Panel</Link>
        </li>
        <li>
        <Link to="/PerfilUser">Perfil</Link>
        </li>
        <li>
        <Link to="/">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
