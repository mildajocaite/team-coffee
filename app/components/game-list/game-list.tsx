import type { Game } from "../../data/games";
import { GameCard } from "../game-card";

type GameListProps = {
  games: Game[];
};

export const GameList = ({ games }: GameListProps) => {
  if (games.length === 0) {
    return (
      <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200">
        No games match this player count.
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </section>
  );
};

