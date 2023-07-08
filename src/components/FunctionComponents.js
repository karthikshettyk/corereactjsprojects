import React from "react";
import { useState } from "react";

function FunctionComponent(props) {
  //state in the functional component
  const [color,setColor]= useState("red")


  return (<>I am the function based component {props.name} {props.age} {color}</>);
}

export default FunctionComponent;
