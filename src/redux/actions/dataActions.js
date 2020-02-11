import axios from "axios";
import store from "../store";

// types
import {
  SHOW_CITIES,
  SHOW_USER_PANEL,
  SHOW_OFFER_WORKS,
  CREAR_POST,
  VER_PERFIL_USER,
  CREAR_POST_USER,
  UPDATE_USER,
  SHOW_PROVINCES_NAME,
  OFFER_DETAILS
} from "../types";

export function showOfferWorks() {
  axios
    .get("http://localhost:8000/api/anuncio/")
    .then(res => {
      console.log(res);
      store.dispatch({ type: SHOW_OFFER_WORKS, payload: res.data });
    })
    .catch(error => console.log(error));
}

export function offerDetails(item) {
  store.dispatch({ type: OFFER_DETAILS, payload: item });
}

export function showCitiesId(name) {
  axios.get(`http://localhost:8000/api/provinces/?${name}`).then(res => {
    console.log("algo mi niño" + res);
    store.dispatch({ type: SHOW_PROVINCES_NAME, payload: res.data });
  });
}

export function showCities() {
  axios
    .get("http://localhost:8000/api/provinces")
    .then(res => {
      store.dispatch({ type: SHOW_CITIES, payload: res.data });
    })
    .catch(error => console.log(error));
}

export function showUserPanel() {
  const userStore = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  store.dispatch({ type: SHOW_USER_PANEL, payload: userStore });
}

// export function modifyUser(paramsBody, paramsHeaders) {
//   axios
//     .post(
//       "http://localhost:8000/user/modificarperfil",
//       paramsBody,
//       paramsHeaders
//     )
//     .then(res => {
//       store.dispatch({ type: USER_MODIFY, payload: [] });
//       return res.data.message;
//     })
//     .catch(err => console.log(err));
// }

export function perfilUser() {
  axios.get("http://localhost:8000/user/verperfil/").then(res => {
    console.log(res);
    store.dispatch({ type: VER_PERFIL_USER, payload: res.data });
  });
}

export function crearPost() {
  axios.get("http://localhost:8000/api/post").then(res => {
    console.log(res);
    store.dispatch({ type: CREAR_POST, payload: res.data });
  });
}

export function crearPostUser(send) {
  axios
    .post("http://localhost:8000/api/crearpost", send)
    .then(res => {
      console.log(res);
      store.dispatch({ type: CREAR_POST_USER, payload: res.data });
    })
    .catch(error => console.log(error));
}

export function userEdit(userUp) {
  console.log(userUp);
  axios
    .patch("http://localhost:8000/user/modificarperfil", userUp, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      store.dispatch({ type: UPDATE_USER, payload: res.data });
    });
}

// export const uploadImage = () => {
//   const fd = new FormData();
//   fd.append('image' )
//   axios.post('http://localhost:8000/api/img/uploadImg')

//   dispatch({ type: CREAR_POST });
//   let data = new FormData();
//   let quetienedata = data.append("image", {
//     uri: image_path,
//     name: "default.jpg",
//     type: "image/jpg"
//   });
//   console.log(quetienedata);

//   axios
//     .post("http://localhost:8000/api/img/uploadImg", {
//       method: "POST",
//       headers: {
//         "Content-Type": "multipart/form-data"
//       },
//       body: data
//     })
//     .then(res => {
//       console.log(res);
//       //dispatch(crearPost());
//       store.dispatch({ type: LOADING_USER, payload: res.data });
//     })
//     .catch(error => console.log(error));
// };
