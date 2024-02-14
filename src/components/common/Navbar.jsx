import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import logoFull from "../../assets/Logo/SoftLogo.png"

import { NavbarLinks } from "../../utils/navbar-links"
import ProfileDropdown from "../core/Auth/ProfileDropDown"

import {ImCross} from "react-icons/im"
import SmallScreenNavbar from "./SmallScreenNavbar"

import 'tailwindcss/tailwind.css'



function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const location = useLocation()


  let [isClose, setIsClose] = useState(false);


  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

    //For SmallScreen
    const handleCrossButton = () => { 
      isClose = isClose ? setIsClose(false) : setIsClose(true);  
    }

  return (
    
  <>

     <div className="md:h-14  h-[63px]  bg-transparent"></div>  
    
      {/* #00FFFF */}
    <div
      className={` flex h-[56px] items-center justify-center border-b-[0px] border-b-richblack-700
      fixed z-50 top-0 left-0 w-full 
      ${location.pathname !== "/" ? "bg-richblack-900" : "bg-richblack-900"} 
        transition-all duration-200 shadow-[10px_-5px_15px_-5px] shadow-white` }
    >


      <div className="  mx-4  m-4 md:m-0 justify-between gap-x-1  sm:justify-center sm:gap-x-10 md:gap-x-0 flex w-11/12 max-w-maxContent items-center  md:justify-between ">
        
         {/* Logo */}
        <Link to="/" className="">
          <img src={logoFull} alt="Logo" width={165} height={35} loading="lazy"  />
        </Link>


        {/* Navigation links */}
        <nav className=" flex ">
            <div className="  hidden sm:block sm:w-2 xl:w-36 lg:w-9"> </div>
          <ul className="flex    md:gap-4 lg:gap-x-8 font-semibold text-[15.5px] text-richblack-50 items-center">
            {NavbarLinks.map((link, index) => (
              <li key={index}>

                  <Link to={link?.path}>
                    <p className={`${  matchRoute(link?.path) ? "text-[#7FFFD4]" : "text-richblack-50" } hidden md:block shadow-[1px_-1px_8px_-2px] shadow-richblue-300  hover:scale-105 rounded-md bg-richblack-900 p-1 `}>
                      {link.title}
                    </p>
                  </Link>

              </li>
            ))}
          </ul>

        </nav>


        {/* Login / Signup / Dashboard */}
        <div className=" flex  items-center gap-x-3  md:gap-x-4 md:flex  md:font-semibold">

          {token === null && (
            <Link to="/login">

              <button className="  hidden md:block rounded-[8px] border border-caribbeangreen-200 bg-richblack-800 px-[12px] py-[4px] text-richblack-100">
                 Log in
              </button>

            </Link>
          )}
          {token === null && (
            <Link to="/signup">
               
               <button className="  hidden md:block  rounded-[8px] border border-caribbeangreen-200 bg-richblack-800 px-[12px] py-[4px] text-richblack-100">
                  Sign up
              </button>

            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        
      
       {/* logic for Small screen */}
        <button className="flex justify-center items-center md:hidden" onClick={handleCrossButton}>
           {(isClose)?<ImCross fontSize={30} fill="#AFB2BF" />: <AiOutlineMenu fontSize={36} fill="#AFB2BF" /> }
        </button>

       {isClose && <SmallScreenNavbar handleCrossButton={handleCrossButton} />}
       
      </div>

    </div>

  </>

  )
}

export default Navbar;