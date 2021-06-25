import { combineReducers } from "redux";
import CounterReducer from "./counter";
import LoginReducer from "./login";

const allReducers = combineReducers({
  counter: CounterReducer,
  login: LoginReducer,
});

export default allReducers;
