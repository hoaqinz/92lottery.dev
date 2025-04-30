"use client";

import { useAppContext } from "@/context/AppContext";
import BaseModal from "./BaseModal";
import Image from "next/image";

export default function PVCModal() {
  const { activeModal, setActiveModal, showToast } = useAppContext();
  const isOpen = activeModal === "pvc";
  
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
    <BaseModal isOpen={isOpen} onClose={handleClose} title="PVC">
      <div className="flex flex-col items-center">
        <Image 
          src="https://ext.same-assets.com/2315791583/1684557050.png" 
          alt="PVC" 
          width={80} 
          height={80} 
          className="mb-4" 
        />
        <p className="text-center text-gray-700 mb-4">
          Chào mừng bạn đến với PVC. Đây là tính năng demo.
        </p>
        <div className="w-full bg-[#fff8f8] border border-[#ffdddd] rounded-lg p-4 mb-6">
          <p className="text-center text-[#bc2022] font-medium">
            Vui lòng đăng ký hoặc đăng nhập để chơi
          </p>
        </div>
        
        <div className="flex gap-4 w-full mb-4">
          <button
            onClick={handleRegister}
            className="flex-1 bg-gradient-to-r from-[#bc2022] to-[#d83a3a] text-white px-4 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
          >
            Đăng ký
          </button>
          <button
            onClick={handleLogin}
            className="flex-1 bg-gradient-to-r from-[#2c3e50] to-[#4a6572] text-white px-4 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
          >
            Đăng nhập
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
