import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

// Redux;
import { crearPost } from "../redux/actions/dataActions";
import { crearPostUser } from "../redux/actions/dataActions";

import PanelUser from "../components/Panel-user";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

import "./Noticias.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      posting: {
        image: "",
        description: ""
      }
    };
  }

  componentDidMount() {
    crearPost();
    crearPostUser();
  }

  openModal = () => {
    this.setState({ modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  onChange = event => {
    event.preventDefault();
    let post = Object.assign({}, this.state.posting);
    this.setState({ posting: post });
    console.log(post);
  };

  onClick = event => {
    event.preventDefault();
    // console.log(event);
  };

  render() {
    return (
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
                <input
                  type="file"
                  defaultValue={this.state.posting.image}
                  name="image"
                  onChange={this.onChange}
                />
                <textarea
                  name="modal-post"
                  placeholder="¿A quién has salvado ultimamente?"
                  onChange={this.onChange}
                  defaultValue={this.state.posting.description}
                  className="modal-text"
                ></textarea>
              </form>
              <div className="modal-footer">
                <button className="btn-cancel" onClick={this.closeModal}>
                  CLOSE
                </button>
                <button className="btn-continue" onClick={this.onClick}>
                  CONTINUE
                </button>
              </div>
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
    post: state.post.post,
    posting: state.datapost.posting
  };
}

export default connect(mapStateToProps)(Post);
