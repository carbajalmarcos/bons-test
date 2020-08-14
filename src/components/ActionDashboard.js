import React from "react";
import actionDashboard from "../styles/actionDashboard.module.css";

const ActionDashboard = () => {
  return (
    <div className={actionDashboard.container}>
      <div className={actionDashboard.header}>
        <p>TURNS</p>
      </div>
      <div className={actionDashboard.content}></div>
      <input
        className={actionDashboard.button}
        type="button"
        value="END TURN"
      />
    </div>
  );
};

export default ActionDashboard;
