import React from "react";
import { useState, useCallback } from "react";

export function Usecallback() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [val, setVal] = useState("");

  const add = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
  };



  const ans = useCallback(()=>{
    add(num1,num2);
  },[num1,num2])

  return (
    <>
      <input
        type="text"
        val={num1}
        onChange={(e) => setnum1(e.target.value)}
      ></input>
      <br></br>
      <input
        type="text"
        val={num2}
        onChange={(e) => setnum2(e.target.value)}
      ></input>
      <br></br>
      <input
        type="text"
        val={val}
        onChange={(e) => setVal(e.target.value)}
      ></input>
      <br></br>
      {ans}
    </>
  );
}
