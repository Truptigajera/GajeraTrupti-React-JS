/* eslint-disable no-case-declarations */

import {
    ADD_TO_CART,
    REMOVE_TO_CART,
    EMPTY_CART,
    INCREMENT_TO_CART,
    DECREMENT_TO_CART,
  } from "../Constant";
  
  const getCartDataFromLocalStorage =()=> {
    const cartData = localStorage.getItem('cart')
    return cartData ? JSON.parse(cartData):[]
  }
  
  const cartReducer = (data = getCartDataFromLocalStorage(), action) => {
  
    switch (action.type) {
      case ADD_TO_CART:
        // return [action.data, ...data];
  
        const existingProduct = data.findIndex(item => item.id === action.data.id)
        let updateCartData;
  
        if(existingProduct>=0){
          updateCartData = data.map((item)=> item.id === action.data.id ? {...item , quantity:item.quantity += 1}:item)
  
          localStorage.setItem('cart' , JSON.stringify(updateCartData))
  
        }else{
          updateCartData = [{...action.data , quantity:1},...data]
  
        }
  
        localStorage.setItem('cart', JSON.stringify(updateCartData))
  
        return updateCartData 
  
  
  
      case REMOVE_TO_CART:
        // data.length = data.length - 1
        // data.length = data.length ? data.length -1 : []
        const remiderItem = data.filter((item) => item.id !== action.data)
  
        localStorage.setItem("cart" , JSON.stringify(remiderItem))
  
        return remiderItem
  
      case EMPTY_CART:
  
        console.log("Removetocartreducer", action);
  
        localStorage.removeItem('cart')
  
        // localStorage.setItem("cart" , JSON.stringify(emptyCart).clear())
  
        return []
  
      case INCREMENT_TO_CART:
  
        let updatedIncrement = data.map((item)=> item.id === action.data ? {...item , quantity:item.quantity + 1}:item)
  
        
        localStorage.setItem("cart" , JSON.stringify(updatedIncrement))
  
        return updatedIncrement;
  
      case DECREMENT_TO_CART:
  
       let  updatedDecrement = data.map((item)=> item.id === action.data && item.quantity > 1 ? {...item , quantity:item.quantity - 1}:item)
       
       localStorage.setItem("cart" , JSON.stringify(updatedDecrement))
  
        return updatedDecrement 
        
      default:
  
        return data;
    }
  };
  
  export default cartReducer;
  