import { BUY_CAKE } from "./CakeConstant"; 
import { BUY_CHOCOLATE } from "./CakeConstant";
  
export function buy_cake(){ 
    return{ 
        type:BUY_CAKE 
    } 
}

export function buy_chocolate(){ 
    return{ 
        type:BUY_CHOCOLATE 
    } 
}