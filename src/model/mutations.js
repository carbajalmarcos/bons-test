import { gql } from "@apollo/client";
export const CREATE_GAME = gql`
  mutation createGame($name: String!) {
    createGame(input: { name: $name }) {
      id
      currentTurn
      maxTurns
      turnsLeft
      monster {
        hp
        id
        maxHp
        name
        image
        shield
      }
      player {
        hp
        id
        maxHp
        name
        shield
        cards {
          effect
          id
          value
        }
      }
    }
  }
`;
const NEXT_TURN = gql`
  mutation nextTurn($gameId: String!, $cardId: String) {
    nextTurn(input: { gameId: $gameId, cardId: $cardId }) {
      game {
        currentTurn
        id
        maxTurns
        monster {
          hp
          id
          image
          maxHp
          name
          shield
        }
        player {
          cards {
            effect
            id
            value
          }
          hp
          id
          maxHp
          name
          shield
        }
        turnsLeft
      }
      monsterEffect {
        effect
        value
      }
    }
  }
`;
