import { combineReducers } from "redux";
import helperReducer from "./helper.reducers";
import bankReducers from "./bank.reducers";

const rootReducer = combineReducers({
  helper: helperReducer,
  bank: bankReducers,
});

export default rootReducer;
