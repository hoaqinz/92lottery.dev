"use client";

import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { menuItems } from "@/lib/data";

export default function MenuFunction() {
  const { setActiveModal } = useAppContext();

  const handleMenuItemClick = (itemId: string) => {
    setActiveModal(itemId as any);
  };

  return (
    <div className="grid grid-cols-4 gap-4 px-3 py-4 bg-white">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className="flex flex-col items-center focus:outline-none group"
          onClick={() => handleMenuItemClick(item.id)}
        >
          <div className="relative w-[70px] h-[70px] rounded-full bg-gradient-to-r from-blue-300 to-purple-200 flex items-center justify-center shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-300 opacity-60 animate-pulse"></div>
            <Image
              src={item.image}
              alt={item.name}
              width={50}
              height={50}
              className="object-contain relative z-10"
            />
          </div>
          <span className="mt-2 text-xs font-bold text-gray-800 transition-all duration-300 group-hover:text-blue-600">{item.name}</span>
        </button>
      ))}
    </div>
  );
}
