// @flow
export type Game = {
  id: ID,
  currentTurn: number,
  maxTurns: number,
  turnsLeft: number,
  player: Player,
  monster: Monster,
};
export type Player = {
  id: ID,
  name: string,
  hp: number,
  maxHp: number,
  shield: number,
  cards: [Card],
};
export type Card = {
  id: ID,
  value: number,
  effect: string,
};
export type Monster = {
  id: ID,
  name: string,
  hp: number,
  maxHp: number,
  shield: number,
  image: number,
};
