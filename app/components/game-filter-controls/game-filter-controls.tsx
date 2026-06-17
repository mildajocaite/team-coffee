type GameFilterControlsProps = {
  players: number;
  filteredCount: number;
  onPlayersChange: (players: number) => void;
  onPickRandomGame: () => void;
  canPickRandom: boolean;
};

export const GameFilterControls = ({
  players,
  filteredCount,
  onPlayersChange,
  onPickRandomGame,
  canPickRandom,
}: GameFilterControlsProps) => {
  return (
    <section className="mb-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/20 dark:bg-zinc-900">
      <h1 className="text-3xl font-bold tracking-tight">We love Team Coffee! ❤️</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300">
        Set the player count to filter games, then pick a random one from the filtered list.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <label htmlFor="players" className="text-sm font-semibold">
          Number of players
        </label>
        <input
          id="players"
          type="number"
          min={1}
          max={20}
          value={players}
          onChange={(event) => {
            const value = Number.parseInt(event.target.value, 10);
            onPlayersChange(Number.isNaN(value) ? 1 : Math.min(20, Math.max(1, value)));
          }}
          className="w-28 rounded-lg border border-zinc-300 px-3 py-2 outline-none ring-cyan-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950"
        />
        <button
          type="button"
          onClick={onPickRandomGame}
          disabled={!canPickRandom}
          className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:bg-zinc-400"
        >
          Pick Random Game
        </button>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">{filteredCount} game(s) available.</p>
      </div>
    </section>
  );
};

