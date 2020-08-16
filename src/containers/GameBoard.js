import React, { useEffect, useState, useCallback } from "react";
import { useGetGame, useNextTurn } from "../model/customGqlHooks";
import client from "../model/client";
import { useHistory } from "react-router-dom";
import MaingGameBoard from "../components/MainGameBoard";
import Modal from "../components/Modal";
import Spinner from "../components/Spinner";

const Gameboard = () => {
  const { loading: queryLoading, error: queryError, data } = useGetGame();

  const [cardIdSelected, setCardIdSelected] = useState("");
  const history = useHistory();
  const [
    nextTurn,
    { loading: mutationLoading, error: mutationError },
  ] = useNextTurn();
  const [win, setWin] = useState(undefined);

  const handleNextTurn = () => {
    nextTurn({ variables: { gameId: data.game.id, cardId: cardIdSelected } });
  };

  const endGame = useCallback(async () => {
    await client.cache.reset();
    history.push("/");
  }, []);

  const getStatusGame = useCallback(() => {
    if (typeof win !== "undefined") {
      //if evil people remove the modal from de inspector, then ...
      endGame();
    }
    if (data.game.player.hp <= 0) {
      setWin(false);
      return;
    }
    if (data.game.monster.hp <= 0) {
      setWin(true);
      return;
    }
    if (data.game.turnsLeft === 0) {
      setWin(false);
      return;
    }
  }, [data]);

  //if data is undefined then redirect to login
  useEffect(() => {
    if (!data) {
      history.push("/");
    } else {
      getStatusGame();
    }
  }, [data, getStatusGame]);

  if (mutationError || queryError) {
    return (
      <Modal
        content={
          <p>{mutationError ? mutationError.message : queryError.message}</p>
        }
      />
    );
  }
  return (
    <>
      {(queryLoading || mutationLoading) && <Spinner />}
      {typeof win === "boolean" && (
        <Modal
          content={
            win === true ? (
              [<p>Congratulations</p>, <p>You Win! (:</p>]
            ) : (
              <p>Ups... you lose! :(</p>
            )
          }
          onClose={endGame}
        />
      )}
      {data && (
        <MaingGameBoard
          game={data.game}
          nextTurn={handleNextTurn}
          setCardIdSelected={setCardIdSelected}
          cardIdSelected={cardIdSelected}
          hasHorror={data.monsterEffect.effect === "HORROR"}
        />
      )}
    </>
  );
};
export default Gameboard;
