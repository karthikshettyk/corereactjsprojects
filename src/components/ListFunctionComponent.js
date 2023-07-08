import React from "react";
import { useEffect, useState } from "react";

export function ListFunctionComponent() {
  let arr = ["Sai", "Karthik", "Shetty"];

  const res = arr.map((item) => {
    return <div key={item}>{item}</div>;
  });

  console.log(res,"dd");

  return (
    <>
      <div>List Function</div>
      {res}
    </>
  );
}
