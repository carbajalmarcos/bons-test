import React from "react";
import entityPlayer from "../styles/entityPlayer.module.css";

const EntityPlayer = ({ data }) => {
  const { maxHp, shield, hp, name } = data;
  return (
    <div className={entityPlayer.container}>
      <div className={entityPlayer.healthPoints}>
        <div className={entityPlayer.image}></div>
        <div className={entityPlayer.hpScore}>
          <h3>{name}</h3>
          <p>
            <span>HP:</span>
            {`${hp}/${maxHp}`}
          </p>
        </div>
      </div>
      <div className={entityPlayer.shield}>
        <p>
          <span>Shield:</span>
          {shield}
        </p>
      </div>
    </div>
  );
};

export default EntityPlayer;
