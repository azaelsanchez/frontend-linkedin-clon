import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

// Redux;
import { crearPost, showUserPanel } from "../redux/actions/dataActions";

import PanelUser from "../components/Panel-user";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

import "./Noticias.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      post: {
        image_path: null,
        description: "",
        user_id: null,
        created_at: null
      },
      status: null,
      selectedFile: null
    };
  }

  componentDidMount() {
    crearPost();
    showUserPanel();
  }

  openModal = () => {
    this.setState({ modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  // onUpdateImage = event => {
  //   event.preventDefault();

  //   const fd = new FormData();
  //   fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
  //   axios
  //     .post("http://localhost:8000/api/storage", fd, {
  //       onUploadProgress: ProgressEvent => {
  //         console.log(
  //           "Upload Progress: " +
  //             Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
  //             "%"
  //         );
  //       }
  //     })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(error => console.log(error));
  // };

  image_pathRef = React.createRef();
  descriptionRef = React.createRef();

  formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });
  fileChange = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  changeState = () => {
    //const dateString = "2019-10-30T14:01:59.689Z";

    this.setState({
      post: {
        image_path: this.state.selectedFile?.name,
        description: this.descriptionRef.current.value,
        user_id: this.props.profile[0]?.id,
        created_at: null
      }
    });
    console.log(this.state.post);
  };

  savePost = image_path => {
    // haremos petición por pos para guardar el post;
    try {
      console.log("ei", image_path);
      axios
        .post("http://localhost:8000/api/crearpost", {
          description: this.descriptionRef.current.value,
          user_id: this.props.profile[0]?.id,
          created_at: null,
          image_path
        })
        .then(res => {
          if (res.data.post) {
            this.setState({
              post: res.data?.post,
              status: "waiting"
            });

            // subir imagen;
            if (this.state.selectedFile !== null) {
              // Sacaremos el id del articulo guardado;
              let postId = this.state.post?.id;

              // Creo un form data para añadir el fichero;
              const formData = new FormData();

              formData.append(
                "image_path",
                this.state.selectedFile,
                this.state.selectedFile?.name
              );

              // Hago la petición ajax por medio de axios

              axios
                .post(
                  "http://localhost:8000/api/img/uploadImg",
                  postId,
                  formData
                )
                .then(res => {
                  if (res.data.post) {
                    this.setState({
                      post: res.data.post,
                      status: "success"
                    });
                  } else {
                    this.setState({
                      post: res.data.post,
                      status: "failed"
                    });
                  }
                });
            } else {
              this.setState({
                status: "success"
              });
            }
          } else {
            this.setState({
              status: "failed"
            });
          }
        });
    } catch (error) {
      console.error(error);
    }
  };
  handleSubmit = async event => {
    event.preventDefault();
    try {
      const res = await this.fileUpload();
      await this.savePost(res?.data);
      setTimeout(() => {
        crearPost();
      }, 1000);
      this.closeModal();
    } catch (error) {
      console.error(error);
    }
  };
  fileUpload = () => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
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

  render() {
    // if (this.state.status === "success") {
    //   //return this.props.history.push("/post");
    //   return <Redirect to="/post" />;
    // }
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
              <form className="form-modal" onSubmit={this.handleSubmit}>
                <textarea
                  ref={this.descriptionRef}
                  name="description"
                  placeholder="¿A quién has salvado ultimamente?"
                  onChange={this.changeState}
                  className="modal-text"
                ></textarea>

                <input
                  ref={this.image_pathRef}
                  id="imageInput"
                  type="file"
                  name="image"
                  onChange={this.fileChange}
                />

                <button className="btn-cancel" onClick={this.closeModal}>
                  CERRAR
                </button>
                {/* <input
                  type="submit"
                  value="PUBLICAR"
                  className="guardar-modal"
                  onChange={this.changeState}
                /> */}
                <button name="image">PUBLICAR</button>
              </form>
            </Modal>
          </div>
          <div className="container-anuncios">
            {this.props.post
              ?.sort((a, b) => b.id - a.id)
              ?.map(item => (
                <div key={item.id} className="items-anuncio">
                  <h1>@ {item.user?.name}</h1>
                  <img
                    src={`http://localhost:8000/storage/${item.image_path}`}
                    alt={item.description}
                  />
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
  return {
    post: state.post.post,
    posting: state.datapost.posting,
    profile: state.user.profile
  };
}

export default connect(mapStateToProps)(Post);
