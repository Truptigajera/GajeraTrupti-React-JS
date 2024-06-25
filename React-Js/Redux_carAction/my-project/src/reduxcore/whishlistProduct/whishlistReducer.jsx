import { ADD_TO_WISHLIST , REMOVE_TO_WISHLIST , EMPTY_WISHLIST , WISHLIST_TO_CART } from "../Constant";

const getWhishlistDataFromLocalStorage = () =>  {
    const whishlistData = localStorage.getItem('wishlist')
    return whishlistData ? JSON.parse(whishlistData) : []
}


const wishlistReducer = (data = getWhishlistDataFromLocalStorage() , action) => {
    switch(action.type){
        case ADD_TO_WISHLIST:
        console.warn('AddToWhishlistreducer',action);

        const existingProduct = data.findIndex(item => item.id === action.data.id)

        let updatedWhishlistData;

        if(existingProduct >= 0){
            updatedWhishlistData = data.map((item)=> item.id === action.data.id ? {...item, quantity:item.quantity += 1}:item)

            localStorage.setItem('wishlist',JSON.stringify (updatedWhishlistData))
        }

        else{
            updatedWhishlistData = [{...action.data , quantity:1} , ...data ]
        }
        localStorage.setItem('wishlist', JSON.stringify(updatedWhishlistData))

        return updatedWhishlistData


        case REMOVE_TO_WISHLIST:console.warn('RemoveToWhishlistReducer',action);
        
        const reminderItem = data.filter((item)=> item.id !== action.data)
        localStorage.setItem('wishlist', JSON.stringify(reminderItem))
        
        return reminderItem

        case EMPTY_WISHLIST:
        
        console.warn('EpmtyToWhishlistReducer',action);
        return data = []

        case WISHLIST_TO_CART:return{

        }
        default: return data
    }
}

export default wishlistReducer