import { SHOW_CITIES } from "../types";

const initialState = {
  cities: []
};

function cityReducer(state = initialState, action) {
  //console.log(action.payload);
  switch (action.type) {
    case SHOW_CITIES:
      return Object.assign({}, state, { cities: action.payload });

    default:
      return { ...state };
  }
}
export default cityReducer;
