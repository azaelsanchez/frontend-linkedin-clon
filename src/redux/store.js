import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//  Reducers

import offerWorksReducer from "./reducers/dataReducers";
import cityReducer from "./reducers/cityReducers";
import userProfileReducer from "./reducers/userProfileReducers";
import uiReducer from "./reducers/uiReducer";

const initialState = {};
const middleware = { thunk };
const reducers = combineReducers({
  // Aquí cargamos todos los reducers
  user: userProfileReducer,
  city: cityReducer,
  data: offerWorksReducer,
  UI: uiReducer
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...Object.values(middleware)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
