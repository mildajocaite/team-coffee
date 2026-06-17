"use client";

import { useEffect, useMemo, useState } from "react";
import { GameFilterControls } from "./components/game-filter-controls";
import { GameList } from "./components/game-list";
import { RandomGameModal } from "./components/random-game-modal/random-game-modal";

import type { Game } from "./data/games";
import { games } from "./data/games";

export default function Home() {
  const [players, setPlayers] = useState(4);
  const [randomGame, setRandomGame] = useState<Game | null>(null);
  const [isRandomModalOpen, setIsRandomModalOpen] = useState(false);

  const filteredGames = useMemo(
    () =>
      games.filter(
        (game) => players >= game.minPlayers && players <= (game.maxPlayers ?? Number.POSITIVE_INFINITY),
      ),
    [players],
  );

  const pickRandomGame = () => {
    if (filteredGames.length === 0) {
      setRandomGame(null);
      setIsRandomModalOpen(false);
      return;
    }

    const index = Math.floor(Math.random() * filteredGames.length);
    setRandomGame(filteredGames[index]);
    setIsRandomModalOpen(true);
  };

  useEffect(() => {
    if (!isRandomModalOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsRandomModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isRandomModalOpen]);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-10 sm:px-6 lg:px-8">
      <GameFilterControls
        players={players}
        filteredCount={filteredGames.length}
        canPickRandom={filteredGames.length > 0}
        onPickRandomGame={pickRandomGame}
        onPlayersChange={(nextPlayers) => {
          setPlayers(nextPlayers);
          setRandomGame(null);
          setIsRandomModalOpen(false);
        }}
      />
      <GameList games={filteredGames} />
      <RandomGameModal
        game={randomGame}
        isOpen={isRandomModalOpen}
        onClose={() => setIsRandomModalOpen(false)}
      />
    </main>
  );
}
