import React from "react";
import {removeToCart,emptyCart,incrementToCart,decrementToCart,} from "../Redux/cartRedux/cartAction";

import { useSelector, useDispatch } from "react-redux";
// import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const Cart = () => {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const amount =
    cartdata.length &&
    cartdata
      .map((item) => item.price * item.quantity)
      .reduce((prev, next) => (prev += next));
  console.log("Cartamount", amount);

  return (
    <div>
      <div className="mx-auto md:mx-0">
        <div className="flex justify-center items-center  bg-feq">
          <h1 className="text-6xl text-center text-white font-bold">CART</h1>
        </div>
      </div>

      <div className="mt-16 mx-8 justify-between">
        

        {
        cartdata.length == 0 ? (
          // empty cart here

          <div>
            <div className="mt-4 border border-gray-200  py-5 ">
              <h1 className=" m-0 text-center rounded-md text-black font-semibold text-2xl mx-auto">
              YOUR CART IS CURRENTLY EMPTY.
              </h1>
            </div>
            <div className="mt-5 text-gray-500 font-light tracking-wide">
              <p>Why not return to our amazing shop and start filling it with products. Just click on the button below to instantly get back to the shop page. Oh, and while you’re there, check out all of our mind-blowing discounts.</p>
            </div>

            <div className="text-center top-0 mt-5  ">
              <button
                className="bg-black m-0  py-5 px-10 font-semibold text-sm text-white mx-auto tracking-wider "
                onClick={() => navigate("/shop")}
              >
                RETURN TO SHOP
              </button>
            </div>
          </div>
        ) : (
          // map function here
          <>
          <div className="">
          <h1 className="text-2xl font-bold">SHOPPING CART</h1>
        </div>
        <div className="grid  mt-4">
          <button
            className=" me-0  py-2 px-3 rounded-md text-black border-2 border-gray-400  font-semibold mx-auto tracking-wider"
            onClick={() => dispatch(emptyCart())}
          >
            EmptyCart
          </button>
        </div>
          <div className="lg:flex justify-between gap-16 mt-7">
            <div className="lg:w-9/12">
              <table className="table-fixed w-full">
               
                <tbody>
                  {
                   cartdata.map((item) => {
                    return (
                      <>
                        <tr className="border-b border-solid border-gray-400  font-semibold">
                          <td className="flex">
                            <button
                              onClick={() => dispatch(removeToCart(item.id))}
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

                          <td>
                            <div className="flex justify-between items-center border-2 p-3 text-gray-500 font-normal">
                              <p className="text-sm ">Quantity</p>
                              <button
                                className=""
                                onClick={() => dispatch(decrementToCart(item.id))
                                }
                              >
                                <IoMdArrowDropleft />
                              </button>
                              <h1 className="text-xl">
                                <p>{item.quantity}</p>
                              </h1>
                              <button className="" onClick={() => dispatch(incrementToCart(item.id))}>
                                <IoMdArrowDropright />
                              </button>
                            </div>
                          </td>

                          <td className="text-center font-normal text-gray-400">
                            <p>${item.price * item.quantity}</p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>



            <div className="w-full lg:w-3/12 mt-8 lg:mt-0 h-96 bg-gray-50 p-5 space-y-5">
              <div className="flex space-x-8">
                <h1 className="font-semibold text-2xl">CART TOTALS</h1>
              </div>
              <div className="flex space-x-9">
                <p className="text-base font-semibold ">
                  SUBTOTAL
                </p>
                <p className="font-sans text-gray-500 font-extralight ">${amount}</p>
              </div>
              <div className="flex space-x-9">
                <p className="text-base font-semibold tracking-wider ">
                  SHIPPING
                </p>
                <div className="space-y-3 text-sm font-extralight  text-gray-400 ">
                  <p>
                    {" "}
                    <input
                      type="radio"
                      name="A"
                      id=""
                      className="inline me-1 "
                    />
                    Free shipping
                  </p>
                  <p>
                    {" "}
                    <input
                      type="radio"
                      name="A"
                      id=""
                      className="inline me-1"
                    />
                    Local pickup
                  </p>
                  <p>
                    {" "}
                    <input
                      type="radio"
                      name="A"
                      id=""
                      className="inline me-1"
                    />
                    Flat Rate:Final{" "}
                  </p>
                </div>
              </div>
              <hr className="border border-gray-200" />

              <div className="flex justify-between">
                <p className="text-xl font-semibold tracking-wider">TOTAL</p>
                <p className="text-xl font-semibold tracking-wider font-sans">${amount}</p>
              </div>

              <div className="text-center w-full bg-black py-3">
                <button className="text-sm font-semibold  text-white">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
