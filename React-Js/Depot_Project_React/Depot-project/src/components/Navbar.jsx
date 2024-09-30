import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { VscSearch } from "react-icons/vsc";
import { CiMenuBurger } from "react-icons/ci";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@nextui-org/react";
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import img from '../assets/depotBlack.png'


const Navbar = () => {

    const cartdata = useSelector((state) => state.cart);

    const [isOpen, setIsOpen] = useState(false);

    const amount =
        cartdata.length && cartdata.map((item) => item.price * item.quantity).reduce((prev, next) => (prev += next));
    console.log("Cartamount", amount);


    return (
        <>


            <div className='p-4 sticky top-0 z-50 bg-white'>
                <nav className="flex justify-evenly mx-auto container py-3  ">

                    <ul className="flex space-x-10">
                        <li>
                            <Link className='text-[12px] font-medium hover:text-black hover:underline' to="/">HOME</Link>
                        </li>
                        <li>
                            <Link className='text-[12px] font-medium hover:text-black hover:underline' to="/shop">SHOP</Link>
                        </li>
                        <li>
                            <div className='dropdown'>
                                <Link className="text-black text-[12px] font-semibold  hover:text-gray-500">
                                    PAGES
                                </Link>
                                <div className='dropdown-content text-[12px]'>
                                    <Link to="/AboutUs" href="" >About Us</Link>
                                    <Link to="/FAQ" href="">FAQ</Link>
                                    <Link to="/ContactUs" href="">Contact Us</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link className=" text-black text-[12px] font-semibold  hover:text-gray-500" to="/wishlist">
                                WISHLIST                
                            </Link>
                        </li>
                    </ul>
                    <div className=''>
                        <Link to="/">
                            <img className='w-32' src={img} alt="" />
                        </Link>
                    </div>
                    <div className=''>
                        <ul className='flex text-[12px] font-semibold'>
                            <li>
                                <Link to='/cart' className="text-black text-sm  font-medium">
                                    CART <span className="text-xs font-sans text-gray-500 font-light">(${amount})</span>
                                </Link>
                            </li>
                            <li className='mx-4 ml-2'><Link className='flex'><CiUser className='mt-1 ms-1  size-4 ' /><span className='ml-2'>LOGIN</span></Link></li>
                            <li className='mx-6'><Link className=''><VscSearch className='size-4 mt-1' /></Link></li>
                            <li className='mx-6'><Link><CiMenuBurger className=' size-4 mt-1' /></Link></li>
                        </ul>
                    </div>
                </nav>
                
            </div>
            <Outlet />
        </>
    )
}

export default Navbar