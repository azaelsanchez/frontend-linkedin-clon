import axios from "axios";
import store from "../store";

// types
import SHOW_OFFER_WORKS from "../types";
import CREAR_POST from "../types";



export function showOfferWorks() {
  axios.get("http://localhost:8000/api/anuncio").then(res => {
   
    store.dispatch({ type: SHOW_OFFER_WORKS, payload: res.data });
  });
}

// export function showCities(){
//     axios.get('http://localhost:8000/api/ciudades').then().catch()
// }











export function crearPost() {
  axios.get("http://localhost:8000/api/post").then(res => {
    console.log(res);
    store.dispatch({ type: CREAR_POST, payload: res.data });
  });
}