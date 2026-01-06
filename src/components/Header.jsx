import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignout=()=>{
    signOut(auth).then(() => {
  navigate("/");
}).catch((error) => {
navigate("/error");});
  }
  return (
    <div className="absolute flex px-4 bg-gradient-to-b from-black z-10 w-screen justify-between">
      <img className="w-48"
      src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt ="Logo"/>
    
      {user && (<div className="flex p-2">
        <img className="w-10 h-10 my-5 rounded-md border-2 border-gray-300 cursor-pointer hover:scale-105 transition-all duration-200"
 src={user?.photoURL}
        alt="usericon"/>
        <button className="font-bold text-white p-2"
        onClick={handleSignout}>Sign out</button>
      </div>)}
  
    </div>
    
  )
}

export default Header
