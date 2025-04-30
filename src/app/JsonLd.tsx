"use client";

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "92Lottery",
          "url": "https://92lottery.dev/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://92lottery.dev/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "description": "92Lottery - Trang web trò chơi trực tuyến với nhiều phần thưởng hấp dẫn, cơ hội trúng thưởng cao và giao diện thân thiện người dùng",
          "publisher": {
            "@type": "Organization",
            "name": "92Lottery",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ext.same-assets.com/2315791583/2231750973.png"
            }
          }
        })
      }}
    />
  );
}
