import USER_MODIFY from "../types";

const initialState = {
    mUser:[]
};

function modifyUser (state = initialState, action) {
  ;
    switch (action.type) {
        case USER_MODIFY:
            return Object.assign({}, state, { post: action.payload });
          default:
            return { ...state };
    }
}

export default modifyUser;