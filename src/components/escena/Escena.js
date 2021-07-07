import React from "react";

function Escena(props) {
  return <p className={'noActive ' + props.className}>{props.text}</p>;
}

export default Escena;
