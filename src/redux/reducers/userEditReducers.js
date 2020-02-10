import { UPDATE_USER } from "../types";

const initialState = {
  userUpdate: []
};

function userUpdate(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return Object.assign({}, state, { userUpdate: action.payload });

    default:
      return { ...state };
  }
}

export default userUpdate;
