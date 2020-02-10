import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "../components/Navbar";
import "./Noticias.css";
import {
  showUserPanel,
  showCities,
  showCitiesId
} from "../redux/actions/dataActions";
import Modal from "../components/Modal";

import { userEdit } from "../redux/actions/dataActions";

class PerfilUser extends Component {
  constructor() {
    super();
    this.state = {
      userM: {
        id: null,
        name: null,
        surname: null,
        password: null,
        phone: null,
        email: null,
        address: null,
        country: null,
        province_id: null,
        zip_code: null
      },
      modal: false,
      provincia_nombre: null
    };
  }
  componentDidMount() {
    showUserPanel();
    showCities();
  }

  openModal = () => {
    this.setState({ modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  nameRef = React.createRef();
  surnameRef = React.createRef();
  passwordRef = React.createRef();
  phoneRef = React.createRef();
  emailRef = React.createRef();
  addressRef = React.createRef();
  countryRef = React.createRef();
  provinceRef = React.createRef();
  zipCodeRef = React.createRef();

  onChange = () => {
    const user = this.props.profile;
    const province = this.props.province_id;
    console.log("mierda " + province);

    this.setState({
      userM: {
        id: user[0]?.id,
        name: this.nameRef.current.value,
        surname: this.surnameRef.current.value,
        password: this.passwordRef.current.value,
        phone: this.phoneRef.current.value,
        email: this.emailRef.current.value,
        address: this.addressRef.current.value,
        country: this.countryRef.current.value,
        //province_id: province[0]?.id,
        zip_code: this.zipCodeRef.current.value
      }
    });
  };

  saveUser = event => {
    event.preventDefault();
    console.log(event);
    const userUp = this.state.userM;
    this.onChange();
    showCitiesId(this.state.provincia_nombre);
    userEdit(userUp);
    this.closeModal();
    console.log(this.state);
  };

  render() {
    const user = this.props.profile;

    return (
      <div className="noticias-post">
        <Navbar />

        <div className="container-noticias">
          <div {...this.props.profile.id} className="container-anuncios">
            {this.props.profile.id}
            <div className="perfil-container">
              <h1>
                {user[0]?.name} {user[0]?.surname}
              </h1>

              <p>Email: {user[0]?.email} </p>
              <p>Direccion: {user[0]?.address} </p>
              <p>Telefono: {user[0]?.phone} </p>
            </div>
          </div>
        </div>
        <Modal show={this.state.modal} close={this.closeModal}>
          <form className="form-modal" onSubmit={this.saveUser}>
            <input
              ref={this.nameRef}
              type="text"
              onChange={this.onChange}
              placeholder="Edita tu nombre"
              className="name"
              name="name"
            />
            <input
              ref={this.surnameRef}
              type="text"
              onChange={this.onChange}
              placeholder="Edita tu apellido"
              className="surname"
              name="surname"
            />
            <input
              ref={this.passwordRef}
              type="password"
              onChange={this.onChange}
              placeholder="Edita tu contraseña"
              className="password"
              name="password"
            />

            <input
              ref={this.phoneRef}
              type="text"
              onChange={this.onChange}
              placeholder="Edita tu teléfono"
              className="phone"
              name="phone"
            />
            <input
              ref={this.emailRef}
              type="text"
              onChange={this.onChange}
              placeholder="Edita tu email"
              className="email"
              name="email"
            />
            <input
              ref={this.addressRef}
              type="text"
              onChange={this.onChange}
              placeholder="Edita tu dirección"
              className="address"
              name="address"
            />
            <input
              ref={this.countryRef}
              type="text"
              onChange={this.onChange}
              placeholder="Edita tu país"
              className="country"
              name="country"
            />

            <select
              ref={this.provinceRef}
              className="form-control"
              id="exampleFormControlSelect2"
            >
              {this.props.cities?.map(city => (
                <option key={city.id}>{city.city}</option>
              ))}
            </select>
            <input
              ref={this.zipCodeRef}
              type="number"
              onChange={this.onChange}
              placeholder="Edita tu código postal"
              className="zip_code"
              name="zip_code"
            />
            <input
              type="submit"
              value="PUBLICAR"
              className="guardar-modal"
              onChange={this.onChange}
            />
            <button className="btn-cancel" onClick={this.closeModal}>
              CERRAR
            </button>
          </form>
        </Modal>
        <button className="open-modal-btn" onClick={this.openModal}>
          Editar Perfil
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.user.profile,
    cities: state.city.cities,
    province: state.province.province_id
  };
}

export default connect(mapStateToProps)(PerfilUser);
