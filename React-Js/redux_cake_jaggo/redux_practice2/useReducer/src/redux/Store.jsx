import CakeReducer from "./cake/CakeReducer";
import { createStore  , applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const store = createStore(CakeReducer , composeWithDevTools(applyMiddleware(logger)))

export default store