"use client";

import { useEffect, useState } from "react";
import { useClientData } from "@/lib/hooks/useClientOnly";
import { generateWinnerData } from "@/lib/data";

export default function WinnerList() {
  const [winners, setWinners] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize data on client side
  useEffect(() => {
    setWinners(generateWinnerData());
    setIsMounted(true);

    // Update winner data every 1 second
    const interval = setInterval(() => {
      setWinners(generateWinnerData());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    return (
      <div className="bg-white px-3 pb-4">
        <h3 className="mb-2 font-semibold text-[#bc2022] text-base">Thông tin trúng thưởng</h3>
        <div className="h-[150px] flex items-center justify-center">
          <p className="text-gray-500 text-sm">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white px-3 pb-4">
      <h3 className="mb-2 font-semibold text-[#bc2022] text-base">Thông tin trúng thưởng</h3>
      <div className="grid gap-1 max-h-[170px] overflow-y-auto">
        {winners?.map((winner) => (
          <div key={winner.id} className="flex items-center bg-[#f8f8f8] rounded-lg px-2 py-1">
            <div className="w-20 text-xs">{winner.userId}</div>
            <div className="flex-1" />
            <div className="text-xs font-bold bg-[#bc2022] text-white rounded-lg px-2 py-1">
              Nhận {winner.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
