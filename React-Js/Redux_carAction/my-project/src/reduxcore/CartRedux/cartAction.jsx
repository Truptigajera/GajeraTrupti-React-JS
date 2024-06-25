 import {ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART , INCREMENT_TO_CART , DECREMENT_TO_CART } from "../Constant";

 export const addtocart =(data)=> {
    console.warn('AddToCart', data);
    return{
        type:ADD_TO_CART,
        data
    }
 }

 export const removetocart =(data)=> {
    console.warn('RemoveToCart',data);

    return{
        type:REMOVE_TO_CART,
        data
    }
 }

 export const emptycart =()=> {
    return{
        type:EMPTY_CART
    }
 }

 export const incrementtocart =(data)=> {
    return{
        type:INCREMENT_TO_CART,
        data
    }
 }

 export const decrementtocart =(data)=> {
    return{
        type:DECREMENT_TO_CART,
        data
    }
 }

