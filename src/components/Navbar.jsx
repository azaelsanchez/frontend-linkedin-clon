import React from "react";

import "./css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/img/logo-linkedin-clon.png" alt="logo" />
      </div>
      <ul className="menu-principal">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Mi red</a>
        </li>
        <li>
          <a href="#">Empleos</a>
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
