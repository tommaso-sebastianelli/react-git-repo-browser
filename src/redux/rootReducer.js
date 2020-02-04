import { combineReducers } from "redux";
import searchReducer from "./repository/reducer";
import commitReducer from "./commit/reducer";

export default combineReducers({ searchReducer, commitReducer });
