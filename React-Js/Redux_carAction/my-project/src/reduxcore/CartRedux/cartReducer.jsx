import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART, INCREMENT_TO_CART, DECREMENT_TO_CART } from "../Constant";

const getCartDataFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart')
    return cartData ? JSON.parse(cartData) : []
}


const cartReducer = (data=getCartDataFromLocalStorage(), action) => {
    
    switch (action.type) {
        case ADD_TO_CART:
        console.warn('AddToCartreducer',action);

        const existingProduct = data.findIndex(item => item.id === action.data.id)

        let updatedCartData;

        if(existingProduct >= 0){
            updatedCartData = data.map((item)=> item.id === action.data.id ? {...item, quantity:item.quantity += 1}:item)

            localStorage.setItem('cart',JSON.stringify (updatedCartData))
        }

        else{
            updatedCartData = [{...action.data , quantity:1} , ...data ]
        }
        localStorage.setItem('cart', JSON.stringify(updatedCartData))

        return updatedCartData
        
        

        case REMOVE_TO_CART:
        console.warn('RemoveToCartReducer',action);
        
        const reminderItem = data.filter((item)=> item.id !== action.data)
        localStorage.setItem('cart', JSON.stringify(reminderItem))
        
        return reminderItem


        case EMPTY_CART: 
        
        console.warn('EpmtyToCartReducer',action);
        return data = []


        case INCREMENT_TO_CART: 
            let updateIncrement = data.map((item)=> item.id === action.data ? {...item, quantity:item.quantity + 1}:item)

            return updateIncrement

        
        case DECREMENT_TO_CART: 
            let updatedDecrement = data.map((item)=> item.id === action.data && item.quantity > 1 ? {...item, quantity:item.quantity - 1}:item)

            return updatedDecrement

        
        default: return data
    }
}

export default cartReducer