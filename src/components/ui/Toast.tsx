"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";

export default function Toast() {
  const { toastMessage } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (toastMessage) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2800); // Slightly shorter than the context timeout to allow for fade-out
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  if (!toastMessage) return null;

  return (
    <div
      className={`fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-[#bc2022] text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {toastMessage}
    </div>
  );
}
