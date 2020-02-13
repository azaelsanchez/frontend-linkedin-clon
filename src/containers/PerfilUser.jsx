import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Navbar from "../components/Navbar";
import "./Noticias.css";
import {
  showUserPanel,
  showCities,
  userEdit
} from "../redux/actions/dataActions";
import Modal from "../components/Modal";

class PerfilUser extends Component {
  constructor() {
    super();
    this.state = {
      userM: {
        id: null,
        name: null,
        image: null,
        surname: null,
        password: null,
        phone: null,
        email: null,
        address: null,
        country: null,
        province_id: null,
        zip_code: null
      },
      selectedFile: null,
      modal: false
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
  imageRef = React.createRef();
  surnameRef = React.createRef();
  passwordRef = React.createRef();
  phoneRef = React.createRef();
  emailRef = React.createRef();
  addressRef = React.createRef();
  countryRef = React.createRef();
  provinceRef = React.createRef();
  zipCodeRef = React.createRef();

  fileChange = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
    console.log(this.state.selectedFile);
  };

  onChange = event => {
    event.preventDefault();
    const user = this.props.profile;
    // let provinces = this.props.cities;

    // console.log("mierda " + province);
    // provinces[event.target.name] = event.target.value;
    // console.log(provinces);
    this.setState({
      userM: {
        id: user[0]?.id,
        name: this.nameRef.current.value,
        image: this.state.selectedFile?.name,
        surname: this.surnameRef.current.value,
        password: this.passwordRef.current.value,
        phone: this.phoneRef.current.value,
        email: this.emailRef.current.value,
        address: this.addressRef.current.value,
        country: this.countryRef.current.value,
        province_id: this.provinceRef.current.value,
        zip_code: this.zipCodeRef.current.value
      }
    });
    console.log(this.state.userM);
  };

  fileUpload = () => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile?.name);
    console.log(fd);
    return axios.post("http://localhost:8000/api/storage/", fd, {
      onUploadProgress: progressEvent => {
        console.log(
          "Upload Progress: " +
            Math.round((progressEvent.loaded / progressEvent.total) * 100) +
            "%"
        );
      }
    });
  };

  saveImageName = image => {
    // haremos petición por pos para guardar la imagen;
    console.log(image);
    const user = this.props.profile;

    try {
      axios
        .patch("http://localhost:8000/api/uploadImage", {
          userM: {
            id: user[0]?.id,
            name: this.nameRef.current.value,
            image: image,
            surname: this.surnameRef.current.value,
            password: this.passwordRef.current.value,
            phone: this.phoneRef.current.value,
            email: this.emailRef.current.value,
            address: this.addressRef.current.value,
            country: this.countryRef.current.value,
            province_id: this.provinceRef.current.value,
            zip_code: this.zipCodeRef.current.value
          }
        })
        .then(res => {
          this.setState({
            userM: res.data?.user
          });
        });
    } catch (error) {
      console.error(error);
    }
  };
  saveUser = event => {
    event.preventDefault();

    const userUp = this.state.userM;
    console.log(userUp);
    //this.onChange(event);
    userEdit(userUp);
    //this.closeModal();
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const res = await this.fileUpload();
      console.log(res);
      await this.saveImageName(res?.data);
      setTimeout(() => {
        this.saveUser();
      }, 1000);
      this.closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const user = this.props.profile;
    //const province = this.state.userM;
    //console.log(province);
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
                  {/* <img
                    src={`http://localhost:8000/storage/${user?.image}`}
                    alt={user?.description}
                    className="avatar"
                  /> */}
              <img src={user[0]?.image} alt=""/>
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
              onChange={this.onChange}
              className="form-control"
              id="exampleFormControlSelect2"
              name="province"
              //value="province"
            >
              <option ref={this.provinceRef} value={this.props.cities}>
                {this.props.cities?.name}
              </option>
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
            <input
                          ref={this.imageRef}
                          id="imageInput"
                          type="file"
                          name="image"
                          onChange={this.fileChange}
                          />
                        <button onSubmit={this.handleSubmit} className="group-upload-image" name="image">Subir</button>
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
    cities: state.city.cities
    // province: state.province.province_id
  };
}

export default connect(mapStateToProps)(PerfilUser);
