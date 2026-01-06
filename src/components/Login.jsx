import { useState,useRef } from "react"
import Header from "./Header"
import { checkValidData } from "../utilities/validate";
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utilities/userSlice";

const Login = () => {
const [isSignInForm,setIsSignInForm] =useState(true);
const [ errorMessage, setErrorMessage]=useState(null);
const navigate = useNavigate();
const dispatch = useDispatch();

const email=useRef(null);
const password=useRef(null);
const name=useRef(null);

const toggleSignInform=()=>{
              setIsSignInForm(!isSignInForm);
}
const handleButtonClick = () => {
      //for validation
const emailValue=email.current?.value;
const passwordlValue=password.current?.value
const nameValue=name.current?.value
const mess = checkValidData(emailValue,passwordlValue,nameValue);
setErrorMessage(mess);
if(mess) return;
//for signin/signup
if(!isSignInForm){
createUserWithEmailAndPassword(auth,emailValue,passwordlValue)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
updateProfile(auth.currentUser, {
  displayName: name.current?.value, photoURL: "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
}).then(() => {

   const {uid,email,displayName,photoURL} = auth.currentUser;
       dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));
  navigate("/browse");
}).catch((error) => {
  setErrorMessage(error.message);
});
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
}
else{
signInWithEmailAndPassword(auth,emailValue,passwordlValue)
  .then((userCredential) => {
    const user = userCredential.user;
    const {uid,email,displayName,photoURL} = auth.currentUser;
       dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setErrorMessage(errorCode+"-"+errorMessage);
    
  });
}
    }
  return (
    <div>
      <Header/><div className="absolute">
      <img className="w-full h-screen object-cover" 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg"
      
      alt ="Logo"/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute w-3/12 p-12 text-white bg-black my-38 mx-auto right-0 left-0 opacity-80  rounded-lg">
      <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="bg-red-700 p-4 my-6 w-full  rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className=" py-4 cursor-pointer" onClick={toggleSignInform}>{isSignInForm ? "New to Netflix? Sign up now" : "Already Registered? Sign In now"} </p>
      </form>
    </div>
  )
}

export default Login
