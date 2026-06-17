export type Game = {
  id: string;
  logo: string;
  name: string;
  description: string;
  minPlayers: number;
  maxPlayers: number;
  website: string;
};

// Test example only. Replace this with your real game list later.
export const games: Game[] = [
  {
    id: "test-game",
    logo: "/games/test-game.svg",
    name: "Test Arena",
    description: "Demo game entry used as a placeholder for UI development.",
    minPlayers: 2,
    maxPlayers: 6,
    website: "https://example.com",
  },
];


