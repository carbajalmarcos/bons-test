import React from "react";
import cardsBox from "../styles/cardsBox.module.css";
const CardsBox = ({ cards, setCard, selected }) => {
  return (
    <div className={cardsBox.container}>
      {cards.map((value, index) => {
        return (
          <div
            className={
              selected !== value.id ? cardsBox.card : cardsBox.cardSelected
            }
            key={index}
            onClick={() => {
              setCard(value.id);
            }}
          >
            <div className={cardsBox.cardFace}></div>
            <p className={cardsBox.cardName}>{value.effect} </p>
          </div>
        );
      })}
    </div>
  );
};

export default CardsBox;
