import React from "react";
import ReactDOM from "react-dom/client";
import ClassBasedComponent from "./components/ClassBasedComponent";
import FunctionComponent from "./components/FunctionComponents";
import { ConditionalComponent } from "./components/ConditionalComponent";
import { FormsClassComponent } from "./components/FormsClassComponent";
import { FormsFunctionComponent } from "./components/FormsFunctionCiomponent";
import { ListFunctionComponent } from "./components/ListFunctionComponent";
import { Sample } from "./components/cycle_methods/Sample";
import { AComponent } from "./components/hooks/Usecontexthook";
import { Useref } from "./components/hooks/Useref";
import { Useeffect } from "./components/hooks/Useeffect";
import { Usereducer } from "./components/hooks/Usereducer";
import { Usecallback } from "./components/hooks/Usecallback";
import { UseMemo } from "./components/hooks/Usememo";


const root = ReactDOM.createRoot(document.getElementById("root"));
document.title = "core react app";
let name="component"
let age=24
root.render(
  <>
    <ClassBasedComponent name={name} age={age}></ClassBasedComponent> <br></br>
    <FunctionComponent name={name} age={20} ></FunctionComponent> <br></br>
    <ConditionalComponent hero={"karthik"}></ConditionalComponent> <br></br>
    <FormsClassComponent></FormsClassComponent> <br></br>
    <FormsFunctionComponent></FormsFunctionComponent> <br></br>
    <ListFunctionComponent></ListFunctionComponent> <br></br>
    <Sample></Sample> <br></br>
    <AComponent></AComponent> <br></br>
    <Useref></Useref> <br></br>
    <Useeffect></Useeffect> <br></br>
    <Usereducer></Usereducer> <br></br>
    <Usecallback></Usecallback> <br></br> 
    <UseMemo></UseMemo>
  </>
);
