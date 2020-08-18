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
export const NEXT_TURN = gql`
  mutation nextTurn($gameId: ID!, $cardId: ID) {
    nextTurn(input: { gameId: $gameId, cardId: $cardId }) {
      game {
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
      monsterEffect {
        effect
        value
      }
    }
  }
`;
