import { BUY_CAKE } from "./CakeConstant";
import { BUY_CHOCOLATE } from "./CakeConstant";
 
export function buy_cake (){
    console.log("Cake");

    return{
        type:BUY_CAKE
    }
}

export function buy_chocolate (){
    console.log("Choco");
    return{
        type:BUY_CHOCOLATE
    }
}