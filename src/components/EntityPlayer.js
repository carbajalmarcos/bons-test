// @flow
import React from "react";
import entityPlayer from "../styles/entityPlayer.module.css";
import { Player, Monster } from "../utils/types";

export type Props = {
  data: Player | Monster,
};

const EntityPlayer = ({ data }: Props) => {
  const { name, image, hp, maxHp, shield } = data;
  return (
    <div className={entityPlayer.container}>
      <div className={entityPlayer.healthPoints}>
        <div className={entityPlayer.image}>{<img src={image} />}</div>
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
