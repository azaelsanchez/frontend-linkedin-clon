import SHOW_USER_PANEL from "../types";

const initialState = {
  profile: []
};

function userProfileReducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case SHOW_USER_PANEL:
      return Object.assign({}, state, { profile: action.payload });

    default:
      return { ...state };
  }
}

export default userProfileReducer;
