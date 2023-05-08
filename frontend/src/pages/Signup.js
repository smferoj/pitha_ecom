import React, { useState } from "react";
import LoginSignupImage from "../assets/images/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import {Link, useNavigate} from 'react-router-dom';
import {ImagetoBase64} from "../utility/imagetoBase64";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName : "",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    image:""
  })
  
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleOnChange =(e)=>{
    const {name, value} = e.target;
    setData((preve)=>{
      return{
        ...preve,
        [name]:value,
      };
    });
  };
const handleUploadProfileImage = async(e)=>{
// console.log(e.target.files[0])
const data = await ImagetoBase64(e.target.files[0])
console.log(data)
setData((preve)=>{
  return {
    ...preve,
    image: data
  }
})

}
console.log(process.env.REACT_APP_SERVER_DOMAIN)
  const handleSubmit = async(e)=>{
     e.preventDefault();
      const {firstName, email, password, confirmPassword} = data
      console.log(data)
      if (firstName && email && password && confirmPassword){
        if(password === confirmPassword){
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`,{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body: JSON.stringify(data)
          })
          const dataRes = await fetchData.json()
          console.log(dataRes)
          // alert(dataRes.message)
          toast(dataRes.message)
          if(dataRes.alert){
            navigate("/login")
          }
         
        }
        else{
          alert("wrong")
        }
      }
      else{
        alert("fill up")
      }
  }

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-slate-300 m-auto flex  flex-col p-4">
        <h1 className='text-center text-2xl font-bold'> Sign Up </h1>
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <img src={ data.image ? data.image : LoginSignupImage} alt ="profile_image" className='"w-full h-full' />
          <label htmlFor="profileImage">
          <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
          <p className="text-sm p-1 text-white">Upload</p>
          </div>
          <input type="file"id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage} />
          </label>
        </div>
        <form className="w-full py-3 flex flex-col"  onSubmit={handleSubmit}>
          <label htmlFor="firstName"> Fisrt name </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-2 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          />
          <label htmlFor="lastName"> Last name </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-2 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnChange}
          />
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-3 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password"> Password </label>
          <div className="flex bg-slate-200 rounded ">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 px-2 py-1  border-none outline-none rounded focus-within:outline-blue-300"
              value={data.password}
            onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer p-2"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

         <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-2 mb-2  focus-within:outline focus-within:outline-blue-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmPassword"
              className=" w-full bg-slate-200 border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer "
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
             <button  className = "w-full max-w-[150px]  m-auto  bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4 "> Sign up</button>
        </form>
        <p className="text-left text-sm mt-2"> Already have account ? <Link to ="/login" className="text-red-500 underline">log in</Link> </p>
      </div>
    </div>
  );
};

export default Signup;
