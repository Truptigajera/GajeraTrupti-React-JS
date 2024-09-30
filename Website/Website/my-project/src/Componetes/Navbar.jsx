import React from 'react';
import { FiUser } from "react-icons/fi";
import { VscSearch } from "react-icons/vsc";
import { FiMenu } from "react-icons/fi";
import img from '../assets/Images/asset 8.png'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="bg-white  sticky top-0 z-50">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <ul className="hidden md:flex space-x-6">
                        <li>
                            <Link to="/" className="text-gray-500 hover:text-black menu-h ">HOME</Link>
                        </li>
                        <li>

                            <Link to="/Shop" className="text-gray-500 hover:text-black">SHOP
                            </Link>
                        </li>
                        <li>

                            <Link to="/Pages" className="text-gray-500 hover:text-black"></Link>
                            <div class="dropdown">
                                <button class="dropbtn text-gray-500 hover:text-black">PAGES
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-content">
                                    <Link  to="/AboutUs">About Us</Link>
                                    <Link to="/Faq">FAQ</Link>
                                    <Link to="/ContactUs">Contact US</Link>
                                </div>
                            </div>
                        </li>
                        <li>

                            <a href="/elements" className="text-gray-500 hover:text-black">WhichList(0)</a>
                        </li>
                    </ul>
                    <div>
                        <Link to="/">
                            <img className='' src={img} alt="" />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/Cart" className="text-gray-500 hover:text-black">CART ($0)</Link>
                        <Link to="/Register" className="text-gray-500 hover:text-black flex ">
                            <span className='mt-1 mr-1'><FiUser /></span>
                            LOGIN</Link>
                        <button className="text-gray-500 hover:text-black md:hidden focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <a href="">
                            <VscSearch />
                        </a>
                        <a href="./Menupage">
                            <FiMenu />
                        </a>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
