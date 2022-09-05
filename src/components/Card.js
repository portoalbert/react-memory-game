import React from "react";
import pikachu from "../img/pikachu.png";
import { useState } from "react";

function Card(props) {
  const [name, setName] = useState(pikachu);
  return (
    <div className="card">
      <img src={props.name} alt="pikachu" onClick={props.onClick} />
    </div>
  );
}

export default Card;
