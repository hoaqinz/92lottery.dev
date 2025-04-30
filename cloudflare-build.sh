#!/bin/bash

# Cài đặt dependencies
npm install

# Tạo file CSS tạm thời để đảm bảo CSS hoạt động
mkdir -p public/css
cat > public/css/styles.css << 'EOL'
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
.p-4 { padding: 1rem; }
.m-4 { margin: 1rem; }
.mt-4 { margin-top: 1rem; }
.mb-4 { margin-bottom: 1rem; }
.bg-white { background-color: #fff; }
.bg-red-500 { background-color: #ef4444; }
.text-white { color: #fff; }
.font-bold { font-weight: 700; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.shadow { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }
EOL

# Build Next.js app
npm run build

# Sao chép các file cần thiết vào thư mục out
cp -r public/* out/ 2>/dev/null || :

# Tạo file HTML tạm thời để đảm bảo CSS được tải
cat > out/index.html.tmp << 'EOL'
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>92Lottery - Trò chơi trực tuyến hấp dẫn với nhiều phần thưởng</title>
  <link rel="stylesheet" href="/css/styles.css">
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-W53V0LCEYG"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-W53V0LCEYG');
  </script>
</head>
<body>
  <div id="__next">
EOL

# Lấy nội dung của file index.html gốc
ORIGINAL_CONTENT=$(cat out/index.html | sed -n '/<body/,/<\/body>/p' | sed '1d;$d')

# Thêm nội dung gốc vào file tạm thời
echo "$ORIGINAL_CONTENT" >> out/index.html.tmp

# Hoàn thành file HTML
cat >> out/index.html.tmp << 'EOL'
  </div>
</body>
</html>
EOL

# Thay thế file index.html gốc bằng file tạm thời
mv out/index.html.tmp out/index.html

# Cloudflare Pages sẽ tự động deploy nội dung từ thư mục out
