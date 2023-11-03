import { combineReducers } from "redux";
import { movieReducer } from "./movie";

const reducers = combineReducers({
  moviesData: movieReducer,
});

export default reducers;
