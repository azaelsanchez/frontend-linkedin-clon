import { SEARCH_CITY } from "../types";

const initialState = {
  search: []
};

function searchCity(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CITY:
      return Object.assign({}, state, { search: action.payload });

    default:
      return { ...state };
  }
}

export default searchCity;
