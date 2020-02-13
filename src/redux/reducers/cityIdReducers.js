import { SHOW_PROVINCES_NAME } from "../types";

const initialState = {
  province_id: []
};

function province_id(state = initialState, action) {
  switch (action.type) {
    case SHOW_PROVINCES_NAME:
      return Object.assign({}, state, { province_id: action.payload });
      
    default:
      return { ...state };
  }
}

export default province_id;
