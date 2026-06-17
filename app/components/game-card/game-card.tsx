import Image from "next/image";
import type { Game } from "../../data/games";

type GameCardProps = {
  game: Game;
};

export const GameCard = ({ game }: GameCardProps) => {
  const playersLabel = `${game.minPlayers} - ${game.maxPlayers ?? "Unlimited"}`;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/20 dark:bg-zinc-900">
      <div className="mb-4 flex items-center gap-3">
        <Image src={game.logo} alt={`${game.name} logo`} width={52} height={52} />
        <div>
          <h2 className="text-lg font-semibold">{game.name}</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Players: {playersLabel}
          </p>
        </div>
      </div>

      <p className="mb-4 min-h-20 flex-1 text-sm text-zinc-700 dark:text-zinc-300">{game.description}</p>

      <div className="flex items-center justify-between">
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          Available
        </span>
        <a
          href={game.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-cyan-700 hover:underline dark:text-cyan-300"
        >
          Visit website
        </a>
      </div>
    </article>
  );
};

