import { BUY_CAKE } from "./CakeConstant"; 
 
const initialState = { 
    numOfCake:10 
} 

const CakeReducer = (state = initialState , action) => { 
    switch(action.type){ 
        case BUY_CAKE: {
            if(state.numOfCake <=0 ){
                return{
                    ...state, 
                    numOfCake:state.numOfCake =0 
                }
            }else{
                return{ 
                    ...state, 
                    numOfCake:state.numOfCake - 1 
                } 
            }
            
        }
            default:return state 
    } 
} 
 
export default CakeReducer