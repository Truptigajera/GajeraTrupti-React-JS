import cartReducer from "./CartRedux/cartReducer";
import productReducer from "./productRedux/productReducer";
import wishlistReducer from "./whishlistProduct/whishlistReducer";
import {combineReducers} from 'redux'


const rootReducer  = combineReducers({
    cart:cartReducer,
    product:productReducer,
    wishlist:wishlistReducer
})

export default rootReducer