import React, { Component } from "react";

import "./css/NavbarHome.css";
import { Link } from "react-router-dom";

class NavbarHome extends Component {
  render() {
    return (
      <div className="navbar-home">
        <div className="logo">
          <img
            src="/assets/img/logo-linkedin-clon.png"
            alt="logo-linkedin-clon"
          />
        </div>
        <div className="register-login">
          <li>
            <Link to="/user/login" className="links">
              Login
            </Link>
          </li>
          <li>
            <Link to="/user/register" className="links">
              Register
            </Link>
          </li>
        </div>
      </div>
    );
  }
}

export default NavbarHome;
