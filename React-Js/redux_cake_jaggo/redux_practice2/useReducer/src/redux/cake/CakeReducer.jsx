import { BUY_CAKE } from "./CakeConstant";
import { BUY_CHOCOLATE } from "./CakeConstant";

const initialState = {
    numOfCake:10,
    numOfChocolate:10
}


const CakeReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CAKE:
            if(state.numOfCake <= 0){
                return{
                    ...state,
                    numOfCake:state.numOfCake = 0
                }
            }
            else{
                return{
                    ...state,
                    numOfCake:state.numOfCake -1
                }
            }
        case BUY_CHOCOLATE:
            if(state.numOfChocolate <= 0){
                return{
                    ...state,
                    numOfChocolate:state.numOfChocolate = 0
                }
            }
            else{
                return{
                    ...state,
                    numOfChocolate:state.numOfChocolate -1
                }
            }    
            default:return state
    }
}

export default CakeReducer