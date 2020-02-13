import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { LoginCompanyForm } from "./LoginCompanyForm";
import AuthApi from "./authCompanyRepo";

import "../../containers/App.css";

class LoginCompanyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {
        email: "",
        password: ""
      },
      redirect: false
    };
  }

  onChange = event => {
    let company = Object.assign({}, this.state.company);
    company[event.target.name] = event.target.value;
    this.setState({ company });
  };

  onSubmit = event => {
    event.preventDefault();
    const company = Object.assign({}, this.state.company);
    AuthApi.login(company)
      .then(res => {
        // alert("Usuario logueado correctamente");
        this.setState({
          company: company,
          redirect: true
        });
      })
      .catch(error => {
        alert("Algo salio mal");
        console.log(error);
      });
  };

  render() {
    const companyStore = this.state.company;

    if (companyStore && this.state.redirect) {
      console.log(companyStore.email);
      return (
        <Fragment>
          <div className="redirect-profile">
            <h1> Bienvenido {companyStore.email} </h1>

            <Link className="link" to={`/user/${companyStore.email}`}>
              Ya puedes visitar tu perfil
            </Link>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="contenedor-principal-company">
            <div className="container">
              <img
                className="logo-linkedin"
                src="/assets/img/logo-linkedin-clon.png"
                alt="logo"
              />
              <h1 className="title">Iniciar sesión</h1>
              <LoginCompanyForm
                company={this.state.company}
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

export default LoginCompanyPage;
