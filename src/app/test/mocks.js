export const cardsMock = [
  {
    id: "59e91976-3b32-48fd-be24-6a4f00d1c795",
    value: 2,
    effect: "HEAL",
  },
  {
    id: "41d9b9a7-4ba8-44f4-b474-ef3eaf1b0572",
    value: 5,
    effect: "DAMAGE",
  },
  {
    id: "839d9bca-f761-4309-810f-fb2faf44080d",
    value: 4,
    effect: "DAMAGE",
  },
];

export const monsterMock = {
  id: "81bfbebd-71dd-4814-aaaa-4dc1b3b910fa",
  name: "Cthulhu",
  hp: 40,
  maxHp: 40,
  shield: 0,
  image:
    "https://vignette.wikia.nocookie.net/lovecraft/images/c/cf/Screenshot_20171018-093500.jpg/revision/latest?cb=20171020174137",
};

export const playerMock = {
  id: "ffa85986-2450-4fb7-84c9-9ad8ee4766b9",
  name: "marcos",
  hp: 20,
  maxHp: 20,
  shield: 0,
};
export const createGameMock = {
  game: {
    id: "c05a7f48-8af5-46c5-9e3e-a232fd6cf9fa",
    currentTurn: 0,
    maxTurns: 20,
    turnsLeft: 20,
    monster: {
      hp: 40,
      id: "5972a336-df98-453a-a444-a387ff0e1ab4",
      maxHp: 40,
      name: "Cthulhu",
      image:
        "https://vignette.wikia.nocookie.net/lovecraft/images/c/cf/Screenshot_20171018-093500.jpg/revision/latest?cb=20171020174137",
      shield: 0,
    },
    player: {
      hp: 20,
      id: "5327866d-7df1-48fb-b020-184870cf06d8",
      maxHp: 20,
      name: "marcos",
      shield: 0,
      cards: [
        {
          effect: "DAMAGE",
          id: "f4058b1c-e959-4250-98f1-c5b4bf67987e",
          value: 3,
        },
        {
          effect: "DAMAGE",
          id: "c99ff5f8-51d3-4d9f-a646-b658d261aa55",
          value: 4,
        },
        {
          effect: "DAMAGE",
          id: "09e74f14-d51f-4951-8976-ecab7d08d7c1",
          value: 5,
        },
      ],
    },
  },
  monsterEffect: {},
};

export const nextTurn = {
  game: {
    id: "b3a79777-0630-467a-897f-1edb51d7c345",
    currentTurn: 1,
    maxTurns: 20,
    turnsLeft: 19,
    monster: {
      hp: 40,
      id: "b144a635-8d5c-4947-b229-95920159a393",
      maxHp: 40,
      name: "Cthulhu",
      image:
        "https://vignette.wikia.nocookie.net/lovecraft/images/c/cf/Screenshot_20171018-093500.jpg/revision/latest?cb=20171020174137",
      shield: 0,
    },
    player: {
      hp: 15,
      id: "5599231f-1897-48bd-99da-2e62ae351a51",
      maxHp: 20,
      name: "hg",
      shield: 0,
      cards: [
        {
          effect: "SHIELD",
          id: "80faf2fb-1931-40bd-a575-334cbe25504d",
          value: 1,
        },
        {
          effect: "DAMAGE",
          id: "7f4a0526-463e-4834-a9df-ff70c9877514",
          value: 4,
        },
        {
          effect: "SHIELD",
          id: "aac07d17-ca17-469e-94ad-e1491b8f935e",
          value: 2,
        },
      ],
    },
  },
  monsterEffect: {
    effect: "DAMAGE",
    value: 5,
  },
};
