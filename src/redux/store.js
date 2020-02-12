import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//  Reducers
import offerWorksReducer from "./reducers/dataReducers";
import cityReducer from "./reducers/cityReducers";
import userProfileReducer from "./reducers/userProfileReducers";
import postReducer from "./reducers/postReducer";
import modificarUser from "./reducers/modificarUser";
import uiReducer from "./reducers/uiReducer";
import perfilUser from "./reducers/perfilUser";
import crearPostReducers from "./reducers/crearPostReducers";
import uploadFileReducers from "./reducers/uploadFileReducers";
import userUpdate from "./reducers/userEditReducers";
import province_id from "./reducers/cityIdReducers";
import offerDetails from "./reducers/offerDetailsReducers";
import verCurriculum from "./reducers/verCurriculumReducer";

const initialState = {};
const middleware = { thunk };
const reducers = combineReducers({
  // Aquí cargamos todos los reducers
  file: uploadFileReducers,
  user: userProfileReducer,
  city: cityReducer,
  data: offerWorksReducer,
  post: postReducer,
  datapost: crearPostReducers,
  mUser: modificarUser,
  pUser: perfilUser,
  userUp: userUpdate,
  province: province_id,
  offer: offerDetails,
  cv:verCurriculum,
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
