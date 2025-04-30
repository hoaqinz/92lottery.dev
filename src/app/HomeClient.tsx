"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";

// Dynamic components (client-side rendered)
const NotificationBanner = dynamic(() => import("@/components/home/NotificationBanner"), { ssr: false });
const MenuFunction = dynamic(() => import("@/components/home/MenuFunction"), { ssr: false });
const GameSection = dynamic(() => import("@/components/home/GameSection"), { ssr: false });
const WinnerList = dynamic(() => import("@/components/home/WinnerList"), { ssr: false });
const RankingList = dynamic(() => import("@/components/home/RankingList"), { ssr: false });
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: false });
const GameModals = dynamic(() => import("@/components/modals/GameModals"), { ssr: false });
const Toast = dynamic(() => import("@/components/ui/Toast"), { ssr: false });

// App Context Provider
import { AppProvider } from "@/context/AppContext";

export default function HomeClient() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1] pb-24">
      <AppProvider>
        {/* Static Header (SSR) */}
        <Header />

        {/* Client-side components with loading fallbacks */}
        <Suspense fallback={<div className="h-8 bg-white"></div>}>
          <NotificationBanner />
        </Suspense>

        <Suspense fallback={<div className="h-32 bg-white"></div>}>
          <MenuFunction />
        </Suspense>

        <Suspense fallback={<div className="h-64 bg-[#f6f1f1]"></div>}>
          <GameSection />
        </Suspense>

        <Suspense fallback={<div className="h-40 bg-white"></div>}>
          <WinnerList />
        </Suspense>

        <Suspense fallback={<div className="h-64 bg-white"></div>}>
          <RankingList />
        </Suspense>

        {/* Fixed Footer */}
        <Footer />

        {/* Modals */}
        <GameModals />

        {/* Toast Notifications */}
        <Toast />
      </AppProvider>
    </div>
  );
}
