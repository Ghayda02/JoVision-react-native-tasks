import { createStore } from "redux";
import { combineReducers } from "redux";
import Task39Reducer from "./Task39Reducers";

const myReducer = combineReducers({
    text : Task39Reducer
});

export default myReducer;