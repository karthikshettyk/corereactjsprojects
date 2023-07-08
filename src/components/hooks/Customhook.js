import React from "react";
import { useState, useEffect } from "react";
import { Useeffect } from "./Useeffect";

export function Customhooks() {
  const [data, setData] = useState("");

  Useeffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return [data];
}
