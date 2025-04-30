"use client";

import GameCard from "./GameCard";
import { gameCards } from "@/lib/data";

export default function GameSection() {
  return (
    <div className="flex flex-col px-3 py-4">
      {gameCards.map((game) => (
        <GameCard
          key={game.id}
          id={game.id}
          name={game.name}
          description={game.description}
        />
      ))}
    </div>
  );
}
