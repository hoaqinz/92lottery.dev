import type { Metadata } from "next";
import "./globals.css";
import "./custom.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import JsonLd from "./JsonLd";

export const metadata: Metadata = {
  title: "92Lottery - Trò chơi trực tuyến hấp dẫn với nhiều phần thưởng",
  description: "92Lottery - Trang web trò chơi trực tuyến với nhiều phần thưởng hấp dẫn, cơ hội trúng thưởng cao và giao diện thân thiện người dùng",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#bc2022",
  formatDetection: {
    telephone: false,
  },
  keywords: ["92lottery", "trò chơi trực tuyến", "xổ số trực tuyến", "92 lottery", "trúng thưởng", "game online"],
  robots: "index, follow",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/images/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icon-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/images/apple-icon-180x180.png", sizes: "180x180", type: "image/png" }
    ]
  },
  openGraph: {
    type: "website",
    url: "https://92lottery.dev",
    title: "92Lottery - Trò chơi trực tuyến hấp dẫn với nhiều phần thưởng",
    description: "92Lottery - Trang web trò chơi trực tuyến với nhiều phần thưởng hấp dẫn, cơ hội trúng thưởng cao và giao diện thân thiện người dùng",
    siteName: "92Lottery",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "92Lottery Banner",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "92Lottery - Trò chơi trực tuyến hấp dẫn",
    description: "92Lottery - Trang web trò chơi trực tuyến với nhiều phần thưởng hấp dẫn",
    images: ["/banner.jpg"],
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-W53V0LCEYG" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W53V0LCEYG');
          `}
        </Script>
      </head>
      <body className="flex justify-center min-h-screen items-start bg-gray-100">
        <div className="w-[420px] min-h-screen bg-white rounded-lg shadow-2xl relative overflow-x-hidden max-w-full">
          <ClientBody>{children}</ClientBody>
        </div>
        <JsonLd />
      </body>
    </html>
  );
}
