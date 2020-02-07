import {SHOW_OFFER_WORKS} from "../types";

const initialState = {
  offer: []
};

function offerWorks(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case SHOW_OFFER_WORKS:
      return Object.assign({}, state, { offer: action.payload });
    default:
      return { ...state };
  }
}

export default offerWorks;
