// @flow
import React from "react";
import cardsBox from "../styles/cardsBox.module.css";
import { Card } from "../utils/types";

type Props = {
  cards: [Card],
  setCard: Function,
  selected: string,
};
const CardsBox = ({ cards, setCard, selected }: Props) => {
  return (
    <div className={cardsBox.container}>
      {cards.map((value, index) => {
        return (
          <div
            data-test="set-selected-card"
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
