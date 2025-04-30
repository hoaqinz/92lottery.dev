"use client";

import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

export default function Header() {
  const { showToast } = useAppContext();

  const handleNotificationClick = () => {
    showToast("Bạn không có thông báo mới");
  };

  return (
    <header className="bg-[#bc2022] rounded-t-lg relative px-3 pt-3 pb-1 flex flex-col items-center">
      <div className="flex items-center justify-between w-full">
        <Image
          src="https://ext.same-assets.com/2315791583/2231750973.png"
          alt="92Lottery Logo - Trò chơi trực tuyến hấp dẫn"
          width={100}
          height={38}
          priority
        />
        <button
          onClick={handleNotificationClick}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[#fff3e6] active:bg-[#f8e8d8] transition-colors"
          aria-label="Notifications"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#bc2022"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
      </div>
      <div className="w-full mt-2">
        <Image
          src="/banner.jpg"
          alt="92Lottery Banner - Trò chơi trực tuyến với nhiều phần thưởng hấp dẫn"
          width={1200}
          height={300}
          className="rounded-md w-full max-w-full h-auto object-cover"
          priority
          style={{ maxWidth: '100%', width: '100%' }}
        />
      </div>
    </header>
  );
}
