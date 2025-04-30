"use client";

import { menuItems } from "@/lib/data";
import GameModal from "./GameModal";

export default function GameModals() {
  return (
    <>
      {/* Game Modals for all games */}
      {menuItems.map((item) => (
        <GameModal
          key={item.id}
          gameId={item.id}
          title={item.name}
          image={item.image}
          description={`Chào mừng bạn đến với ${item.name}.`}
        />
      ))}
    </>
  );
}
