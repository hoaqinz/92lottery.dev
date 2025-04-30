"use client";

import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

export default function TabBar() {
  const { activeTab, setActiveTab, showToast } = useAppContext();

  const handleTabClick = (tab: "home" | "activity" | "marketing" | "wallet" | "profile") => {
    setActiveTab(tab);
    if (tab !== "home") {
      showToast(`Tính năng ${getTabName(tab)} đang được phát triển`);
    }
  };

  const getTabName = (tab: string) => {
    switch (tab) {
      case "home": return "Trang chủ";
      case "activity": return "Hoạt động";
      case "marketing": return "Tiếp thị";
      case "wallet": return "Ví";
      case "profile": return "Tôi";
      default: return "";
    }
  };

  return (
    <footer className="fixed left-1/2 -translate-x-1/2 bottom-0 w-[420px] max-w-full z-10">
      <nav className="flex items-center bg-white shadow px-2 py-1 rounded-t-2xl border-t border-gray-200 justify-between">
        <TabButton 
          name="Trang chủ" 
          icon="https://ext.same-assets.com/2315791583/2320907649.svg" 
          activeIcon="https://ext.same-assets.com/2315791583/2320907649.svg" 
          isActive={activeTab === "home"} 
          onClick={() => handleTabClick("home")} 
        />
        <TabButton 
          name="Hoạt động" 
          icon="https://ext.same-assets.com/2315791583/1998606599.svg" 
          activeIcon="https://ext.same-assets.com/2315791583/1998606599.svg" 
          isActive={activeTab === "activity"} 
          onClick={() => handleTabClick("activity")} 
        />
        <div className="flex-1 flex items-center justify-center">
          <button 
            onClick={() => handleTabClick("marketing")}
            className="bg-[#bc2022] w-[52px] h-[52px] rounded-full -mt-8 flex items-center justify-center border-4 border-white shadow-lg active:bg-[#a51c1e] transition-colors"
            aria-label="Tiếp thị"
          >
            <Image 
              src="https://ext.same-assets.com/2315791583/2838098675.svg" 
              alt="Tiếp thị" 
              width={32} 
              height={32} 
            />
          </button>
        </div>
        <TabButton 
          name="Ví" 
          icon="https://ext.same-assets.com/2315791583/2018733539.svg" 
          activeIcon="https://ext.same-assets.com/2315791583/2018733539.svg" 
          isActive={activeTab === "wallet"} 
          onClick={() => handleTabClick("wallet")} 
        />
        <TabButton 
          name="Tôi" 
          icon="https://ext.same-assets.com/2315791583/1367661487.svg" 
          activeIcon="https://ext.same-assets.com/2315791583/1367661487.svg" 
          isActive={activeTab === "profile"} 
          onClick={() => handleTabClick("profile")} 
        />
      </nav>
    </footer>
  );
}

interface TabButtonProps {
  name: string;
  icon: string;
  activeIcon: string;
  isActive: boolean;
  onClick: () => void;
}

function TabButton({ name, icon, activeIcon, isActive, onClick }: TabButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center flex-1 py-1 transition-colors ${
        isActive ? "text-[#bc2022]" : "text-gray-500"
      }`}
      aria-label={name}
    >
      <Image 
        src={isActive ? activeIcon : icon} 
        alt={name} 
        width={30} 
        height={30} 
      />
      <span className={`text-[10px] mt-0.5 ${isActive ? "font-medium" : ""}`}>{name}</span>
    </button>
  );
}
