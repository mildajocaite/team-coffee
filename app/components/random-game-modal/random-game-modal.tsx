import Image from "next/image";
import type { Game } from "../../data/games";

type RandomGameModalProps = {
  game: Game | null;
  isOpen: boolean;
  onClose: () => void;
};

export const RandomGameModal = ({ game, isOpen, onClose }: RandomGameModalProps) => {
  if (!isOpen || !game) {
    return null;
  }

  const playersLabel = `${game.minPlayers} - ${game.maxPlayers ?? "Unlimited"}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-overlay-in"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Random game picked"
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-lg rounded-2xl border border-cyan-300 bg-white p-6 shadow-2xl dark:border-cyan-800 dark:bg-zinc-900 animate-modal-in"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
          Random pick
        </p>

        <div className="mb-4 flex items-center gap-3">
          <Image src={`/team-coffee/${game.logo}`} alt={`${game.name} logo`} width={56} height={56} />
          <div>
            <h2 className="text-2xl font-bold">{game.name}</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Players: {playersLabel}
            </p>
          </div>
        </div>

        <p className="mb-6 text-zinc-700 dark:text-zinc-300">{game.description}</p>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Close
          </button>
          <a
            href={game.website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500"
          >
            Visit website
          </a>
        </div>
      </div>
    </div>
  );
};

