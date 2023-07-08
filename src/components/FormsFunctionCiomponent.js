import React from "react";
import { useState } from "react";
export function FormsFunctionComponent() {

const [name,setName]= useState("");
const [n,setn] =useState("");

 function submitHandler(e){
  e.preventDefault();
  setName(n);
  setn("");
  }
  return (
    <>
    <div>Function Form</div>
      <form onSubmit={submitHandler}>
        <input type="text" name="text element" value={n} onChange={(e)=>{
          return setn(e.target.value);
        }} ></input>
        <button >Submit</button>
      </form>

      <div>{name}</div>
    </>
  );
}
