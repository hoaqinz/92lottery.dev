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
    "/_next/*",
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

# Add Google Analytics to the _app.js file if it exists
if [ -f "src/pages/_app.js" ]; then
  # Add Google Analytics script
  sed -i.bak '/<Head>/a \
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-W53V0LCEYG"></script>\
          <script>\
            window.dataLayer = window.dataLayer || [];\
            function gtag(){dataLayer.push(arguments);}\
            gtag("js", new Date());\
            gtag("config", "G-W53V0LCEYG");\
          </script>' src/pages/_app.js
fi

echo "Build completed successfully!"
