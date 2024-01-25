import React, { useEffect, useState } from "react";
import navlogo from '../assets/images/nav-logo.webp'

import { Link, } from "react-router-dom";
import { Phoneicon } from "./Icons";

const Navsection = () => {
        const [first, setfirst] = useState(false);
        function MobileView() {
                setfirst(!first);
                if (first === false) {
                        document.body.classList.add("overflow-hidden");
                } else {
                        document.body.classList.remove("overflow-hidden");
                }
        }

        { first ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden") }

        return (
                <div className=" pt-[24] sm:pt-[41px]">
                        <nav className=" max-w-[1220px] px-3 mx-auto">
                                <div className="flex justify-between items-center pt-[15px] px-3 ">
                                        <div className=" flex items-center gap-2 sm:gap-[65px]">
                                                <img className=" cursor-pointer" src={navlogo} alt="#" />
                                                <p className=" after:duration-500 after:w-[72px] cursor-pointer after:absolute relative after:right-0  after:-bottom-2  after:h-[2px] after:bg-[#B00000]  after:left-[8%] after:rounded-[10px] font-poppins text-[15px] font-semibold text-black leading-normal">Our Services</p>
                                        </div>
                                        <div className="flex items-center  gap-[10px] sm:gap-[40px]">
                                                <ul className={` ${first ? "left-0" : "left-[-100%]"} flex items-center  gap-[55px] duration-300 mobileview2  max-lg:justify-center max-lg:flex-col max-lg:text-white max-lg:w-full max-lg:h-full  max-lg:fixed max-lg:top-0 max-lg:z-20 max-lg:bg-[#F6E1E1]`}>
                                                        <Link to="/" onClick={() => setfirst(false)} className=' cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-2  after:h-[2px] after:bg-[#B00000] font-poppins text-[15px] font-semibold text-black leading-normal'>About</Link>
                                                        <Link to="/about" onClick={() => setfirst(false)} className='cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-2 after:h-[2px] after:bg-[#B00000] font-poppins text-[15px] font-semibold text-black leading-normal'> Blog&News</Link>
                                                        <Link to="/shop" onClick={() => setfirst(false)} className='cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-2 after:h-[2px] after:bg-[#B00000] font-poppins text-[15px] font-semibold text-black leading-normal'>Contact</Link>
                                                        <Link className=" font-poppins text-[15px] font-semibold text-black leading-normal after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-2 after:h-[2px] after:bg-[#B00000] block md:hidden">Account</Link>
                                                        <Link className=" block sm:hidden">
                                                                <a href="" className=" flex items-center gap-1 cursor-pointer  ">
                                                                        <Phoneicon />
                                                                        <p className="font-poppins text-[16px] font-semibold text-black leading-normal">
                                                                                <a href="tel:2349067322844">+2349067322844</a>
                                                                        </p>
                                                                </a>
                                                        </Link>


                                                </ul>
                                        </div>
                                        <div className=" flex items-center gap-[62px]">
                                                <p className="font-poppins text-[15px] cursor-pointer font-semibold text-black leading-normal after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-2 after:h-[2px] after:bg-[#B00000] hidden md:block">Account</p>
                                                <div className=" hidden sm:block">
                                                        <div className=" flex items-center gap-1 cursor-pointer">
                                                                <Phoneicon />
                                                                <p className="font-poppins text-[16px] font-semibold text-black leading-normal">
                                                                        <a href="tel:2349067322844">+2349067322844</a>
                                                                </p>
                                                        </div>
                                                </div>
                                        </div>
                                        <label className=" lg:hidden" onClick={MobileView}>
                                                {first ? (
                                                        <div className="z-20 relative">
                                                                <span className="flex bg-[#B00000] absolute -left-7 duration-300 rounded-lg top-1 rotate-45 h-[3px] w-6"></span>
                                                                <span className="flex bg-[#B00000] absolute -left-7 duration-300 rounded-lg -rotate-45 h-[3px] w-6 mt-1"></span>
                                                        </div>
                                                ) : (
                                                        <div className="z-20 relative">
                                                                <span className="flex bg-[#B00000] h-[3px] rounded-lg duration-300 w-6"></span>
                                                                <span className="flex bg-[#B00000] h-[3px] rounded-lg duration-300 w-6 my-1"></span>
                                                                <span className="flex bg-[#B00000] h-[3px] rounded-lg duration-300 w-6 "></span>
                                                        </div>
                                                )}
                                        </label>
                                </div>

                        </nav>
                </div>
        )
}

export default Navsection
