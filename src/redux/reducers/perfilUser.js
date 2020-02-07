import { VER_PERFIL_USER } from "../types";

const initialState = {
  puser: []
};

function perfilUser(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case VER_PERFIL_USER:
      return Object.assign({}, state, { puser: action.payload });
    default:
      return { ...state };
  }
}

export default perfilUser;
