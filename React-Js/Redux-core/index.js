const redux= require ('redux')
const createStore  = redux.createStore

const BUY_ICECREAM = "BUY_ICECREAM"

//Action 
const buy_icecream =() => {
    return{
        type:BUY_ICECREAM,
        info:'First Redux Action'
    }
}
 //intialize

 const initialstate = {
    numOfIcecream:10
 }

 //Reducer

 const IceCreamReducer = (state =initialstate,action) => {
    switch (action.type){
        case BUY_ICECREAM : return {
            ...state,
            numOfIcecream:state.numOfIcecream -1
            }
            default : return state
    }
 }

 const store = createStore (IceCreamReducer);
 console.log('intialstate', store.getState());

 const unsubscribe = store. subscribe(() => console.log('updated state', store.getState()))

 store.dispatch (buy_icecream())
 store.dispatch (buy_icecream())

 unsubscribe()