//redux middleware

const { applyMiddleware } = require("redux")
const redux =  require ('redux')
const reduxLogger =require ('redux-logger')

const createStore = redux .createStore
const logger = reduxLogger.createLogger()

//constant

const BUY_ICECREAM = 'BUY_ICECREAM'

//Action
const buy_icecream =() =>{
    return{
        type:BUY_ICECREAM
    }
}

//initialstate

const initialstate ={
    numOfIceCream:20
}

//reducer

const reducer =(state=initialstate, action) => {
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numOfIceCream:state.numOfIceCream -1
        }
    }
}
 

const store = createStore (reducer, applyMiddleware(logger))

console.log('Initialstate is', store.getState());
store.subscribe(()=> console.log('updatedstate is', store.getState()))

store.dispatch(buy_icecream())