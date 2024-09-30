import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className="border border-gray-100 mt-20 tracking-wider ">
                <div className="mx-auto flex justify-around items-center py-24">
                    <div>
                        <h3 className="text-black text-md font-semibold">CUSTOMER SERVICE</h3>
                        <ul className=" text-[#929292] text-sm  font-normal mt-5 space-y-2">
                            <li>Help & Contact Us</li>
                            <li>Returns & Refunds</li>
                            <li>Online Stores</li>
                            <li>Terms & Conditions</li>

                        </ul>
                    </div>
                    <div>
                        <h3 className="text-black text-md font-semibold">COMPANY</h3>
                        <ul className=" text-[#929292] text-sm  font-normal mt-5 space-y-2">
                            <li>What We Do</li>
                            <li>Available Services</li>
                            <li>Latest Posts</li>
                            <li>FAQs</li>

                        </ul>
                    </div>
                    <div>

                     <h3 className="text-black text-md font-semibold">SOCIAL MEDIA</h3>
                        <ul className=" text-[#929292] text-sm  font-normal mt-5 space-y-2">
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Tumblr</li>
                            <li>Pinterest</li>

                        </ul>

                    </div>
                    <div>

                      <h3 className="text-black text-md font-semibold">PROFILE</h3>
                        <ul className=" text-[#929292] text-sm  font-normal mt-5 space-y-2">
                            <li>My Account</li>
                            <li>Checkout</li>
                            <li>Order Tracking</li>
                            <li>Help & Support</li>
                        </ul>
                    </div>
                </div>
            </div>
                <div className="flex px-24 justify-between pb-6 mt-6 ">
                    <p className="text-xs text-[#929292] font-normal">© 2021 Qode Interactive, All Rights Reserved</p>
                    <div className="flex space-x-3">
                        <p className="text-xs  text-[#0f0808]    font-normal ">Follow Us</p>
                        <div className="flex space-x-6">
                        <FaTwitter className="text-sm"/>
                        <FaInstagram className="text-sm"/>
                        <FaFacebookF className="text-sm"/>
                        </div>

                    </div>
                </div>
        </>
    )
}

export default Footer