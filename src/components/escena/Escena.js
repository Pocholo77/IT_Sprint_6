import React from "react";

function Escena(props) {
  // console.log(props)
  //debugger
  return <p className={'noActive ' + props.className}>{props.text}</p>;
}

export default Escena;
