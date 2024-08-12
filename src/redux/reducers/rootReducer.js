import cartReducer from "./cartReducer";
import totalReducer from "./calculationReducer";
import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";

const rootReducer = combineReducers({
  loader: loaderReducer,
  cartAdding: cartReducer,
  totalReducer: totalReducer,
});

export default rootReducer;
