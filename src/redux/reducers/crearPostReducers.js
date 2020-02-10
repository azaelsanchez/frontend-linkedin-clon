import { CREAR_POST_USER } from "../types";

const initialState = {
  posting: []
};

function crearPostUser(state = initialState, action) {
  switch (action.type) {
    case CREAR_POST_USER:
      return Object.assign({}, state, { posting: action.payload });

    default:
      return { ...state };
  }
}

export default crearPostUser;
