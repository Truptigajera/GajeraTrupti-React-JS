import { ADD_TO_WISHLIST , REMOVE_TO_WISHLIST , EMPTY_WISHLIST , WISHLIST_TO_CART } from "../Constant";

const getwishDataFromLocalStorage =()=> {
    const wishdata = localStorage.getItem('wishlist')
    return wishdata ? JSON.parse(wishdata):[]
  }

const wishlistReducer = (data = 
  
getwishDataFromLocalStorage(), action) => {
  
    switch(action.type){
        
        case ADD_TO_WISHLIST:


        const existingProduct = data.findIndex(item => item.id === action.data.id)
        let updatewishData;
  
        if(existingProduct>=0){
          updatewishData = data.map((item)=> item.id === action.data.id ? {...item , quantity:item.quantity += 1}:item)
  
          localStorage.setItem('wishlist' , JSON.stringify(updatewishData))
  
        }else{
          updatewishData = [{...action.data , quantity:1},...data]
  
        }
  
        localStorage.setItem('wishlist', JSON.stringify(updatewishData))
  
        return updatewishData 


        case REMOVE_TO_WISHLIST:

        const remiderItem2 = data.filter((item) => item.id !== action.data)

        localStorage.setItem("wishlist" , JSON.stringify(remiderItem2))
  
        return remiderItem2


        case EMPTY_WISHLIST:
          
          localStorage.removeItem('wishlist')

          return data = []
  
  
        // case WISHLIST_TO_CART:return{

        // }

        default: return data
    }
}

export default wishlistReducer