import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { LoginForm } from "./LoginForm";
import AuthApi from "./authRepository";

import "./Login.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: ""
      }
    };
  }

  onChange = event => {
    let user = Object.assign({}, this.state.user);
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  onSubmit = event => {
    event.preventDefault();
    const user = Object.assign({}, this.state.user);
    AuthApi.login(user)
      .then(res => {
        // alert("Usuario logueado correctamente");
        this.setState({
          user: user,
          redirect: true
        });
      })
      .catch(error => {
        alert("Algo salio mal");
        console.log(error);
      });
  };

  render() {
    const userValid = localStorage.getItem("users");
    if (userValid && this.state.redirect === true) {
      console.log(userValid.email);
      const user = JSON.parse(localStorage.getItem("users"));

      console.log(user.username);
      return (
        <Fragment>
          <div className="redirect-profile">
            <h1> Bienvenido {user.email} </h1>

            <Link className="link" to={`/user/${user.email}`}>
              Ya puedes visitar tu perfil
            </Link>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="contenedor">
            <div className="bloque-login">
              <img
                className="logo-linkedin"
                src="/assets/img/logo-linkedin-clon.png"
                alt="logo"
              />
              <h1 className="title">Iniciar sesión</h1>
              <LoginForm
                user={this.state.user}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
              />
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

export default LoginPage;
