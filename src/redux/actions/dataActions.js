import axios from "axios";
import store from "../store";

// types
import SHOW_OFFER_WORKS from "../types";
import SHOW_CITIES from "../types";
import SHOW_USER_PANEL from "../types";

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
