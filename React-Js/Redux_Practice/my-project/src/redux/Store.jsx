import CakeReducer from "./cake/CakeReducer";
import { createStore } from "redux";

const store = createStore(CakeReducer)

export default store