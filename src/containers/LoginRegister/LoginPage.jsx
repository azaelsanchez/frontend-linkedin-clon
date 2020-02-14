import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { LoginForm } from "./LoginForm";
import AuthApi from "./authRepository";

import "../App.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: ""
      },
      redirect: false
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
    const userStore = this.state.user;

    if (userStore && this.state.redirect) {
      console.log(userStore.email);
      return (
        <Fragment>
          <div className="movimiento">
          <div className="redirect-profile">
           
            <h1> Bienvenido {userStore.email} </h1>
            <br/><br/>
            <Link className="link" to={"/post"}>
              Ya puedes visitar tu perfil
            </Link>
            
            </div>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="contenedor-principal">
            <div className="container">
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
