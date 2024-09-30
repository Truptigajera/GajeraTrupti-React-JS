const initial_state = {
    cartList : [] ,
    wishList : [],
    totalAmount:{
        GST : 18.00,
        Discount : 10.00,
        subTotal : 0,
        GSTAmount : 0,
        discountAmount : 0,
        },
}

export const totalAmountReducer = (state=initial_state,action) => {
    switch (action.type) {
        case "SET_TOTAL_AMOUNT" : {
            return{
                ...state,
                totalAmount:action.payload,
            }
        }
        default : return state

     }
}


export const cartReducer = (state=initial_state,action) => {
    switch (action.type) {
        case "ADD_TO_CART" : { 
            let FindCart = state.cartList.find(data => data.id === action.payload.id)
            if(FindCart === undefined){
                return {
                ...state,
                cartList:[...state.cartList,action.payload]}
            }else{
                return state
            }
        }
        case "REMOVE_TO_CART" : {
            state.cartList = state.cartList.filter((data)=>data.id !== action.payload)
            return {
                ...state,
                cartList:[...state.cartList]
            }
        }
        case "INCREASE_CART_COUNT" : {
            let updatedCartList = state.cartList.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                }
                return item;
            })
            return {
                ...state,
                cartList: updatedCartList,
            }
        }
        case "DECREASE_CART_COUNT" : {
            let updatedCartList = state.cartList ;
            if(action.payload.quantity !== 1){
                updatedCartList = state.cartList.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        };
                    }
                    return item;
                });
            }
            return {
                ...state,
                cartList: updatedCartList
            };

        }
        default : return state;
    }
}


export const wishReducer = (state=initial_state,action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST" :{
            let FindWish = state.wishList.find(data => data.id === action.payload.id)  
            if(FindWish === undefined){ 
                return {
                ...state,
                wishList:[...state.wishList,action.payload]}
            }else{
                return state
            }
        }
        case "REMOVE_TO_WISHLIST" : {
            state.wishList = state.wishList.filter((data)=>data.id !== action.payload)
            return {
                ...state,
                wishList:[...state.wishList]
            }
        }
        case "INCREASE_WISH_COUNT" : {
            let updatedWishList = state.wishList.map((item)=>{
                if(item.id === action.payload.id){
                    return {
                        ...item,
                        quantity : item.quantity + 1
                    };
                }
                return item;
            })
            return{
                ...state,
                wishList : updatedWishList
            }
        }
        case "DECREASE_WISH_COUNT" : {
            let updatedWishList = state.wishList
            if(action.payload.quantity !== 1){
            updatedWishList = state.wishList.map((item)=>{
                if(item.id === action.payload.id){
                    return {
                        ...item,
                        quantity : item.quantity - 1
                    };
                }
                return item;
            })}
            return{
                ...state,
                wishList : updatedWishList
            }
        }
        default : return state ;
    }
}