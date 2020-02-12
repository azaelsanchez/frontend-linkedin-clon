import { VER_CV } from "../types";

const initialState = {
  verCV: []
};

function verCurriculum(state = initialState, action) {
  switch (action.type) {
    case VER_CV:
      return Object.assign({}, state, { verCV: action.payload });

    default:
      return { ...state };
  }
}

export default verCurriculum;
