import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//import axios from "axios";

import PanelUser from "../components/Panel-user";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

import { crearPost } from "../redux/actions/dataActions";
import "./Noticias.css";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    };
  }
  componentDidMount() {
    crearPost();
  }

  openModal = () => {
    this.setState({ modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    return (
      // <div className="noticias-post">
      //   <Navbar />
      //   <form className="form-group">
      //     <input
      //       type="text"
      //       placeholder="Buscar gente"
      //       className="input-gente"
      //     />
      //     <input
      //       type="text"
      //       placeholder="Buscar empleo"
      //       className="input-empleo"
      //     />
      //   </form>
      <Fragment>
        <Navbar />
        <div className="container-noticias">
          <PanelUser />
          <div className="modal-post">
            <button className="open-modal-btn" onClick={this.openModal}>
              Escribe una noticia
            </button>
            <Modal
              className="modal"
              show={this.state.modal}
              close={this.closeModal}
            >
              <form className="form-modal">
                <textarea
                  name="modal-post"
                  placeholder="¿A quién has salvado ultimamente?"
                  className="modal-text"
                ></textarea>
              </form>
            </Modal>
          </div>
          <div className="container-anuncios">
            {this.props.post?.map(item => (
              <div className="items-anuncio">
                <h1>@ {item.name}</h1>
                <img src={item.image_path} alt={item.description} />
                <h4>Descripción: {item.description} </h4>
                <button>Comentar</button>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    post: state.post.post
  };
}

export default connect(mapStateToProps)(Post);
