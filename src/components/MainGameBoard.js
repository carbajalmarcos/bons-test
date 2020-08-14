import React from "react";
import mainBoard from "../styles/mainGameBoard.module.css";
import CardsBox from "./CardsBox";
import EntityPlayer from "./EntityPlayer";
import ActionDashboard from "./ActionDashboard";
const MaingGameBoard = () => {
  return (
    <div className={mainBoard.container}>
      <div className={mainBoard.wrapper}>
        <div className={`${mainBoard.playerBox} ${mainBoard.box}`}>
          <EntityPlayer />
        </div>
        <div className={`${mainBoard.actionsBox} ${mainBoard.box}`}>
          <ActionDashboard />
        </div>
        <div className={`${mainBoard.monsterBox} ${mainBoard.box}`}>
          <EntityPlayer />
        </div>
        <div className={`${mainBoard.cardsBox} ${mainBoard.box}`}>
          <CardsBox />
        </div>
      </div>
    </div>
  );
};

export default MaingGameBoard;
