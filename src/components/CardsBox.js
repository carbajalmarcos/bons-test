import React from "react";
import cardsBox from "../styles/cardsBox.module.css";
const CardsBox = () => {
  return (
    <div className={cardsBox.container}>
      <div className={cardsBox.card}>
        <div className={cardsBox.cardFace}></div>
        <p className={cardsBox.cardName}>Healt</p>
      </div>
      <div className={cardsBox.card}>
        <div className={cardsBox.cardFace}>:D</div>
        <p className={cardsBox.cardName}>Healt</p>
      </div>
      <div className={cardsBox.card}>
        <div className={cardsBox.cardFace}></div>
        <p className={cardsBox.cardName}>Healt</p>
      </div>
    </div>
  );
};

export default CardsBox;
