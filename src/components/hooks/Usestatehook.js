import React from "react";
import { useState } from "react";

export const Usestatehook = () =>{
    const [data,setData] = useState("");
    const [sent,setSent] = useState("");


   submitHandler=(e)=>{
   e.preventDefault();
   setData(sent)
    }

    return (
    <>
        <input type="text" placeholder="text" onChange={(e)=>setSent(e.target.value)}></input>
        <button onSubmit={submitHandler}></button>
    </>)
}



