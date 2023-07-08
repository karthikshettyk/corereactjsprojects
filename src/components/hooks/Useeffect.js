import React from "react";
import {useState, useEffect,useRef } from "react";


export function Useeffect(){
    const [data,setData] = useState("");

    const count = useRef(0);

    //runs every render
    useEffect(
        ()=>{
            count.current=count.current+1
        }
    );

    //runs first render with empty parathesis
    useEffect(()=>{
        
    },[])

     
    //runs render with parathesis
    useEffect(()=>{

    },[data])


    return (
        <>
        <div>Use Effect count the renders</div>
        <input type="tex" name="" value={data} onChange={(e)=>setData(e.target.value)}></input>
        <div>{count.current}</div>
        </>
    );
}