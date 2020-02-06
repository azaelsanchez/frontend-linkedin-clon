import axios from "axios";
import store from "../store";

// types
import SHOW_OFFER_WORKS from "../types";

export function showOfferWorks() {
  axios.get("http://localhost:8000/api/anuncio").then(res => {
    console.log(res);
    store.dispatch({ type: SHOW_OFFER_WORKS, payload: res.data });
  });
}

// export function showCities(){
//     axios.get('http://localhost:8000/api/ciudades').then().catch()
// }
