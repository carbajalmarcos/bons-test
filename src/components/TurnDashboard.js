import React from "react";
import turnDashboard from "../styles/turnDashboard.module.css";

const TurnDashboard = ({ current, left, nextTurn }) => {
  return (
    <div className={turnDashboard.container}>
      <div className={turnDashboard.header}>
        <p>TURNS</p>
      </div>
      <div className={turnDashboard.content}>
        <div className={turnDashboard.contentItem}>
          <p>CURRENT</p>
          <p>{current}</p>
        </div>
        <div className={turnDashboard.contentItem}>
          <p>PAST</p>
          <p>{current === 0 ? "--" : current - 1}</p>
        </div>
        <div className={turnDashboard.contentItem}>
          <p>LEFT</p>
          <p>{left}</p>
        </div>
      </div>
      <input
        className={turnDashboard.button}
        type="button"
        value="END TURN"
        onClick={nextTurn}
      />
    </div>
  );
};

export default TurnDashboard;
