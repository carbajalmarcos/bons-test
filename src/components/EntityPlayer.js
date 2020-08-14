import React from "react";
import entityPlayer from "../styles/entityPlayer.module.css";

const EntityPlayer = () => {
  return (
    <div className={entityPlayer.container}>
      <div className={entityPlayer.healthPoints}>
        <div className={entityPlayer.image}></div>
        <div className={entityPlayer.hpScore}>
          <h3>Enemy</h3>
          <p>
            <span>HP:</span>23/42
          </p>
        </div>
      </div>
      <div className={entityPlayer.shield}>
        <p>
          <span>Shield:</span>40
        </p>
      </div>
    </div>
  );
};

export default EntityPlayer;
