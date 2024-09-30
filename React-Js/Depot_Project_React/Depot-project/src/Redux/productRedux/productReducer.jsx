import { PRODUCT_LIST  , PRODUCT_SET } from "../Constant";

const ProductReducer = ( data = [] , action) => {

    switch (action.type) {

        case PRODUCT_LIST:  return [action.data]
        
        case PRODUCT_SET: return [action.data]
        
        default: return data
    }
}

export default ProductReducer