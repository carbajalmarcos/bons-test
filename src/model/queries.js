import { gql } from "@apollo/client";

export const GET_GAME = gql`
  query getGame {
    game @client
    monsterEffect @client
  }
`;

// export const GET_MONSTER_EFFECT = gql`
// query getMonsterEffect {
// monsterEffect @client
// }
// `;
