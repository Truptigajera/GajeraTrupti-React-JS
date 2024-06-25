import React from 'react'
import { removetocart, emptycart, incrementtocart, decrementtocart } from '../reduxcore/CartRedux/cartAction'
import { useSelector, useDispatch } from 'react-redux'
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const dispatch = useDispatch()
  const Cartdata = useSelector((state) => state.cart)
  const Navigate = useNavigate()

  const amount = Cartdata.length && Cartdata.map((item) => item.price * item.quantity).reduce((prev, next) => prev += next)



  console.log("Cartdata", Cartdata);

  console.log('Cartamount', amount);


  return (
    <div className='m-4'>
      <div className=''>
        <h1 className='title'>
          this is cart page.
        </h1>
        <div className='flex justify-between'>
          <button className='btn' onClick={() => Navigate('/shop')}>BackToShop</button>
          <button className='btn me-0' onClick={() => dispatch(emptycart())}>EmptyCart</button>
        </div>
      </div>
      <div className='flex item-center justify-evenly '>
        <div className='w-9/12'>
          <table className='table-fixed w-full'>
            <thead className='border'>
              <tr className=''>
                <th className='p-2'>Remove</th>
                <th>Product Image</th>
                <th>Product Title</th>
                <th>Product Quantity</th>
                <th>Product Price</th>
              </tr>
            </thead>
            <tbody className=''>
              {
                Cartdata.map((item) => {
                  return (
                    <tr className='text-center border-2 border-solid '>
                      <td className=''>
                        <button onClick={() => dispatch(removetocart(item.id))}>
                          <CiCircleRemove className='text-2xl mx-auto stroke-1' />
                        </button>

                      </td>
                      <td>
                        <img className='size-28 mx-auto p-2' src={item.image} alt="" />
                      </td>
                      <td>
                        <p>
                          {item.title}

                        </p>
                      </td>
                      <td className=''>
                        <button onClick={() => dispatch(incrementtocart(item.id))} className='me-4 text-2xl'>+</button>
                        <p className='inline'>{item.quantity}</p>
                        <button onClick={() => dispatch(decrementtocart(item.id))} className='ms-4 text-2xl'>-</button>
                      </td>
                      <td>
                        <p>${item.price * item.quantity}</p>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div>
          <table className='border-2'>
            <thead className=''>
              <tr className=''>
                <th className='p-2'>Total Price</th>
              </tr>
              <tr>
                <th className='p-2'>${amount}</th>
              </tr>
            </thead>
          </table>

        </div>
      </div>

    </div>
  )
}

export default Cart


