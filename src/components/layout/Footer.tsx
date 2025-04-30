"use client";

import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

export default function Footer() {
  const { activeTab, setActiveTab } = useAppContext();

  const handleTabClick = (tab: "home" | "activity" | "marketing" | "wallet" | "profile") => {
    setActiveTab(tab);
  };

  return (
    <footer className="fixed left-1/2 -translate-x-1/2 bottom-0 w-[420px] max-w-full z-10">
      {/* Footer Image */}
      <div className="relative w-full h-[80px]">
        <Image
          src="/footer-image.png"
          alt="Footer"
          width={420}
          height={80}
          className="w-full h-full object-cover"
          priority
        />

        {/* Tab Buttons Overlay */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-2 pb-2 pt-1">
          <button
            onClick={() => handleTabClick("home")}
            className={`flex flex-col items-center flex-1 py-1 ${
              activeTab === "home" ? "text-[#bc2022]" : "text-gray-500"
            }`}
            aria-label="Trang chủ"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className={`text-[10px] mt-0.5 ${activeTab === "home" ? "font-medium" : ""}`}>Trang chủ</span>
          </button>

          <button
            onClick={() => handleTabClick("activity")}
            className={`flex flex-col items-center flex-1 py-1 ${
              activeTab === "activity" ? "text-[#bc2022]" : "text-gray-500"
            }`}
            aria-label="Hoạt động"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <span className={`text-[10px] mt-0.5 ${activeTab === "activity" ? "font-medium" : ""}`}>Hoạt động</span>
          </button>

          <div className="flex-1 flex items-center justify-center">
            <button
              onClick={() => handleTabClick("marketing")}
              className="bg-[#bc2022] w-[52px] h-[52px] rounded-full -mt-10 flex items-center justify-center border-4 border-white shadow-lg active:bg-[#a51c1e] transition-colors"
              aria-label="Tiếp thị"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-7 h-7"
              >
                <path d="M11.9995 2L17.9995 8L11.9995 14L5.99951 8L11.9995 2Z" />
                <path d="M11.9995 14L17.9995 8L11.9995 22L5.99951 8L11.9995 14Z" />
              </svg>
            </button>
          </div>

          <button
            onClick={() => handleTabClick("wallet")}
            className={`flex flex-col items-center flex-1 py-1 ${
              activeTab === "wallet" ? "text-[#bc2022]" : "text-gray-500"
            }`}
            aria-label="Ví"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
            <span className={`text-[10px] mt-0.5 ${activeTab === "wallet" ? "font-medium" : ""}`}>Ví</span>
          </button>

          <button
            onClick={() => handleTabClick("profile")}
            className={`flex flex-col items-center flex-1 py-1 ${
              activeTab === "profile" ? "text-[#bc2022]" : "text-gray-500"
            }`}
            aria-label="Tôi"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className={`text-[10px] mt-0.5 ${activeTab === "profile" ? "font-medium" : ""}`}>Tôi</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
