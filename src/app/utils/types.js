export type Entity = {
  id: string,
  name: string,
  hp: number,
  maxHp: number,
  shield: number,
  // cards: [Card],
};
export type Card = {
  id: string,
  value: number,
  effect: string,
};
export type Player = Entity & {
  cards: [Card],
};
export type Monster = Entity & {
  image: string,
};
export type Game = {
  id: string,
  currentTurn: number,
  maxTurns: number,
  turnsLeft: number,
  player: Player,
  monster: Monster,
};
