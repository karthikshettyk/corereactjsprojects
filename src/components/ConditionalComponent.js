import React from "react";

export function ConditionalComponent(props) {
  let hero = props.hero;

  //If and else condition rendering

  //   if (hero === "karthik") {
  //     return <>karthik is the hero</>;
  //   } else {
  //     return <>Saikiran is the hero</>;
  //   }

  //And operater rendering with ternary operator
  return (
    <>
      {hero &&
        (hero === "karthik" ? <>karthik is the hero</> : <>Sai is the hero</>)}
    </>
  );
}
