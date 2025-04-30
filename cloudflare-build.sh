#!/bin/bash

# Make sure the script fails if any command fails
set -e

# Delete node_modules and package-lock.json to ensure clean install
rm -rf node_modules
rm -f package-lock.json

# Install dependencies
npm install

# Build Next.js app
npm run build

# Create output directory if it doesn't exist
mkdir -p .next

# Copy necessary files for Cloudflare Pages
cp -r public/* .next/ 2>/dev/null || :

# Create a _routes.json file for Cloudflare Pages
cat > .next/_routes.json << 'EOL'
{
  "version": 1,
  "include": ["/*"],
  "exclude": [
    "/_next/static/*",
    "/api/*",
    "/_vercel/*",
    "/_error",
    "/_404",
    "/404",
    "/500",
    "/*.json",
    "/*.xml",
    "/*.txt",
    "/*.ico",
    "/*.png",
    "/*.svg",
    "/*.jpg",
    "/*.jpeg",
    "/*.gif",
    "/*.webp"
  ]
}
EOL

# Create a special index.html file for Cloudflare Pages
cat > .next/index.html << 'EOL'
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>92Lottery - Trò chơi trực tuyến hấp dẫn với nhiều phần thưởng</title>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-W53V0LCEYG"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-W53V0LCEYG');
  </script>
  <script>
    // Redirect to the actual app
    window.location.href = "/_next/static/index.html";
  </script>
</head>
<body>
  <div id="__next">
    <p>Loading 92Lottery...</p>
  </div>
</body>
</html>
EOL

# Create a directory for static files
mkdir -p .next/static

# Copy the built files to the static directory
cp -r .next/server .next/static/ 2>/dev/null || :
cp -r .next/static/chunks .next/static/ 2>/dev/null || :
cp -r .next/static/css .next/static/ 2>/dev/null || :
cp -r .next/static/media .next/static/ 2>/dev/null || :
cp -r .next/static/images .next/static/ 2>/dev/null || :

# Create an index.html file in the static directory
cat > .next/static/index.html << 'EOL'
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>92Lottery - Trò chơi trực tuyến hấp dẫn với nhiều phần thưởng</title>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-W53V0LCEYG"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-W53V0LCEYG');
  </script>
  <link rel="stylesheet" href="/_next/static/css/app.css">
</head>
<body>
  <div id="__next">
    <div class="flex justify-center min-h-screen items-start bg-gray-100">
      <div class="w-[420px] min-h-screen bg-white rounded-lg shadow-2xl relative overflow-x-hidden max-w-full">
        <div class="bg-[#bc2022] rounded-t-lg relative px-3 pt-3 pb-1 flex flex-col items-center h-24">
          <h1 class="text-white text-2xl font-bold">92Lottery</h1>
          <p class="text-white">Trò chơi trực tuyến hấp dẫn với nhiều phần thưởng</p>
        </div>
        <div class="p-4">
          <p class="mb-4">Chào mừng đến với 92Lottery - nơi bạn có thể tham gia các trò chơi trực tuyến hấp dẫn và có cơ hội nhận nhiều phần thưởng giá trị.</p>
          <div class="bg-gray-100 p-4 rounded mb-4">
            <h2 class="text-xl font-bold mb-2">Các trò chơi nổi bật</h2>
            <ul class="list-disc pl-5">
              <li>Xổ số trực tuyến</li>
              <li>Quay số may mắn</li>
              <li>Trò chơi đoán số</li>
              <li>Và nhiều trò chơi khác</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="/_next/static/chunks/main-app.js"></script>
</body>
</html>
EOL

# Create a CSS file for the app
mkdir -p .next/static/css
cat > .next/static/css/app.css << 'EOL'
/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 420px;
  margin: 0 auto;
  padding: 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
}

/* Utility classes */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.text-center { text-align: center; }
.w-full { width: 100%; }
.h-auto { height: auto; }
.rounded { border-radius: 0.25rem; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-t-lg { border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem; }
.p-4 { padding: 1rem; }
.px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
.pt-3 { padding-top: 0.75rem; }
.pb-1 { padding-bottom: 0.25rem; }
.m-4 { margin: 1rem; }
.mt-4 { margin-top: 1rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-2 { margin-bottom: 0.5rem; }
.bg-white { background-color: #fff; }
.bg-gray-100 { background-color: #f3f4f6; }
.bg-\[\#bc2022\] { background-color: #bc2022; }
.text-white { color: #fff; }
.text-2xl { font-size: 1.5rem; }
.text-xl { font-size: 1.25rem; }
.font-bold { font-weight: 700; }
.shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
.relative { position: relative; }
.overflow-x-hidden { overflow-x: hidden; }
.max-w-full { max-width: 100%; }
.min-h-screen { min-height: 100vh; }
.w-\[420px\] { width: 420px; }
.h-24 { height: 6rem; }
.list-disc { list-style-type: disc; }
.pl-5 { padding-left: 1.25rem; }
EOL

echo "Build completed successfully!"
