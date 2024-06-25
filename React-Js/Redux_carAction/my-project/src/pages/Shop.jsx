import React from 'react'
import { addtocart } from '../reduxcore/CartRedux/cartAction'
import { useSelector, useDispatch } from 'react-redux'
// import ProductData from '../reduxcore/productRedux/productAction'
import { useEffect } from 'react'
import { ProductList } from '../reduxcore/productRedux/productAction'
import { FaHeart } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { addToWishlist } from '../reduxcore/whishlistProduct/whishlistAction'



const Shop = () => {

  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const shopData = useSelector(state => state.product)
  console.log("shopData", shopData);
  const data = shopData.flat()
  console.log(data);

  useEffect(() => {
    dispatch(ProductList());
  }, [])


  return (
    <>
      <h1 className='title'>This is Shop page</h1>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-6 gap-12'>

        {
          data.map((item) => {
            return (
              <div key={item.id} className='h-full'>
                <div className='text-center border-2 border-solid h-full border-gray-300 bg-gray-400'>
                  <div className='' >
                    <img className='w-full h-72 object-cover' src={item.image} alt="" />
                  </div>
                  <div className=''>
                    <div className='flex'>
                      <div>                         
                        {/* <NavLink to ='/wishlist'> */}
                        <button onClick={() => dispatch(addToWishlist(item))}>
                          <FaHeart className='text-red-500 text-2xl m-2' />
                          </button>
                        {/* </NavLink> */}
                      </div>
                      <div className='ms-9'>
                        <p className=''>{item.title}</p>
                        <p>{item.price}</p>
                      </div>

                    </div>

                  </div>
                  <div className=''>
                    <button onClick={() => dispatch(addtocart(item))} className='btn text-white'>AddToCart</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Shop