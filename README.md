# 92Lottery

92Lottery - Trang web trò chơi trực tuyến với nhiều phần thưởng hấp dẫn.

## Tính năng

- Trò chơi trực tuyến hấp dẫn
- Giao diện người dùng thân thiện
- Tối ưu SEO cho từ khóa "92lottery"
- Tích hợp Google Analytics

## Công nghệ sử dụng

- Next.js
- Tailwind CSS
- Cloudflare Pages

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy môi trường development
npm run dev

# Build cho production
npm run build
```

## Triển khai trên Cloudflare Pages

Dự án này được cấu hình để triển khai trên Cloudflare Pages. Để triển khai:

1. Đăng nhập vào Cloudflare Dashboard
2. Chọn "Pages" từ menu bên trái
3. Nhấp vào "Create a project" và chọn "Connect to Git"
4. Chọn repository GitHub của bạn (https://github.com/hoaqinz/92lottery.dev)
5. Cấu hình build như sau:
   - Build command: `./cloudflare-build.sh`
   - Build output directory: `.next`
   - Node.js version: 18.17.1

Cloudflare Pages sẽ tự động triển khai trang web của bạn mỗi khi bạn đẩy thay đổi lên GitHub.

## Cấu trúc dự án

```
92lottery.dev/
├── .cloudflare/          # Cấu hình Cloudflare
├── .next/                # Build output
├── public/               # Static assets
├── src/                  # Source code
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   └── lib/              # Utility functions
├── cloudflare-build.sh   # Build script for Cloudflare
├── cloudflare-pages.toml # Cloudflare Pages config
├── next.config.js        # Next.js config
└── package.json          # Project dependencies
```
