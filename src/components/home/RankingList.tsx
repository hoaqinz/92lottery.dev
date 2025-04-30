"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useClientData } from "@/lib/hooks/useClientOnly";
import { generateRankingData, topThreeWinners, podiumImage } from "@/lib/data";

export default function RankingList() {
  const [rankings, isMounted] = useClientData(() => generateRankingData(10));
  const listRef = useRef<HTMLUListElement>(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const itemHeight = 32; // Approximate height of each item in pixels

  // Auto-scroll effect - Simplified approach with setInterval
  useEffect(() => {
    if (!isMounted || !autoScrollEnabled || !listRef.current || !rankings?.length) return;

    // We want to show all items and scroll through them one by one
    // Each item takes 3 seconds to show
    const scrollInterval = setInterval(() => {
      // Move to next item
      setCurrentPosition((prevPosition) => {
        // If we're at the last item, reset to the first
        if (prevPosition >= itemHeight * (rankings.length - 1)) {
          return 0;
        }
        // Otherwise, move to the next item
        return prevPosition + itemHeight;
      });
    }, 3000); // 3 seconds per item

    return () => clearInterval(scrollInterval);
  }, [isMounted, autoScrollEnabled, rankings?.length, itemHeight]);

  // Apply scroll position with smooth animation
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: currentPosition,
        behavior: 'smooth'
      });
    }
  }, [currentPosition]);

  // Pause auto-scroll on hover/touch
  const handleMouseEnter = () => setAutoScrollEnabled(false);
  const handleMouseLeave = () => setAutoScrollEnabled(true);

  if (!isMounted) {
    return (
      <div className="bg-white px-3 pb-8">
        <h3 className="mb-2 font-semibold text-[#bc2022] text-base">BXH thu nhập hôm nay</h3>
        <div className="h-[200px] flex items-center justify-center">
          <p className="text-gray-500 text-sm">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white px-3 pb-8">
      <h3 className="mb-6 font-semibold text-[#bc2022] text-base">BXH thu nhập hôm nay</h3>

      {/* Top 3 Winners */}
      <div className="relative mb-4 mt-2">
        {/* Podium Image */}
        <div className="relative w-full h-[200px]">
          <Image
            src={podiumImage}
            alt="Podium"
            width={400}
            height={180}
            className="w-full h-full object-contain mt-10"
          />

          {/* 2nd Place - Left */}
          <div className="absolute bottom-[70px] left-[20%] transform -translate-x-1/2 w-[100px] flex flex-col items-center">
            <div className="relative">
              <Image
                src={topThreeWinners[0].crown}
                alt="Crown 2"
                width={30}
                height={30}
                className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 transform scale-90"
              />
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#7b90f7]">
                <Image
                  src={topThreeWinners[0].avatar}
                  alt="2nd"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <Image
                src={topThreeWinners[0].badge}
                alt="No 2"
                width={40}
                height={20}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
              />
            </div>
            <div className="text-xs text-center mt-6 font-medium">{topThreeWinners[0].userId}</div>
            <div className="text-xs text-center font-bold text-[#7b90f7] mt-1 bg-[#f0f4ff] px-2 py-1 rounded-md shadow-sm -ml-2">{topThreeWinners[0].amount}</div>
          </div>

          {/* 1st Place - Middle */}
          <div className="absolute bottom-[90px] left-1/2 transform -translate-x-1/2 w-[120px] flex flex-col items-center">
            <div className="relative">
              <Image
                src={topThreeWinners[1].crown}
                alt="Crown 1"
                width={36}
                height={36}
                className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 transform scale-110"
              />
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#bc2022]">
                <Image
                  src={topThreeWinners[1].avatar}
                  alt="1st"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <Image
                src={topThreeWinners[1].badge}
                alt="No 1"
                width={50}
                height={25}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
              />
            </div>
            <div className="text-xs text-center mt-7 font-medium">{topThreeWinners[1].userId}</div>
            <div className="text-xs text-center font-bold text-[#bc2022] mt-1 bg-[#fff0f0] px-3 py-1 rounded-md shadow-sm">{topThreeWinners[1].amount}</div>
          </div>

          {/* 3rd Place - Right */}
          <div className="absolute bottom-[60px] right-[20%] transform translate-x-1/2 w-[100px] flex flex-col items-center">
            <div className="relative">
              <Image
                src={topThreeWinners[2].crown}
                alt="Crown 3"
                width={30}
                height={30}
                className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 transform scale-90"
              />
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#cc7933]">
                <Image
                  src={topThreeWinners[2].avatar}
                  alt="3rd"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <Image
                src={topThreeWinners[2].badge}
                alt="No 3"
                width={40}
                height={20}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
              />
            </div>
            <div className="text-xs text-center mt-6 font-medium">{topThreeWinners[2].userId}</div>
            <div className="text-xs text-center font-bold text-[#cc7933] mt-1 bg-[#fff8f0] px-2 py-1 rounded-md shadow-sm ml-2">{topThreeWinners[2].amount}</div>
          </div>
        </div>
      </div>

      {/* Scrolling Rankings List */}
      <ul
        ref={listRef}
        className="grid gap-1 max-h-[200px] overflow-hidden -mt-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        {rankings?.map((rank, index) => (
          <li key={rank.id} className="flex items-center bg-[#f8f8f8] rounded-lg px-2 py-1">
            <div className="w-8 text-xs text-gray-500 text-right mr-1">{index + 4}</div>
            <div className="w-32 text-xs">{rank.userId}</div>
            <div className="flex-1" />
            <div className="text-xs font-bold bg-[#bc2022] text-white rounded-lg px-2 py-1">
              {rank.amount}
            </div>
          </li>
        ))}

        {/* Duplicate the first few items to create a seamless loop */}
        {rankings?.slice(0, 3).map((rank, index) => (
          <li key={`duplicate-${rank.id}`} className="flex items-center bg-[#f8f8f8] rounded-lg px-2 py-1">
            <div className="w-8 text-xs text-gray-500 text-right mr-1">{index + rankings.length + 4}</div>
            <div className="w-32 text-xs">{rank.userId}</div>
            <div className="flex-1" />
            <div className="text-xs font-bold bg-[#bc2022] text-white rounded-lg px-2 py-1">
              {rank.amount}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
