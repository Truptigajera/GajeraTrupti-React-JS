import rootReducer from "./rootReducer";
// import { createStore } from "redux";
import productSaga from "./productRedux/productSaga";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from 'redux-saga'


const sagaMiddleWare = createSagaMiddleWare()


const Store = configureStore({
    reducer : rootReducer,
    middleware :()=> [sagaMiddleWare] 
    
})

sagaMiddleWare.run(productSaga)



export default Store