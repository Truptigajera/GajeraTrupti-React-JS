import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CiCircleRemove } from 'react-icons/ci';
import { addtocart, emptycart } from '../reduxcore/CartRedux/cartAction';
import { removeToWishlist } from '../reduxcore/whishlistProduct/whishlistAction';
import { BsCartCheck } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';



const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist);

  const Navigate = useNavigate()

  const handleAddToCart = (item) => {
    dispatch(addtocart(item)); // Dispatch action to add item to cart
    dispatch(removeToWishlist(item.id)); // Dispatch action to remove item from wishlist
  };

  return (
    <div>
      <h1 className='title'>
        This is wishlist page
      </h1>
      <div className='flex justify-between'>
          <button className='btn' onClick={() => Navigate('/shop')}>BackToShop</button>
          <button className='btn me-0' onClick={() => dispatch(emptycart())}>EmptyCart</button>
        </div>
      <div className='flex items-center justify-evenly'>
        <div className='w-9/12'>
          <table className='table-fixed w-full'>
            <thead className='border'>
              <tr>
                <th className='p-2'>ADD TO CART</th>
                <th className='p-2'>Remove</th>
                <th>Product Image</th>
                <th>Product Title</th>
                <th>Product Price</th>
              </tr>
            </thead>
            <tbody>
              {wishlistData.map((item) => (
                <tr key={item.id} className='text-center border-2 border-solid'>
                  <td>
                    <button onClick={() => handleAddToCart(item)}>
                      <BsCartCheck className='text-2xl mx-auto stroke-1' />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => dispatch(removeToWishlist(item.id))}>
                      <CiCircleRemove className='text-2xl mx-auto stroke-1' />
                    </button>
                  </td>
                  <td>
                    <img className='size-28 mx-auto p-2' src={item.image} alt={item.title} />
                  </td>
                  <td>
                    <p>{item.title}</p>
                  </td>
                  <td>
                    <p>${item.price}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Placeholder for total price or other elements */}
      </div>
    </div>
  );
};

export default Wishlist;
