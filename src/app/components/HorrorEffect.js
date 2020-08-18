// @flow
import React from "react";
import horrorEffect from "../styles/horrorEffect.module.css";
const HorrorEffect = () => {
  return (
    <div className={horrorEffect.container}>
      <h2>Ouch! You have received a horror effect!</h2>
      <h3> You have to play the next turn without any cards...</h3>
    </div>
  );
};

export default HorrorEffect;
