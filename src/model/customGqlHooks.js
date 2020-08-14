import { CREATE_GAME, NEXT_TURN } from "./mutations";
import { GET_GAME, GET_MONSTER_EFFECT } from "./queries";
import { useQuery, useMutation } from "@apollo/client";

export const useCreateGame = () => {
  return useMutation(CREATE_GAME, {
    update(cache, { data: { createGame } }) {
      cache.writeQuery({
        query: GET_GAME,
        data: { game: createGame },
      });
    },
  });
};

export const useGetGame = () => {
  return useQuery(GET_GAME);
};
