import React, { useState } from "react";
import Logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import {useDispatch, useSelector} from 'react-redux';
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state)=> state.user)
  const dispatch = useDispatch()
  console.log(userData)
  // The useSelector hook is called, and a callback function is passed as its argument. The callback function takes the state as its parameter and returns the specific data from the Redux store that we want to extract.
  const handleShowMenu =()=>{
setShowMenu(!showMenu)
  }

  const handleLogout =()=>{
   dispatch(logoutRedux())
   toast("Logout Successful")
  }

  return (
    <header className="fixed shadow-lg w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/*  desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10">
            <img src={Logo} alt ="logo" className="h-full" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          <nav className="flex gap-3 md:gap-6 text-base md:text-1g">
            <Link to={""}> Home </Link>
            <Link to={"menu"}> Menu </Link>
            <Link to={"about"}> About </Link>
            <Link to={"contact"}> Contact </Link>
          </nav>
          <div className="text-2xl text-slate-700 relative cursor-pointer">
            <BsCartFill />
            <div className="absolute -top-2 -right-2 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>
          <div className="text-slate-600" onClick={handleShowMenu}>
            <div className=" text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow">
             {
              userData.image ? <img src ={userData.image} className="h-full w-full "/> :<FaUserAlt />
             } 
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col ">
                < Link to ={"newproduct"} className="whitespace-nowrap cursor-pointer px-2">New Product</Link>
            
                {
                    userData.image ? <p className="cursor-pointer text-white bg-red-500 px-2" onClick={handleLogout}>Logout</p> : <Link to ={"login"} className="whitespace-nowrap cursor-pointer px-2"> Login</Link>
                }
                
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
    </header>
  );
};

export default Header;
