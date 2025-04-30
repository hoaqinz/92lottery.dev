"use client";

import { useEffect, useState } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side initialization
  useEffect(() => {
    // This runs only on the client after hydration
    setIsMounted(true);

    // Remove any extension-added classes during hydration
    document.body.className = "flex justify-center min-h-screen items-start bg-gray-100 antialiased";

    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = "smooth";

    // Prevent overscroll/bounce effect on iOS
    document.body.style.overscrollBehavior = "none";

    // Disable console errors in development
    if (process.env.NODE_ENV === 'development') {
      const originalConsoleError = console.error;
      console.error = (...args) => {
        // Filter out hydration and measurement errors
        const errorString = args.join(' ');
        if (
          errorString.includes('Hydration') ||
          errorString.includes('mismatched') ||
          errorString.includes('use-measure-height') ||
          errorString.includes('Expected server HTML')
        ) {
          return;
        }
        originalConsoleError(...args);
      };
    }

    // Clean up on unmount
    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.style.overscrollBehavior = "";
    };
  }, []);

  return (
    <div className={`antialiased transition-opacity duration-300 ${isMounted ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  );
}
