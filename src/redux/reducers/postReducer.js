import { CREAR_POST } from "../types";

const initialState = {
  post: []
};

function crearPost(state = initialState, action) {
  switch (action.type) {
    case CREAR_POST:
      return Object.assign({}, state, { post: action.payload });
    default:
      return { ...state };
  }
}

export default crearPost;
