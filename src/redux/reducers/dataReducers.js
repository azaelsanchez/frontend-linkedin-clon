import SHOW_OFFER_WORKS from "../types";

const initialState = {
  offer: [],
  profile: []
};

function offerWorksReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_OFFER_WORKS:
      return Object.assign({}, state, { offer: action.payload });

    default:
      return { ...state };
  }
}

export default offerWorksReducer;
