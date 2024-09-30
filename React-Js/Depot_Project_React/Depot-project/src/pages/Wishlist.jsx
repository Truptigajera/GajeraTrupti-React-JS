import React from 'react'
import { addToWishlist, removeToWishlist, emptyWishlist } from '../Redux/wishlistRedux/wishlistAction';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { addToCart } from '../Redux/cartRedux/cartAction';


const Wishlist = () => {

  const dispatch = useDispatch();
  const wishdata = useSelector((state) => state.wishlist);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); // Dispatch action to add item to cart
    dispatch(removeToWishlist(item.id)); // Dispatch action to remove item from wishlist
  };


  return (
    <div>
      <div className="mx-auto md:mx-0">
        <div className="flex justify-center items-center  bg-gray-100 h-40">
          <h1 className="text-5xl tracking-wider text-center text-black font-semibold">
            WISHLIST
          </h1>
        </div>
      </div>

      <div className="mx-8 mt-20 ">
        {
          wishdata.length == 0 ? (
            // empty cart here

            <div>
              <div className="mt-4 border border-gray-200  py-5 ">
                <h1 className=" m-0 text-center rounded-md text-black font-semibold text-2xl mx-auto">
                  YOUR WISHLIST IS CURRENTLY EMPTY.
                </h1>
              </div>
              
            </div>

          ) : (

            // map function here
            <>

              <div className="gap-16">
                <div className="">
                  <table className="table-fixed w-full">
                    <tbody>
                      {
                        wishdata.map((item) => {
                          return (
                            <>
                              <tr className="border-b-2 border-gray-200  font-semibold">
                                <td className="flex">
                                  <button
                                    onClick={() =>
                                      dispatch(removeToWishlist(item.id))
                                    }
                                  >
                                    <IoCloseOutline className="text-xl stroke-gray-400" />
                                  </button>
                                  <img
                                    className="size-28 mx-auto m-2 rounded-lg"
                                    src={item.image}
                                    alt=""
                                  />
                                </td>
                                <td>
                                  <p>{item.title}</p>
                                </td>

                                <td className="text-center font-normal text-gray-400">
                                  <p>${item.price}</p>
                                </td>

                                <td className="text-center font-normal text-gray-400">
                                  <p>In Stock</p>
                                </td>

                                <td className="text-center font-normal text-gray-400">
                                  <button onClick={() => handleAddToCart(item)} className=" rounded-md text-gray-600   font-medium mx-auto tracking-wider ">
                                    ADD TO CART
                                  </button>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                
              </div>
            </>
          )}
      </div>
      <div className='flex justify-between p-8'>
                <button className='btn bg-black text-white p-4' onClick={() => navigate('/shop')}>BackToShop</button>
                <button className='btn bg-black text-white p-4' onClick={() => dispatch(emptyWishlist())}>Emptywhishlist</button>
              </div>

    </div>
  )
}

export default Wishlist