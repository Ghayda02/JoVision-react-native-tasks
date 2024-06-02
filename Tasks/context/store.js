import { createStore } from "redux";
import myReducer from "./reducers/indexCounter";


const store = createStore(myReducer);

export default store;