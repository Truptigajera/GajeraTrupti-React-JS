import { PRODUCT_LIST  , PRODUCT_SET } from "../Constant";

export const ProductList = (data) => {
    return{
        type:PRODUCT_LIST,
        data:'apple'
    }
}

export const ProductData = (data) => {
    return{
        type:PRODUCT_SET,
        data:data
    }
}




 