"use client";

import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/lib/data";

interface GameCardProps {
  id: string;
  name: string;
  description: string;
}

export default function GameCard({
  id,
  name,
  description,
}: GameCardProps) {
  const { showToast } = useAppContext();
  const [winnerInfo, setWinnerInfo] = useState({
    userId: "",
    amount: ""
  });

  // Random winner info generation
  useEffect(() => {

    // Generate random user ID with Mem*** pattern
    const generateRandomUserId = () => {
      // Generate 3 random characters (letters and numbers)
      const randomChars = Math.random().toString(36).substring(2, 5).toUpperCase();
      return `Mem***${randomChars}`;
    };

    // Generate random amount from tens to hundreds of thousands
    const generateRandomAmount = () => {
      // Random amount between 10,000 and 500,000
      const amount = Math.floor(Math.random() * 490000) + 10000;
      return formatCurrency(amount);
    };

    // Set initial winner info with random values
    setWinnerInfo({
      userId: generateRandomUserId(),
      amount: generateRandomAmount()
    });

    // No need for currentIndex anymore

    // Update winner info every 1 second with random generation
    const interval = setInterval(() => {
      setWinnerInfo({
        userId: generateRandomUserId(),
        amount: generateRandomAmount()
      });
    }, 1000); // Update every 1 second

    return () => clearInterval(interval);
  }, [id]);

  const handleCardClick = () => {
    showToast(`Đang mở trò chơi ${name}`);
  };

  // Use local image paths
  const getLocalImagePath = () => {
    if (id === "wingo") return "/images/games/icon-wingo.png";
    if (id === "k3lotre") return "/images/games/icon-k3.png";
    if (id === "5dlotre") return "/images/games/icon-5d.png";
    if (id === "trxwin") return "/images/games/icon-trxwin.png";
    return "/images/games/icon-wingo.png";
  };

  const getBackgroundImagePath = () => {
    if (id === "wingo") return "/images/games/nen-wingo.png";
    if (id === "k3lotre") return "/images/games/nen-k3.png";
    if (id === "5dlotre") return "/images/games/nen-5d.png";
    if (id === "trxwin") return "/images/games/nen-trxwin.png";
    return "/images/games/nen-wingo.png";
  };

  return (
    <div className="w-full mb-3">
      <button
        onClick={handleCardClick}
        className="w-full rounded-t-lg p-4 transition-transform active:scale-[0.99] focus:outline-none relative overflow-hidden h-[120px]"
        style={{
          background: `url(${getBackgroundImagePath()}) no-repeat center center / cover`,
        }}
      >
        <div className="flex flex-col items-start justify-between h-full">
          <div>
            <span className="text-[1.3rem] font-bold text-white">{name}</span>
          </div>
          <div className="mt-auto">
            <p className="text-sm text-white font-semibold text-left">{description}</p>
          </div>
        </div>
        <div className="absolute top-3 right-3">
          <Image src={getLocalImagePath()} alt={name} width={70} height={70} />
        </div>
      </button>

      {/* Winner info section */}
      <div className="w-full bg-white rounded-b-lg p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/games/icon-trung-thuong.png"
            alt="Winner"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="text-xs font-medium">
            {winnerInfo.userId}
          </span>
        </div>
        <div className="text-xs font-bold text-right">
          Số tiền trúng thưởng {winnerInfo.amount}
        </div>
      </div>
    </div>
  );
}
