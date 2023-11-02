import {combineReducers} from "react-redux";
import { movieReducer } from "./movie";

const reducers =combineReducers({
  movies:movieReducer
})

export default reducers;