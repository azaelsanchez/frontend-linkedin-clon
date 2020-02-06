import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//  Reducers

import dataReducer from "./reducers/dataReducers";
import uiReducer from "./reducers/uiReducer";

const initialState = {};
const middleware = { thunk };
const reducers = combineReducers({
  // Aquí cargamos todos los reducers

  data: dataReducer,
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
