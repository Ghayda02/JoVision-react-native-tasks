import { createStore } from "redux";
import myReducer from "./Reducers/main";


const store = createStore(myReducer);

export default store;