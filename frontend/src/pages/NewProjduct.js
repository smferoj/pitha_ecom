import React, { useState } from "react";
import {BsCloudUpload} from "react-icons/bs"
import { ImagetoBase64 } from "../utility/imagetoBase64";
const NewProjduct = () => {
  const [data, setData] = useState({
    name:"",
    category:"",
    image: "",
    price:"",
    description:"",
  })

  const handleOnChange = (e)=>{
     const {name, value} = e.target
     setData((preve)=>{
      return{
        ...preve,
        [name]: value
      }
     })
  }
  const uploadImage =async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])
    // console.log(data)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
   console.log(data)
  }
  return (
    <div className="p-4">
      <form className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="bg-slate-300 p-1 my-1" onChange={handleOnChange} />
        <label htmlFor="category">Category</label>
        <select className="bg-slate-300 p-1 my-1" id="category" name="category" onChange={handleOnChange}>
          <option>Friuits</option>
          <option>vegetables</option>
          <option>Icecream</option>
          <option> Dosa</option>
          <option>Pizza</option>
        </select>
        <label htmlFor="image">Image
         <div className="h-40 w-full bg-slate-300 rounded flex items-center justify-center cursor-pointer">
             <span className="text-5xl"> <BsCloudUpload/></span>
             <img src="" alt="" />
             <input type={"file"} accept="image/*" id="image"  onChange={uploadImage} className="hidden"/>  
        </div>
        </label>

        <label htmlFor="price" className="my-1">Price</label>
        <input type="text" name="price" className="bg-slate-300 p-1 my-1" onChange={handleOnChange}/>

        <label htmlFor="description" className="my-1">Description</label>
        <textarea rows={3} className="bg-slate-300 p-1 my-1 resize-none" name="description" onChange={handleOnChange}> </textarea>
        <button className="bg-red-500 hover:bg-rd-600 text-white text-lg font-medium my-2 dropshadow"> save </button>
      </form>
    </div>
  );
};

export default NewProjduct;
