import React from "react";
import { useRef } from "react";

//focus the input
export function Useref() {
  const focus = useRef();

  function onInputFocus() {
    focus.current.focus();
  }

  return (
    <>
      <div>The UseRef Element</div>
      <input type="text" ref={focus}></input>
      <button onClick={onInputFocus}>Focus</button>
    </>
  );
}
