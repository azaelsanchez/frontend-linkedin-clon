import { SEARCH_CITY } from "../types";

const initialState = {
  citiesFound: []
};

function searchCity(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CITY:
      return Object.assign({}, state, { citiesFound: action.payload });

    default:
      return { ...state };
  }
}

export default searchCity;
