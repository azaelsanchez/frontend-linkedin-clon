import React, { Component, Fragment } from "react";

import { RegisterForm } from "./RegisterForm";
import AuthApi from "./authRepository";

import "./Register.css";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        repeatPassword: ""
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
    AuthApi.register(user)
      .then(res => {
        alert("Usuario creado");
      })
      .catch(error => {
        console.log(error);
        alert("Ocurrió un error");
      });
  };

  render() {
    return (
      <Fragment>
        <div className="contenedor-principal">
          <div className="container">
            <img
              className="logo-linkedin"
              src="/assets/img/logo-linkedin-clon.png"
              alt="logo"
            />
            <h1 className="title">Regístrate</h1>
            <RegisterForm
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

export default RegisterPage;
