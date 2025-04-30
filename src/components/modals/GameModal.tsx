"use client";

import { useAppContext } from "@/context/AppContext";
import BaseModal from "./BaseModal";
import Image from "next/image";
import { useState } from "react";

interface GameModalProps {
  gameId: string;
  title: string;
  image: string;
  description: string;
}

export default function GameModal({ gameId, title, image, description }: GameModalProps) {
  const { activeModal, setActiveModal, showToast } = useAppContext();
  const isOpen = activeModal === gameId;
  const [isRegisterHovered, setIsRegisterHovered] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);

  const handleClose = () => {
    setActiveModal(null);
  };

  const handleRegister = () => {
    showToast("Chức năng đăng ký đang được phát triển");
    handleClose();
  };

  const handleLogin = () => {
    showToast("Chức năng đăng nhập đang được phát triển");
    handleClose();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={handleClose} title={title}>
      <div className="flex flex-col items-center">
        <Image src={image} alt={title} width={80} height={80} className="mb-4" />
        <p className="text-center text-gray-700 mb-4">{description}</p>

        <div className="w-full bg-[#fff8f8] border border-[#ffdddd] rounded-lg p-4 mb-6">
          <p className="text-center text-[#bc2022] font-medium">
            Vui lòng đăng ký hoặc đăng nhập để chơi
          </p>
        </div>

        <div className="flex gap-4 w-full mb-4">
          <button
            onClick={handleRegister}
            onMouseEnter={() => setIsRegisterHovered(true)}
            onMouseLeave={() => setIsRegisterHovered(false)}
            className={`flex-1 relative overflow-hidden bg-gradient-to-r from-[#bc2022] to-[#d83a3a] text-white px-4 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 active:translate-y-0 btn-register`}
          >
            <span className="relative z-10 flex items-center justify-center">
              Đăng ký
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span
              className={`absolute inset-0 bg-gradient-to-r from-[#d83a3a] to-[#bc2022] transition-opacity duration-300 ${
                isRegisterHovered ? 'opacity-100' : 'opacity-0'
              }`}
            ></span>
          </button>

          <button
            onClick={handleLogin}
            onMouseEnter={() => setIsLoginHovered(true)}
            onMouseLeave={() => setIsLoginHovered(false)}
            className={`flex-1 relative overflow-hidden bg-gradient-to-r from-[#2c3e50] to-[#4a6572] to-[#2c3e50] text-white px-4 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 active:translate-y-0 btn-shimmer`}
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Đăng nhập
            </span>
            <span
              className={`absolute inset-0 bg-gradient-to-r from-[#4a6572] to-[#2c3e50] to-[#4a6572] transition-opacity duration-300 ${
                isLoginHovered ? 'opacity-100' : 'opacity-0'
              }`}
            ></span>
          </button>
        </div>

        <button
          onClick={handleClose}
          className="text-gray-500 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
        >
          Đóng
        </button>
      </div>
    </BaseModal>
  );
}
