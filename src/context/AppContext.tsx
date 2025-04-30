"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type TabType = "home" | "activity" | "marketing" | "wallet" | "profile";
type ModalType = "lottery" | "slots" | "sports" | "casino" | "pvc" | "fishing" | "minigames" | "popular" | null;

interface AppContextType {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  activeModal: ModalType;
  setActiveModal: (modal: ModalType) => void;
  isClient: boolean;
  showToast: (message: string) => void;
  toastMessage: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isClient, setIsClient] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Toast functionality
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeModal,
        setActiveModal,
        isClient,
        showToast,
        toastMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
