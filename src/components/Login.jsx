import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [isSignInForm,setIsSignInForm] =useState();
    const toggleSignInform=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header/><div className="absolute">
      <img className="w-full h-screen object-cover" 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg"
      
      alt ="Logo"/>
      </div>
      <form className="absolute w-3/12 p-12 text-white bg-black my-38 mx-auto right-0 left-0 opacity-80  rounded-lg">
      <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
        <button className="bg-red-700 p-4 my-6 w-full  rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className=" py-4 cursor-pointer" onClick={toggleSignInform}>{isSignInForm ? "New to Netflix? Sign up now" : "Already Registered? Sign In now"} </p>
      </form>
    </div>
  )
}

export default Login
