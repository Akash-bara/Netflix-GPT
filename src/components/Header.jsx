import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utilities/userSlice";
import { useDispatch } from "react-redux";
import { logo, SUPPORTED_LANGUAGES } from "../utilities/constant";
import { toggleGptSearchView } from "../utilities/gptSlice";
import { changeLanguage } from "../utilities/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
const handleGptSearchClick = ()=>{
  dispatch(toggleGptSearchView());
}

const handlanguageChange=(e)=>{
dispatch(changeLanguage(e.target.value))}

   useEffect(()=>{
const unSubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));
    navigate("/browse");
  } else {
    dispatch(removeUser());
    navigate("/");
  }
}); 
//unsubsribe for multiple routing to the header component
return ()=> unSubscribe();
    },[]);


  const handleSignout=()=>{
    signOut(auth).then(() => {

    }).catch((error) => {
navigate("/error");});
  }
  return (
    <div className="fixed top-0 left-0 flex px-5 py-2 bg-gradient-to-b from-black z-40 w-full justify-between items-center">
      <img className="w-40 cursor-pointer"
      src={logo}
      alt ="Logo"/>
    
      {user && (
        <div className="flex p-2">

          {showGptSearch &&(<select onChange={handlanguageChange}  className="
    bg-[#141414] text-white
    px-3 py-1.5
    rounded-xl
    border border-gray-600
    outline-none
    cursor-pointer
    transition-all duration-300
    hover:bg-[#333333]
    focus:ring-2 focus:ring-red-600 focus:border-red-600
  ">  {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>)}
          <button className="
    px-3 py-1.5 mx-2
    text-white font-semibold
    bg-[#141414] rounded-xl
    transition-all duration-300
    hover:bg-[#333333] hover:scale-105
    active:scale-95
  " onClick={handleGptSearchClick}>{showGptSearch ? "Home Page" : "GPT Search"}</button>
        <img className="w-10 h-10  rounded-md border-2 border-gray-300 cursor-pointer hover:scale-105 transition-all duration-200"
 src={user?.photoURL}
        alt="usericon"/>
        <button className="font-bold text-white p-2"
        onClick={handleSignout}>Sign out</button>
      </div>)}
  
    </div>
    
  )
}

export default Header
