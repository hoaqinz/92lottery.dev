"use client";

import { useEffect, useRef, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { useClientOnly } from "@/lib/hooks/useClientOnly";

export default function NotificationBanner() {
  const { showToast } = useAppContext();
  const [isMounted, setIsMounted] = useState(false);
  const [position, setPosition] = useState(0);
  const [notifications] = useClientOnly<string[]>([
    "Chúc mừng ID 12***32 đã là một trong những người may mắn nhận được giải thưởng của VÒNG QUAY M",
    "Chúc mừng ID 45***78 đã trúng 1,500,000₫ từ trò chơi Win Go",
    "Chúc mừng ID 98***65 đã trúng 2,800,000₫ từ trò chơi K3 Lotre"
  ]);

  const containerRef = useRef<HTMLDivElement>(null);
  const [currentNotification, setCurrentNotification] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Separate effect for notifications that only runs on client side
  useEffect(() => {
    if (!isMounted || !notifications) return;

    // Auto-rotate notifications with a longer interval (8 seconds)
    const interval = setInterval(() => {
      // Fade out current notification
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';

        // After fade out, change notification and fade in
        setTimeout(() => {
          setCurrentNotification((prev) => (prev + 1) % notifications.length);

          if (containerRef.current) {
            containerRef.current.style.opacity = '1';
          }
        }, 500);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isMounted, notifications]);

  const handleDetailsClick = () => {
    showToast("Xem chi tiết thông báo");
  };

  if (!isMounted) {
    return (
      <div className="flex items-center px-3 py-2 text-xs font-semibold bg-white border-b border-[#eee]">
        <span className="flex-1">Đang tải thông báo...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center px-3 py-2 text-xs font-semibold bg-white border-b border-[#eee]">
      <div
        ref={containerRef}
        className="flex-1 overflow-hidden whitespace-nowrap transition-opacity duration-500"
        style={{ opacity: 1 }}
      >
        <span className="inline-block">
          {notifications[currentNotification]}
        </span>
      </div>
      <button
        onClick={handleDetailsClick}
        className="ml-2 bg-[#bc2022] text-white rounded px-2 py-0.5 text-xs active:bg-[#a51c1e] transition-colors"
      >
        Chi tiết
      </button>
    </div>
  );
}
