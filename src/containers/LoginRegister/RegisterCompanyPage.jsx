import React, { Component, Fragment } from "react";

import { RegisterCompanyForm } from "./RegisterCompanyForm";
import AuthApi from "./authCompanyRepo";

import "../../containers/App.css";

class RegisterCompanyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {
        name: "",
        cif: "",
        email: "",
        password: "",
        repeatPassword: ""
      }
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
    AuthApi.register(company)
      .then(res => {
    
      })
      .catch(error => {
        console.log(error);
        alert("Ocurrió un error");
      });
  };

  render() {
    return (
      <Fragment>
        <div className="contenedor-principal-company">
          <div className="container">
            <img
              className="logo-linkedin"
              src="/assets/img/logo-linkedin-clon.png"
              alt="logo"
            />
            <h1 className="title">Regístrate</h1>
            <RegisterCompanyForm
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

export default RegisterCompanyPage;
