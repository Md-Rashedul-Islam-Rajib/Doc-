import { useState } from "react";
import logo from "../assets/Media/logo dark.png"
import { GoArrowUpRight } from "react-icons/go";

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);
  
    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li><a href="/home" className="text-gray-600 hover:text-gray-900">Home</a></li>
        <li><a href="/services" className="text-gray-600 hover:text-gray-900">Services</a></li>
        <li><a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a></li>
        <li><a href="/about-us" className="text-gray-600 hover:text-gray-900">About Us</a></li>
      </ul>
    );
  
    return (
      <nav className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 text-[#020043]">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <img className="cursor-pointer" src={logo} alt="" />
          <div className="hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <button className="hidden lg:flex gap-1 items-center px-4 py-2 rounded-xl border border-[#343268]"> <span>Appointment</span> <GoArrowUpRight /> </button>
          </div>
          <button
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile navigation */}
        {openNav && (
          <div className="container mx-auto">
            {navList}
            <div className="flex items-center gap-x-1">
            <button className="flex gap-1 items-center px-4 py-2 rounded-xl border border-[#343268]"> <span>Appointment</span> <GoArrowUpRight /> </button>
            </div>
          </div>
        )}
      </nav>
    );
  };
export default Nav;