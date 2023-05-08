import React from "react";
import {BsCloudUpload} from "react-icons/bs"
const NewProjduct = () => {
  return (
    <div className="p-4">
      <form className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="bg-slate-300 p-1 my-1" />
        <label htmlFor="category">Category</label>
        <select className="bg-slate-300 p-1 my-1" id="category">
          <option>Friuits</option>
          <option>vegetables</option>
          <option>Icecream</option>
          <option> Dosa</option>
          <option>Pizza</option>
        </select>
        <label htmlFor="image">Image</label>
        <div id="image" className="h-40 w-full bg-slate-300 rounded flex items-center justify-center">
             <span className="text-5xl"> <BsCloudUpload/></span> 
        </div>
        <label htmlFor="price" className="my-1">Price</label>
        <input type="text" className="bg-slate-300 p-1 my-1"/>

        <label htmlFor="description" className="my-1">Description</label>
        <textarea rows={3} className="bg-slate-300 p-1 my-1 resize-none"> </textarea>
        <button className="bg-red-500 hover:bg-rd-600 text-white text-lg font-medium my-2 dropshadow"> save </button>
      </form>
       <h1> test </h1>
    </div>
  );
};

export default NewProjduct;
