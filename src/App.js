import "./App.css";
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"

import OpenRoute from "./components/core/Auth/OpenRoute"

import Login from "./pages/Login"
import Signup from "./pages/Register"


import Error from "./pages/Error"


import { AboutUs } from "./pages/AboutUs";







function App() {

  


  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    
    <Navbar/>
   
    <Routes>

      <Route path="/" element={<Home/>} />
    
      {/* Auth */}
      <Route path="signup"
       element={<OpenRoute>  <Signup/> </OpenRoute>} 
       />

       
      <Route path="login" 
      element={<OpenRoute>  <Login/>  </OpenRoute> } 
      />

      
     

      <Route path="/about" element={<AboutUs/>} />
   

     

      <Route path="*" element={<Error />} />


    </Routes>

   </div>
  );
}

export default App;
