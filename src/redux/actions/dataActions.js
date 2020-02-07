import axios from "axios";
import store from "../store";

// types
import { SHOW_CITIES } from "../types";
import { SHOW_USER_PANEL } from "../types";
import { SHOW_OFFER_WORKS } from "../types";
import { CREAR_POST } from "../types";
import { USER_MODIFY } from "../types";
import { VER_PERFIL_USER } from "../types";

export function showOfferWorks() {
  axios
    .get("http://localhost:8000/api/anuncio")
    .then(res => {
      store.dispatch({ type: SHOW_OFFER_WORKS, payload: res.data });
    })
    .catch(error => console.log(error));
}

export function showCities() {
  axios
    .get("http://localhost:8000/api/ciudades")
    .then(res => {
      store.dispatch({ type: SHOW_CITIES, payload: res.data });
    })
    .catch(error => console.log(error));
}

export function showUserPanel() {
  const userStore = JSON.parse(localStorage.getItem("user"));
  store.dispatch({ type: SHOW_USER_PANEL, payload: userStore });
}

export function modifyUser(paramsBody, paramsHeaders) {
  axios
    .post(
      "http://localhost:8000/user/modificarperfil",
      paramsBody,
      paramsHeaders
    )
    .then(res => {
      store.dispatch({ type: USER_MODIFY, payload: [] });
      return res.data.message;
    })
    .catch(err => console.log(err));
}

export function perfilUser() {
  axios.get("http://localhost:8000/user/verperfil/${id}").then(res => {
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
