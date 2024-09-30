import rootReducer from "./RootReducer";
import productSaga from "./productRedux/productSaga";
import { configureStore } from "@reduxjs/toolkit";
import creatSagaMiddleware from 'redux-saga'

const sagaMiddleware = creatSagaMiddleware()

const Store = configureStore({
   reducer:rootReducer , 
    middleware:() => [sagaMiddleware]
})

sagaMiddleware.run(productSaga)

export default Store 