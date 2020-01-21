import { combineReducers } from "redux";
import searchReducer from "./repository";
import commitReducer from "./commit";


export default combineReducers({ searchReducer, commitReducer });
