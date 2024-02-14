import {  useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"


import { NavbarLinks } from "../../utils/navbar-links"

export default function SmallScreenNavbar({handleCrossButton}) {
  const { token } = useSelector((state) => state.auth)
  const location = useLocation()


  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }


  return (
    <div
    className={`
      flex flex-col fixed right-0  top-[56px] h-[320px]        sm:h-[500px]   justify-center z-[1000] backdrop-blur-3xl 
      shadow-[10px_10px_25px_-20px] shadow-richblack-25  w-[100%] transition-all duration-200`} 
  >
  
    <div className= {`flex flex-col  text-xl sm:text-2xl relative  w-[100%] h-[90%]  items-center gap-7`} >
           
     {<>
       
       {/* navbar button -> Home,SecretPost,About Us */}
       <nav className="block">
        <ul className="flex flex-col gap-y-3 text-center text-richblack-25">
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              {
               (
                <Link to={link?.path}>
                  <p
                    className={`${
                      matchRoute(link?.path)
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                    onClick={handleCrossButton}
                  >
                    {link.title}
                  </p>
                </Link>
              )}
            </li>
          ))}
        </ul>
       </nav>
       
      {/* without login user button -> signUp,login */}
      <div className="items-center gap-y-3 flex flex-col">
       
        {token === null && (
          <Link to="/login">
            <button className="rounded-[8px] border-2  bg-richblack-800 border-caribbeangreen-300 px-[45px]  py-[7px]
                z-[1000]   text-richblack-100"
                onClick={handleCrossButton}>
              Log in
            </button>
          </Link>
        )}
        {token === null && (
          <Link to="/signup">
            <button className="rounded-[8px] border-2  bg-richblack-800 border-caribbeangreen-300 
              z-[1000] px-[40px] py-[7px] text-richblack-100" 
              onClick={handleCrossButton}>
              Sign up
            </button>
          </Link>
        )}
        
      </div>
      
       </>
     }
     
    </div>

    </div>
      
  )
}

