import { LOADING_USER } from "../types";

const initalState = {
  loading: []
};

function uploadImage(state = initalState, action) {
  switch (action.type) {
    case LOADING_USER:
      return Object.assign({}, state, { loading: action.payload });

    default:
      return { ...state };
  }
}

export default uploadImage;
