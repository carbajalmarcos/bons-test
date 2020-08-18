// @flow
import React from "react";
import turnDashboard from "../styles/turnDashboard.module.css";

type Props = {
  current: number,
  left: number,
  nextTurn: Function,
};
const TurnDashboard = ({ current, left, nextTurn }: Props) => {
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
          <p data-test="past-label">{current === 0 ? "--" : current - 1}</p>
        </div>
        <div className={turnDashboard.contentItem}>
          <p>LEFT</p>
          <p data-test="turns-left">{left}</p>
        </div>
      </div>
      <input
        className={turnDashboard.button}
        type="button"
        value="END TURN"
        onClick={nextTurn}
        data-test="next-button"
      />
    </div>
  );
};

export default TurnDashboard;
