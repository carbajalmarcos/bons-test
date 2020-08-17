// @flow
import React from "react";
import mainBoard from "../styles/mainGameBoard.module.css";
import CardsBox from "./CardsBox";
import EntityPlayer from "./EntityPlayer";
import TurnDashboard from "./TurnDashboard";
import HorrorEffect from "./HorrorEffect";
import { Game } from "../utils/types";
type Props = {
  game: Game,
  nextTurn: Function,
  setCardIdSelected: Function,
  cardIdSelected: string,
  hasHorror: boolean,
};
const MaingGameBoard = ({
  game,
  nextTurn,
  setCardIdSelected,
  cardIdSelected,
  hasHorror,
}: Props) => {
  return (
    <div className={mainBoard.container}>
      <div className={mainBoard.wrapper}>
        {/* player section */}
        <div className={`${mainBoard.playerBox} ${mainBoard.box}`}>
          <EntityPlayer data={game.player} />
        </div>
        <div className={`${mainBoard.actionsBox} ${mainBoard.box}`}>
          <TurnDashboard
            current={game.currentTurn}
            left={game.turnsLeft}
            nextTurn={nextTurn}
          />
        </div>
        {/* enemy section */}
        <div className={`${mainBoard.monsterBox} ${mainBoard.box}`}>
          <EntityPlayer data={game.monster} />
        </div>
        <div className={`${mainBoard.cardsBox} ${mainBoard.box}`}>
          {/* when call next turn without card the player getting more of 3 cards */}
          {hasHorror ? (
            <HorrorEffect />
          ) : (
            <CardsBox
              cards={game.player.cards.slice(
                Math.max(game.player.cards.length - 3, 0)
              )}
              setCard={setCardIdSelected}
              selected={cardIdSelected}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default MaingGameBoard;
