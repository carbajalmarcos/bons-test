import { CREATE_GAME, NEXT_TURN } from "./mutations";
import { GET_GAME } from "./queries";
import { useQuery, useMutation } from "@apollo/client";

export const useCreateGame = () => {
  return useMutation(CREATE_GAME, {
    update(cache, { data: { createGame } }) {
      cache.writeQuery({
        query: GET_GAME,
        data: { game: createGame, monsterEffect: {} },
      });
    },
  });
};
export const useNextTurn = () => {
  return useMutation(NEXT_TURN, {
    update(cache, { data: { nextTurn } }) {
      console.log(nextTurn);
      cache.writeQuery({
        query: GET_GAME,
        data: { ...nextTurn },
      });
    },
  });
};
export const useGetGame = () => {
  return useQuery(GET_GAME);
};
